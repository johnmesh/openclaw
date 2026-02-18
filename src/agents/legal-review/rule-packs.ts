import type { JurisdictionRulePack } from "./types.js";

export const DEFAULT_RULE_PACKS: JurisdictionRulePack[] = [
  {
    id: "us-general-commercial",
    version: "2026-01",
    jurisdiction: "us",
    effectiveFrom: "2026-01-01",
    contractTypes: ["msa", "nda", "sow", "services_agreement", "general"],
    rules: [
      {
        id: "US-LIAB-001",
        clauseType: "liability",
        title: "Liability cap clarity",
        description: "Liability cap should be explicit and scoped.",
        defaultSeverity: "high",
      },
      {
        id: "US-TERM-001",
        clauseType: "termination",
        title: "Termination for convenience notice",
        description: "Termination notice requirements should be explicit.",
        defaultSeverity: "medium",
      },
      {
        id: "US-CONF-001",
        clauseType: "confidentiality",
        title: "Confidentiality survival",
        description: "Confidentiality duration and survival should be defined.",
        defaultSeverity: "medium",
      },
    ],
  },
  {
    id: "uk-general-commercial",
    version: "2026-01",
    jurisdiction: "uk",
    effectiveFrom: "2026-01-01",
    contractTypes: ["msa", "nda", "sow", "services_agreement", "general"],
    rules: [
      {
        id: "UK-LIAB-001",
        clauseType: "liability",
        title: "Liability limitation reasonableness",
        description: "Liability exclusions should be reviewed for enforceability risk.",
        defaultSeverity: "high",
      },
      {
        id: "UK-DISP-001",
        clauseType: "dispute_resolution",
        title: "Jurisdiction and venue clarity",
        description: "Forum and venue should be clearly drafted.",
        defaultSeverity: "medium",
      },
    ],
  },
  {
    id: "ke-general-commercial",
    version: "2026-02",
    jurisdiction: "ke",
    effectiveFrom: "2026-01-01",
    contractTypes: ["msa", "nda", "sow", "services_agreement", "general"],
    rules: [
      {
        id: "KE-DISP-001",
        clauseType: "dispute_resolution",
        title: "Arbitration agreement and forum wording must be explicit",
        description:
          "Dispute clauses should clearly state arbitration/court pathway and forum details to reduce stay/enforcement uncertainty.",
        defaultSeverity: "high",
        citations: [
          {
            source: "Arbitration Act, 1995 (Kenya Law)",
            section: "Sections 4, 6, and 10",
            url: "https://new.kenyalaw.org/akn/ke/act/1995/4/eng@2024-12-27",
          },
        ],
      },
      {
        id: "KE-PAY-001",
        clauseType: "payment",
        title: "Payment timelines and consequences should be explicit",
        description:
          "Payment clauses should define timelines, default consequences, and charges/interest to reduce enforceability disputes.",
        defaultSeverity: "high",
        citations: [
          {
            source: "Competition Act, 2010 (Kenya Law)",
            section: "Section 24A(5) and 24A(7)",
            url: "https://new.kenyalaw.org/akn/ke/act/2010/12/eng@2023-12-11",
          },
        ],
      },
      {
        id: "KE-PRIV-001",
        clauseType: "privacy",
        title: "Personal data processing duties must be contractually defined",
        description:
          "Where personal data is handled, contracts should define lawful processing duties, rights handling, and security/accountability obligations.",
        defaultSeverity: "high",
        citations: [
          {
            source: "Data Protection Act, 2019 (Kenya Law)",
            section: "Sections 25, 26, and 48",
            url: "https://new.kenyalaw.org/akn/ke/act/2019/24/eng@2022-12-31",
          },
        ],
      },
      {
        id: "KE-WARR-001",
        clauseType: "warranty",
        title: "Implied quality/title terms should be addressed expressly",
        description:
          "Sale/provision obligations should be drafted with clear quality/title expectations and remedies to avoid implied-term disputes.",
        defaultSeverity: "medium",
        citations: [
          {
            source: "Sale of Goods Act, Cap. 31 (Kenya Law)",
            section: "Sections 14 to 16",
            url: "https://new.kenyalaw.org/akn/ke/act/1930/31/eng@2022-12-31/download/pdf",
          },
        ],
      },
      {
        id: "KE-FORM-001",
        clauseType: "other",
        title: "Certain obligations require written and signed form",
        description:
          "For obligations that must be in writing/signature form, missing execution formalities can undermine enforceability.",
        defaultSeverity: "high",
        citations: [
          {
            source: "Law of Contract Act, Cap. 23 (Kenya Law)",
            section: "Section 3(1) and 3(3)",
            url: "https://new.kenyalaw.org/akn/ke/act/2002/6/eng@2022-12-31",
          },
        ],
      },
    ],
  },
];
