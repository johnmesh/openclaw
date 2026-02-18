import { createHash } from "node:crypto";
import type {
  ClauseType,
  ContractDocument,
  ContractTypeResolution,
  JurisdictionResolution,
  JurisdictionRulePack,
  KeyArea,
  LegalCharacterizationResolution,
  LegalSeverity,
  ProposedFinding,
  ReviewedFinding,
  RulePackRule,
} from "./types.js";
import { KENYA_CONTRACT_TYPE_ALIASES, normalizeKenyaContractType } from "./contract-types.js";
import { DEFAULT_RULE_PACKS } from "./rule-packs.js";
export { defaultAgreementChecklistEvaluator } from "./checklists.js";

const normalize = (value: string): string => value.trim().toLowerCase();

const contains = (text: string, pattern: string): boolean =>
  normalize(text).includes(normalize(pattern));

const containsAny = (text: string, patterns: string[]): boolean =>
  patterns.some((pattern) => contains(text, pattern));

function normalizeJurisdictionId(value: string): string {
  const normalized = normalize(value);
  if (
    normalized === "ke" ||
    normalized === "kenya" ||
    normalized === "republic of kenya" ||
    normalized === "kenyan law" ||
    normalized === "laws of kenya"
  ) {
    return "ke";
  }
  if (
    normalized === "uk" ||
    normalized === "united kingdom" ||
    normalized === "england and wales" ||
    normalized === "english law"
  ) {
    return "uk";
  }
  if (
    normalized === "us" ||
    normalized === "usa" ||
    normalized === "united states" ||
    normalized === "united states of america"
  ) {
    return "us";
  }
  return normalized;
}

const classifyClauseType = (text: string): ClauseType => {
  if (contains(text, "terminate") || contains(text, "termination")) {
    return "termination";
  }
  if (contains(text, "payment") || contains(text, "fee")) {
    return "payment";
  }
  if (contains(text, "liability") || contains(text, "damages")) {
    return "liability";
  }
  if (contains(text, "indemn")) {
    return "indemnity";
  }
  if (contains(text, "confidential")) {
    return "confidentiality";
  }
  if (
    contains(text, "data protection") ||
    contains(text, "personal data") ||
    contains(text, "privacy")
  ) {
    return "privacy";
  }
  if (
    contains(text, "intellectual property") ||
    contains(text, "ip rights") ||
    contains(text, "ownership")
  ) {
    return "ip";
  }
  if (contains(text, "assign") || contains(text, "transfer this agreement")) {
    return "assignment";
  }
  if (contains(text, "warranty") || contains(text, "as is")) {
    return "warranty";
  }
  if (contains(text, "governing law") || contains(text, "dispute")) {
    return "dispute_resolution";
  }
  return "other";
};

function inferIndustry(params: { document: ContractDocument; contractType: string }): string {
  const explicit = params.document.metadata?.industryHint;
  if (explicit && explicit.trim()) {
    return normalize(explicit);
  }
  const text = normalize(params.document.contractText);
  if (containsAny(text, ["software", "saas", "platform", "api", "cloud"])) {
    return "technology";
  }
  if (containsAny(text, ["hospital", "clinic", "patient", "medical"])) {
    return "healthcare";
  }
  if (containsAny(text, ["tenant", "landlord", "premises", "lease"])) {
    return "real_estate";
  }
  if (containsAny(text, ["construction", "contractor", "site", "works"])) {
    return "construction";
  }
  if (containsAny(params.contractType, ["employment"])) {
    return "employment";
  }
  return "general";
}

function classifyClauseTypeForContext(params: {
  text: string;
  contractType: string;
  industry: string;
  jurisdiction: string;
}): ClauseType {
  const base = classifyClauseType(params.text);
  if (base !== "other") {
    return base;
  }

  const text = normalize(params.text);
  const contractType = normalize(params.contractType);
  const industry = normalize(params.industry);
  const jurisdiction = normalize(params.jurisdiction);

  if (
    containsAny(contractType, ["sales_agreement", "sale_of_goods", "international_sales_contract"])
  ) {
    if (
      containsAny(text, ["price", "tax", "vat", "duty", "invoic", "quantity", "payment", "refund"])
    ) {
      return "payment";
    }
    if (
      containsAny(text, [
        "delivery",
        "incoterm",
        "risk transfer",
        "title transfer",
        "retention of title",
      ])
    ) {
      return "liability";
    }
    if (
      containsAny(text, [
        "warrant",
        "fitness for purpose",
        "inspection",
        "acceptance",
        "defective",
        "repair",
        "replacement",
      ])
    ) {
      return "warranty";
    }
    if (containsAny(text, ["termination", "breach", "insolvency"])) {
      return "termination";
    }
    if (containsAny(text, ["indemn"])) {
      return "indemnity";
    }
    if (containsAny(text, ["governing law", "dispute", "arbitration", "jurisdiction"])) {
      return "dispute_resolution";
    }
    if (containsAny(text, ["assignment"])) {
      return "assignment";
    }
    if (containsAny(text, ["confidential"])) {
      return "confidentiality";
    }
  }

  if (
    containsAny(text, ["service level", "uptime", "availability", "service credits"]) &&
    containsAny(contractType, ["msa", "sow", "services_agreement", "service agreement"]) &&
    containsAny(industry, ["technology", "saas", "software"])
  ) {
    return "warranty";
  }

  if (
    containsAny(text, [
      "processor",
      "controller",
      "processing",
      "data subject",
      "security measures",
    ]) &&
    containsAny(jurisdiction, ["ke", "kenya", "uk", "eu"])
  ) {
    return "privacy";
  }

  if (
    containsAny(text, ["notice period", "dismissal", "redundancy", "severance"]) &&
    containsAny(contractType, ["employment"])
  ) {
    return "termination";
  }

  if (
    containsAny(text, ["rent", "landlord", "tenant", "premises"]) &&
    containsAny(contractType, ["lease", "tenancy"])
  ) {
    return "payment";
  }

  return "other";
}

function confidenceForSeverity(severity: LegalSeverity): number {
  if (severity === "critical") {
    return 0.9;
  }
  if (severity === "high") {
    return 0.86;
  }
  if (severity === "medium") {
    return 0.8;
  }
  return 0.74;
}

function quoteForEvidence(text: string, max = 260): string {
  return text.replace(/\s+/g, " ").trim().slice(0, max);
}

function hasDuration(text: string): boolean {
  return /\b\d+\s*(day|days|month|months|year|years)\b/i.test(text);
}

function hasMoneyOrPercent(text: string): boolean {
  return /(?:[$€£]|kes|ksh|usd|eur|gbp|\b\d+(?:\.\d+)?\s*%)/i.test(text);
}

function hasCapLanguage(text: string): boolean {
  return /\b(cap|aggregate|maximum|limit(?:ed|ation)?)\b/i.test(text);
}

const severityFromRule = (rule?: RulePackRule): LegalSeverity => rule?.defaultSeverity ?? "medium";
export { DEFAULT_RULE_PACKS } from "./rule-packs.js";

export const LEGAL_CHARACTERISTIC_LABELS: LegalCharacterizationResolution["labels"] = [
  "bilateral",
  "unilateral",
  "express",
  "implied",
  "void",
  "voidable",
  "executed",
  "executory",
  "adhesion",
  "aleatory",
];

export async function defaultLegalCharacterizer(params: {
  document: ContractDocument;
  jurisdiction: JurisdictionResolution;
  contractType: ContractTypeResolution;
}): Promise<LegalCharacterizationResolution> {
  const text = normalize(
    [
      params.document.contractText,
      ...params.document.sections.map((section) => section.text),
      params.contractType.contractType,
    ].join(" "),
  );
  const labels = new Set<LegalCharacterizationResolution["labels"][number]>();

  if (
    containsAny(text, ["party a", "party b", "both parties", "each party", "mutual obligations"])
  ) {
    labels.add("bilateral");
  }
  if (containsAny(text, ["reward", "upon occurrence", "upon event", "insurer shall pay"])) {
    labels.add("unilateral");
  }
  if (containsAny(text, ["the parties agree", "agreement is made", "terms and conditions"])) {
    labels.add("express");
  }
  if (containsAny(text, ["implied by law", "custom and practice", "course of dealing"])) {
    labels.add("implied");
  }
  if (containsAny(text, ["illegal purpose", "void ab initio", "unenforceable and void"])) {
    labels.add("void");
  }
  if (containsAny(text, ["at the option", "may rescind", "voidable"])) {
    labels.add("voidable");
  }
  if (containsAny(text, ["paid in full", "fully performed", "already delivered"])) {
    labels.add("executed");
  }
  if (containsAny(text, ["shall", "future obligations", "to be performed"])) {
    labels.add("executory");
  }
  if (containsAny(text, ["non-negotiable", "take it or leave it", "standard form contract"])) {
    labels.add("adhesion");
  }
  if (
    containsAny(text, ["insurance policy", "premium", "contingent event", "uncertain event"]) ||
    containsAny(params.contractType.contractType, ["insurance"])
  ) {
    labels.add("aleatory");
  }

  if (labels.size === 0) {
    labels.add("express");
  }
  const confidence = Math.min(0.95, 0.55 + labels.size * 0.08);
  return {
    labels: [...labels],
    confidence,
    source:
      normalize(params.jurisdiction.jurisdiction) === "ke"
        ? "heuristic_kenya_legal_characterizer"
        : "heuristic_legal_characterizer",
  };
}

export async function defaultJurisdictionResolver(
  document: ContractDocument,
): Promise<JurisdictionResolution> {
  const explicit = document.metadata?.governingLaw ?? document.metadata?.jurisdictionHint;
  if (explicit && explicit.trim()) {
    return {
      jurisdiction: normalizeJurisdictionId(explicit),
      confidence: 0.95,
      source: "metadata_hint",
    };
  }
  const fromBody = document.sections.find(
    (section) => contains(section.text, "governing law") || contains(section.text, "laws of"),
  );
  if (fromBody) {
    if (
      contains(fromBody.text, "england") ||
      contains(fromBody.text, "wales") ||
      contains(fromBody.text, "uk")
    ) {
      return { jurisdiction: "uk", confidence: 0.8, source: "governing_law_clause" };
    }
    if (
      contains(fromBody.text, "united states") ||
      contains(fromBody.text, "new york") ||
      contains(fromBody.text, "california")
    ) {
      return { jurisdiction: "us", confidence: 0.8, source: "governing_law_clause" };
    }
    if (
      contains(fromBody.text, "kenya") ||
      contains(fromBody.text, "nairobi") ||
      contains(fromBody.text, "republic of kenya")
    ) {
      return { jurisdiction: "ke", confidence: 0.8, source: "governing_law_clause" };
    }
  }
  return { jurisdiction: "unknown", confidence: 0, source: "unknown" };
}

export async function defaultContractTypeClassifier(
  document: ContractDocument,
): Promise<ContractTypeResolution> {
  const hint = document.metadata?.contractTypeHint;
  if (hint && hint.trim()) {
    return { contractType: normalizeKenyaContractType(hint), confidence: 0.95 };
  }

  const text = normalize(document.contractText);
  if (text.includes("master services agreement") || text.includes("msa")) {
    return { contractType: "msa", confidence: 0.8 };
  }
  if (text.includes("statement of work") || text.includes("sow")) {
    return { contractType: "sow", confidence: 0.8 };
  }
  if (text.includes("non-disclosure") || text.includes("nda")) {
    return { contractType: "nda", confidence: 0.8 };
  }

  for (const [label, canonical] of Object.entries(KENYA_CONTRACT_TYPE_ALIASES)) {
    if (label.length < 4) {
      continue;
    }
    if (text.includes(label)) {
      return { contractType: canonical, confidence: 0.76 };
    }
  }

  return { contractType: "general", confidence: 0.4 };
}

export async function defaultRulePackSelector(params: {
  jurisdiction: JurisdictionResolution;
  contractType: ContractTypeResolution;
  nowIso: string;
}): Promise<JurisdictionRulePack | undefined> {
  const now = new Date(params.nowIso).getTime();
  const jurisdiction = normalizeJurisdictionId(params.jurisdiction.jurisdiction);
  const contractType = normalize(params.contractType.contractType);

  return DEFAULT_RULE_PACKS.find((pack) => {
    if (normalize(pack.jurisdiction) !== jurisdiction) {
      return false;
    }
    const effectiveFrom = new Date(pack.effectiveFrom).getTime();
    const effectiveTo = pack.effectiveTo
      ? new Date(pack.effectiveTo).getTime()
      : Number.POSITIVE_INFINITY;
    if (now < effectiveFrom || now > effectiveTo) {
      return false;
    }
    return (
      pack.contractTypes.map(normalize).includes(contractType) ||
      pack.contractTypes.includes("general")
    );
  });
}

export async function defaultClauseExtractor(params: {
  document: ContractDocument;
  jurisdiction: JurisdictionResolution;
  contractType: ContractTypeResolution;
}): Promise<ProposedFinding[]> {
  const findings: ProposedFinding[] = [];
  let index = 0;
  const industry = inferIndustry({
    document: params.document,
    contractType: params.contractType.contractType,
  });

  const pushFinding = (paramsForFinding: {
    section: ContractDocument["sections"][number];
    clauseType: ClauseType;
    title: string;
    severity: LegalSeverity;
    whyItMatters: string;
    recommendedAction: string;
  }) => {
    index += 1;
    const quote = quoteForEvidence(paramsForFinding.section.text);
    findings.push({
      findingId: `finding_${index}`,
      title: paramsForFinding.title,
      clauseType: paramsForFinding.clauseType,
      severity: paramsForFinding.severity,
      whyItMatters: paramsForFinding.whyItMatters,
      recommendedAction: paramsForFinding.recommendedAction,
      applicableJurisdiction: params.jurisdiction.jurisdiction,
      confidence: confidenceForSeverity(paramsForFinding.severity),
      evidence: {
        sourceDocumentId: params.document.sourceDocumentId,
        page: paramsForFinding.section.page,
        section: paramsForFinding.section.section,
        quote,
        quoteStart: 0,
        quoteEnd: quote.length,
      },
    });
  };

  for (const section of params.document.sections) {
    const text = section.text.trim();
    if (!text) {
      continue;
    }
    const clauseType = classifyClauseTypeForContext({
      text,
      contractType: params.contractType.contractType,
      industry,
      jurisdiction: params.jurisdiction.jurisdiction,
    });
    const lowered = text.toLowerCase();

    if (clauseType === "liability") {
      if (!hasCapLanguage(text)) {
        pushFinding({
          section,
          clauseType,
          title: "Liability clause may be uncapped",
          severity: "high",
          whyItMatters:
            "Open-ended liability can create large and unpredictable financial exposure.",
          recommendedAction: "Add an explicit cap and carve-outs that are clear and balanced.",
        });
      } else {
        pushFinding({
          section,
          clauseType,
          title: "Liability clause needs cap scope check",
          severity: "medium",
          whyItMatters: "A cap can still be risky if exclusions and scope are unclear.",
          recommendedAction:
            "Confirm the cap amount, exclusions, and aggregation period are explicit.",
        });
      }
      continue;
    }

    if (clauseType === "termination") {
      if (!hasDuration(text)) {
        pushFinding({
          section,
          clauseType,
          title: "Termination notice period is unclear",
          severity: "high",
          whyItMatters: "Unclear notice periods increase dispute risk when ending the contract.",
          recommendedAction:
            "State a fixed notice period and delivery method for termination notices.",
        });
      } else {
        pushFinding({
          section,
          clauseType,
          title: "Termination clause should be verified",
          severity: "medium",
          whyItMatters:
            "Termination triggers and consequences can be misread if drafting is broad.",
          recommendedAction: "Check trigger events, cure period, and post-termination duties.",
        });
      }
      continue;
    }

    if (clauseType === "payment") {
      if (!hasDuration(text) || !hasMoneyOrPercent(text)) {
        pushFinding({
          section,
          clauseType,
          title: "Payment terms may be incomplete",
          severity: "high",
          whyItMatters: "Missing due dates or amount logic often causes billing disputes.",
          recommendedAction:
            "Add exact payment timelines, currency, and late-payment consequences.",
        });
      } else {
        pushFinding({
          section,
          clauseType,
          title: "Payment clause should be checked",
          severity: "medium",
          whyItMatters: "Payment clauses can still hide penalties or ambiguous billing triggers.",
          recommendedAction: "Confirm invoice timeline, acceptance criteria, and penalty language.",
        });
      }
      continue;
    }

    if (clauseType === "dispute_resolution") {
      const hasLaw = lowered.includes("governing law") || lowered.includes("laws of");
      const hasForum =
        lowered.includes("court") ||
        lowered.includes("arbitration") ||
        lowered.includes("tribunal");
      pushFinding({
        section,
        clauseType,
        title:
          hasLaw && hasForum
            ? "Dispute clause should be validated"
            : "Dispute clause may be incomplete",
        severity: hasLaw && hasForum ? "medium" : "high",
        whyItMatters: "Missing governing law or forum language makes enforcement harder.",
        recommendedAction: "Specify governing law, forum/seat, and dispute process clearly.",
      });
      continue;
    }

    if (clauseType !== "other") {
      pushFinding({
        section,
        clauseType,
        title: `${clauseType.replace(/_/g, " ")} clause review`,
        severity: "medium",
        whyItMatters: "This clause can materially change rights, duties, or enforcement outcomes.",
        recommendedAction: "Validate wording against this jurisdiction and contract type.",
      });
      continue;
    }

    if (lowered.includes("notwithstanding") || lowered.includes("except as otherwise")) {
      pushFinding({
        section,
        clauseType: "other",
        title: "Complex carve-out language found",
        severity: "medium",
        whyItMatters: "Cross-references and carve-outs can override key protections unexpectedly.",
        recommendedAction: "Review cross-references and confirm no hidden conflicts exist.",
      });
    }
  }

  return findings;
}

export async function defaultRuleMatcher(params: {
  proposedFindings: ProposedFinding[];
  rulePack?: JurisdictionRulePack;
}): Promise<ProposedFinding[]> {
  if (!params.rulePack) {
    return params.proposedFindings;
  }
  const rulesByType = new Map(params.rulePack.rules.map((rule) => [rule.clauseType, rule]));

  return params.proposedFindings.map((finding) => {
    const matched = rulesByType.get(finding.clauseType);
    if (!matched) {
      return finding;
    }
    return {
      ...finding,
      ruleId: matched.id,
      ruleVersion: params.rulePack?.version,
      severity: severityFromRule(matched),
      whyItMatters: matched.description,
      confidence: Math.max(finding.confidence, 0.82),
    };
  });
}

export async function defaultRiskScorer(params: {
  findings: ProposedFinding[];
  rulePack?: JurisdictionRulePack;
}): Promise<ProposedFinding[]> {
  return params.findings.map((finding) => {
    const confidenceBoost = finding.ruleId ? 0.05 : 0;
    const cappedConfidence = Math.min(0.99, finding.confidence + confidenceBoost);
    return {
      ...finding,
      confidence: cappedConfidence,
    };
  });
}

export async function defaultEvidenceVerifier(params: {
  findings: ProposedFinding[];
  document: ContractDocument;
}): Promise<ProposedFinding[]> {
  const sectionMap = new Map(
    params.document.sections.map((section) => [`${section.page}:${section.section}`, section.text]),
  );

  return params.findings.map((finding) => {
    const evidence = finding.evidence;
    if (!evidence) {
      return { ...finding, verifierApproved: false };
    }
    const key = `${evidence.page}:${evidence.section}`;
    const sectionText = sectionMap.get(key) ?? "";
    const hasQuote =
      evidence.quote.trim().length > 0 && sectionText.includes(evidence.quote.trim());
    if (!hasQuote) {
      return { ...finding, verifierApproved: false };
    }
    const digest = createHash("sha256").update(evidence.quote).digest("hex");
    return {
      ...finding,
      verifierApproved: true,
      evidence: {
        ...evidence,
        evidenceHash: digest,
      },
    };
  });
}

const severityRank: Record<LegalSeverity, number> = {
  critical: 4,
  high: 3,
  medium: 2,
  low: 1,
};

export async function defaultSynthesizer(params: {
  validatedFindings: ReviewedFinding[];
  needsHumanReview: ReviewedFinding[];
}): Promise<KeyArea[]> {
  const grouped = new Map<string, { severity: LegalSeverity; findingIds: string[] }>();

  for (const finding of params.validatedFindings) {
    const existing = grouped.get(finding.clauseType);
    if (!existing) {
      grouped.set(finding.clauseType, {
        severity: finding.severity,
        findingIds: [finding.findingId],
      });
      continue;
    }
    existing.findingIds.push(finding.findingId);
    if (severityRank[finding.severity] > severityRank[existing.severity]) {
      existing.severity = finding.severity;
    }
  }

  for (const finding of params.needsHumanReview) {
    if (finding.severity !== "high" && finding.severity !== "critical") {
      continue;
    }
    const key = `${finding.clauseType}:human`;
    const existing = grouped.get(key);
    if (!existing) {
      grouped.set(key, { severity: finding.severity, findingIds: [finding.findingId] });
      continue;
    }
    existing.findingIds.push(finding.findingId);
  }

  return Array.from(grouped.entries()).map(([title, data]) => ({
    title,
    severity: data.severity,
    findingIds: data.findingIds,
  }));
}
