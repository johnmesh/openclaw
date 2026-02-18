import type { OpenClawConfig } from "../../config/config.js";
import type {
  LegalReviewDeps,
  LegalReviewResult,
  LegalReviewRunParams,
  LegalReviewTrace,
  ProposedFinding,
} from "./types.js";
import {
  defaultAgreementChecklistEvaluator,
  defaultClauseExtractor,
  defaultContractTypeClassifier,
  defaultEvidenceVerifier,
  defaultJurisdictionResolver,
  defaultLegalCharacterizer,
  defaultRiskScorer,
  defaultRuleMatcher,
  defaultRulePackSelector,
  defaultSynthesizer,
} from "./default-agents.js";
import { evaluateFindingGates } from "./gates.js";
import { llmClauseExtractor, llmContractTypeClassifier } from "./llm-agents.js";
import { LegalReviewRetryableError } from "./types.js";

const DEFAULT_MAX_ATTEMPTS = 3;
const DEFAULT_MIN_CONFIDENCE = 0.8;
const DEFAULT_HIGH_SEVERITY_MIN_CONFIDENCE = 0.9;

export function createDefaultLegalReviewDeps(params?: {
  llm?: {
    enabled?: boolean;
    timeoutMs?: number;
    config?: OpenClawConfig;
  };
  runId?: string;
}): LegalReviewDeps {
  const llmEnabled = Boolean(params?.llm?.enabled && params.llm?.config);

  return {
    jurisdictionResolver: async (document) => defaultJurisdictionResolver(document),
    contractTypeClassifier: async (document) => {
      if (llmEnabled && params?.llm?.config) {
        const llmResult = await llmContractTypeClassifier({
          document,
          runId: params?.runId ?? "legal-review",
          cfg: params.llm.config,
          timeoutMs: params.llm.timeoutMs,
        });
        if (llmResult) {
          return llmResult;
        }
      }
      return defaultContractTypeClassifier(document);
    },
    legalCharacterizer: defaultLegalCharacterizer,
    agreementChecklistEvaluator: defaultAgreementChecklistEvaluator,
    rulePackSelector: defaultRulePackSelector,
    clauseExtractor: async ({ document, jurisdiction, contractType }) => {
      if (llmEnabled && params?.llm?.config) {
        const llmResult = await llmClauseExtractor({
          document,
          jurisdiction,
          contractType,
          runId: params?.runId ?? "legal-review",
          cfg: params.llm.config,
          timeoutMs: params.llm.timeoutMs,
        });
        if (llmResult) {
          return llmResult;
        }
      }
      return defaultClauseExtractor({ document, jurisdiction, contractType });
    },
    ruleMatcher: defaultRuleMatcher,
    riskScorer: defaultRiskScorer,
    evidenceVerifier: defaultEvidenceVerifier,
    synthesizer: defaultSynthesizer,
  };
}

function isRetryableError(err: unknown): boolean {
  if (!err || typeof err !== "object") {
    return false;
  }
  if (err instanceof LegalReviewRetryableError) {
    return true;
  }
  return "retryable" in err && (err as { retryable?: unknown }).retryable === true;
}

export async function runLegalReview(
  params: LegalReviewRunParams,
  deps?: LegalReviewDeps,
): Promise<LegalReviewResult> {
  const maxAttempts = Math.max(1, params.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
  const minConfidence = params.minConfidence ?? DEFAULT_MIN_CONFIDENCE;
  const highSeverityMinConfidence =
    params.highSeverityMinConfidence ?? DEFAULT_HIGH_SEVERITY_MIN_CONFIDENCE;

  const trace: LegalReviewTrace[] = [];
  let attempt = 0;

  while (true) {
    attempt += 1;
    const nowIso = new Date().toISOString();
    const resolvedDeps =
      deps ??
      createDefaultLegalReviewDeps({
        llm: params.llm,
        runId: params.runId,
      });
    try {
      const jurisdiction = await resolvedDeps.jurisdictionResolver(params.document);
      const contractType = await resolvedDeps.contractTypeClassifier(params.document);
      const legalCharacterization = await resolvedDeps.legalCharacterizer?.({
        document: params.document,
        jurisdiction,
        contractType,
      });
      const agreementChecklist = await resolvedDeps.agreementChecklistEvaluator?.({
        document: params.document,
        jurisdiction,
        contractType,
      });
      const rulePack = await resolvedDeps.rulePackSelector({
        jurisdiction,
        contractType,
        nowIso,
      });

      const extracted = await resolvedDeps.clauseExtractor({
        document: params.document,
        jurisdiction,
        contractType,
      });
      const ruleMatched = await resolvedDeps.ruleMatcher({
        proposedFindings: extracted,
        rulePack,
      });
      const scored = await resolvedDeps.riskScorer({
        findings: ruleMatched,
        rulePack,
      });
      const verified = await resolvedDeps.evidenceVerifier({
        findings: scored,
        document: params.document,
      });

      const reviewed = verified.map((finding) =>
        evaluateFindingGates({
          finding,
          document: params.document,
          jurisdiction,
          rulePack,
          minConfidence,
          highSeverityMinConfidence,
        }),
      );

      const validatedFindings = reviewed.filter((finding) => finding.status === "validated");
      const needsHumanReview = reviewed.filter(
        (finding) => finding.status === "needs_human_review",
      );
      const keyAreas = await resolvedDeps.synthesizer({
        validatedFindings,
        needsHumanReview,
      });

      trace.push({
        attempt,
        retried: attempt > 1,
        jurisdiction,
        contractType,
        legalCharacterization,
        agreementChecklistType: agreementChecklist?.agreementType,
        rulePackId: rulePack?.id,
        rulePackVersion: rulePack?.version,
        timestamp: nowIso,
      });

      return {
        validatedFindings,
        needsHumanReview,
        keyAreas,
        legalCharacterization,
        agreementChecklist,
        trace,
      };
    } catch (err) {
      const shouldRetry = isRetryableError(err) && attempt < maxAttempts;
      trace.push({
        attempt,
        retried: shouldRetry,
        retryReason: err instanceof Error ? err.message : "unknown_error",
        jurisdiction: { jurisdiction: "unknown", confidence: 0, source: "unknown" },
        contractType: { contractType: "unknown", confidence: 0 },
        timestamp: nowIso,
      });
      if (shouldRetry) {
        continue;
      }
      throw err;
    }
  }
}

export function requireEvidenceHash(findings: ProposedFinding[]): ProposedFinding[] {
  return findings.map((finding) => {
    if (!finding.evidence?.evidenceHash) {
      return {
        ...finding,
        verifierApproved: false,
      };
    }
    return finding;
  });
}
