export type LegalSeverity = "critical" | "high" | "medium" | "low";

export type FindingStatus = "validated" | "needs_human_review";

export type ReviewReasonCode =
  | "missing_evidence"
  | "jurisdiction_mismatch"
  | "rule_unavailable"
  | "low_confidence"
  | "verifier_rejected"
  | "unknown_jurisdiction";

export type ClauseType =
  | "payment"
  | "termination"
  | "liability"
  | "indemnity"
  | "ip"
  | "confidentiality"
  | "privacy"
  | "dispute_resolution"
  | "assignment"
  | "warranty"
  | "other";

export type RulePackRule = {
  id: string;
  clauseType: ClauseType;
  title: string;
  description: string;
  defaultSeverity: LegalSeverity;
  citations?: Array<{
    source: string;
    section?: string;
    url: string;
  }>;
};

export type JurisdictionRulePack = {
  id: string;
  version: string;
  jurisdiction: string;
  effectiveFrom: string;
  effectiveTo?: string;
  contractTypes: string[];
  rules: RulePackRule[];
};

export type DocumentSection = {
  page: number;
  section: string;
  text: string;
};

export type ContractDocument = {
  sourceDocumentId: string;
  contractText: string;
  sections: DocumentSection[];
  metadata?: {
    governingLaw?: string;
    jurisdictionHint?: string;
    contractTypeHint?: string;
    industryHint?: string;
  };
};

export type EvidenceRef = {
  sourceDocumentId: string;
  page: number;
  section: string;
  quote: string;
  quoteStart?: number;
  quoteEnd?: number;
  evidenceHash?: string;
};

export type ProposedFinding = {
  findingId: string;
  title: string;
  clauseType: ClauseType;
  severity: LegalSeverity;
  whyItMatters: string;
  recommendedAction: string;
  applicableJurisdiction: string;
  ruleId?: string;
  ruleVersion?: string;
  confidence: number;
  verifierApproved?: boolean;
  evidence?: EvidenceRef;
};

export type ReviewedFinding = ProposedFinding & {
  status: FindingStatus;
  reasons: ReviewReasonCode[];
};

export type KeyArea = {
  title: string;
  severity: LegalSeverity;
  findingIds: string[];
};

export type JurisdictionResolution = {
  jurisdiction: string;
  confidence: number;
  source: "governing_law_clause" | "metadata_hint" | "unknown";
};

export type ContractTypeResolution = {
  contractType: string;
  confidence: number;
};

export type LegalCharacteristicLabel =
  | "bilateral"
  | "unilateral"
  | "express"
  | "implied"
  | "void"
  | "voidable"
  | "executed"
  | "executory"
  | "adhesion"
  | "aleatory";

export type LegalCharacterizationResolution = {
  labels: LegalCharacteristicLabel[];
  confidence: number;
  source: string;
};

export type LegalReviewTrace = {
  attempt: number;
  retried: boolean;
  retryReason?: string;
  jurisdiction: JurisdictionResolution;
  contractType: ContractTypeResolution;
  legalCharacterization?: LegalCharacterizationResolution;
  agreementChecklistType?: string;
  rulePackId?: string;
  rulePackVersion?: string;
  timestamp: string;
};

export type ChecklistItemStatus = "present" | "missing" | "unclear";

export type AgreementChecklistItem = {
  id: string;
  title: string;
  status: ChecklistItemStatus;
  citations?: Array<{
    source: string;
    section?: string;
    url?: string;
  }>;
  evidence?: {
    page: number;
    section: string;
    quote: string;
  };
};

export type AgreementChecklistResult = {
  agreementType: string;
  jurisdiction: string;
  items: AgreementChecklistItem[];
  summary: {
    present: number;
    missing: number;
    unclear: number;
  };
};

export type LegalReviewResult = {
  validatedFindings: ReviewedFinding[];
  needsHumanReview: ReviewedFinding[];
  keyAreas: KeyArea[];
  legalCharacterization?: LegalCharacterizationResolution;
  agreementChecklist?: AgreementChecklistResult;
  trace: LegalReviewTrace[];
};

export type LegalReviewRunParams = {
  document: ContractDocument;
  runId: string;
  maxAttempts?: number;
  minConfidence?: number;
  highSeverityMinConfidence?: number;
  llm?: {
    enabled?: boolean;
    timeoutMs?: number;
    config?: OpenClawConfig;
  };
};

export type LegalReviewDeps = {
  jurisdictionResolver: (document: ContractDocument) => Promise<JurisdictionResolution>;
  contractTypeClassifier: (document: ContractDocument) => Promise<ContractTypeResolution>;
  legalCharacterizer?: (params: {
    document: ContractDocument;
    jurisdiction: JurisdictionResolution;
    contractType: ContractTypeResolution;
  }) => Promise<LegalCharacterizationResolution>;
  agreementChecklistEvaluator?: (params: {
    document: ContractDocument;
    jurisdiction: JurisdictionResolution;
    contractType: ContractTypeResolution;
  }) => Promise<AgreementChecklistResult | undefined>;
  rulePackSelector: (params: {
    jurisdiction: JurisdictionResolution;
    contractType: ContractTypeResolution;
    nowIso: string;
  }) => Promise<JurisdictionRulePack | undefined>;
  clauseExtractor: (params: {
    document: ContractDocument;
    jurisdiction: JurisdictionResolution;
    contractType: ContractTypeResolution;
  }) => Promise<ProposedFinding[]>;
  ruleMatcher: (params: {
    proposedFindings: ProposedFinding[];
    rulePack?: JurisdictionRulePack;
  }) => Promise<ProposedFinding[]>;
  riskScorer: (params: {
    findings: ProposedFinding[];
    rulePack?: JurisdictionRulePack;
  }) => Promise<ProposedFinding[]>;
  evidenceVerifier: (params: {
    findings: ProposedFinding[];
    document: ContractDocument;
  }) => Promise<ProposedFinding[]>;
  synthesizer: (params: {
    validatedFindings: ReviewedFinding[];
    needsHumanReview: ReviewedFinding[];
  }) => Promise<KeyArea[]>;
};

export class LegalReviewRetryableError extends Error {
  readonly retryable = true;
}
import type { OpenClawConfig } from "../../config/config.js";
