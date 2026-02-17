import type {
  ContractDocument,
  JurisdictionResolution,
  JurisdictionRulePack,
  ProposedFinding,
  ReviewedFinding,
  ReviewReasonCode,
} from "./types.js";

function isEvidenceValid(finding: ProposedFinding, document: ContractDocument): boolean {
  const evidence = finding.evidence;
  if (!evidence) {
    return false;
  }
  if (evidence.sourceDocumentId !== document.sourceDocumentId) {
    return false;
  }
  if (!Number.isFinite(evidence.page) || evidence.page < 1) {
    return false;
  }
  if (!evidence.section.trim() || !evidence.quote.trim()) {
    return false;
  }
  return true;
}

function isJurisdictionApplicable(params: {
  finding: ProposedFinding;
  jurisdiction: JurisdictionResolution;
  rulePack?: JurisdictionRulePack;
}): boolean {
  const findingJurisdiction = params.finding.applicableJurisdiction.trim().toLowerCase();
  const resolvedJurisdiction = params.jurisdiction.jurisdiction.trim().toLowerCase();
  if (!resolvedJurisdiction || resolvedJurisdiction === "unknown") {
    return false;
  }
  if (findingJurisdiction !== resolvedJurisdiction) {
    return false;
  }
  if (params.rulePack) {
    return params.rulePack.jurisdiction.trim().toLowerCase() === resolvedJurisdiction;
  }
  return true;
}

function confidenceThreshold(params: {
  severity: ProposedFinding["severity"];
  minConfidence: number;
  highSeverityMinConfidence: number;
}): number {
  if (params.severity === "critical" || params.severity === "high") {
    return params.highSeverityMinConfidence;
  }
  return params.minConfidence;
}

export function evaluateFindingGates(params: {
  finding: ProposedFinding;
  document: ContractDocument;
  jurisdiction: JurisdictionResolution;
  rulePack?: JurisdictionRulePack;
  minConfidence: number;
  highSeverityMinConfidence: number;
}): ReviewedFinding {
  const reasons: ReviewReasonCode[] = [];

  if (!isEvidenceValid(params.finding, params.document)) {
    reasons.push("missing_evidence");
  }

  if (!isJurisdictionApplicable(params)) {
    if (params.jurisdiction.jurisdiction.trim().toLowerCase() === "unknown") {
      reasons.push("unknown_jurisdiction");
    } else {
      reasons.push("jurisdiction_mismatch");
    }
  }

  if (params.rulePack && params.finding.ruleId) {
    const hasRule = params.rulePack.rules.some((rule) => rule.id === params.finding.ruleId);
    if (!hasRule) {
      reasons.push("rule_unavailable");
    }
  }

  const threshold = confidenceThreshold({
    severity: params.finding.severity,
    minConfidence: params.minConfidence,
    highSeverityMinConfidence: params.highSeverityMinConfidence,
  });
  if (params.finding.confidence < threshold) {
    reasons.push("low_confidence");
  }

  if (params.finding.verifierApproved !== true) {
    reasons.push("verifier_rejected");
  }

  return {
    ...params.finding,
    status: reasons.length === 0 ? "validated" : "needs_human_review",
    reasons,
  };
}
