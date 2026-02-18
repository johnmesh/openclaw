import { describe, expect, it } from "vitest";
import type { ContractDocument } from "./types.js";
import {
  defaultClauseExtractor,
  defaultContractTypeClassifier,
  defaultJurisdictionResolver,
  defaultLegalCharacterizer,
  defaultRulePackSelector,
  DEFAULT_RULE_PACKS,
} from "./default-agents.js";

describe("legal review default agents", () => {
  it("normalizes explicit Kenya metadata to 'ke'", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "doc-ke-1",
      contractText: "Service Agreement",
      sections: [{ page: 1, section: "Section 1", text: "General terms." }],
      metadata: {
        governingLaw: "Kenya",
      },
    };

    const resolved = await defaultJurisdictionResolver(document);

    expect(resolved.jurisdiction).toBe("ke");
    expect(resolved.source).toBe("metadata_hint");
  });

  it("detects Kenya from governing-law clause text", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "doc-ke-2",
      contractText: "Service Agreement",
      sections: [
        {
          page: 4,
          section: "Governing Law",
          text: "This Agreement is governed by the laws of Kenya and disputes shall be resolved in Nairobi.",
        },
      ],
    };

    const resolved = await defaultJurisdictionResolver(document);

    expect(resolved.jurisdiction).toBe("ke");
    expect(resolved.source).toBe("governing_law_clause");
  });

  it("selects Kenya rule pack for Kenya jurisdiction", async () => {
    const selected = await defaultRulePackSelector({
      jurisdiction: {
        jurisdiction: "Kenya",
        confidence: 0.95,
        source: "metadata_hint",
      },
      contractType: {
        contractType: "msa",
        confidence: 0.9,
      },
      nowIso: "2026-02-17T00:00:00.000Z",
    });

    expect(selected?.jurisdiction).toBe("ke");
    expect(selected?.id).toBe("ke-general-commercial");
    expect(selected?.rules.length).toBeGreaterThan(0);
    expect(selected?.rules.every((rule) => (rule.citations?.length ?? 0) > 0)).toBe(true);
  });

  it("includes Kenya in default rule packs", () => {
    expect(DEFAULT_RULE_PACKS.some((pack) => pack.jurisdiction === "ke")).toBe(true);
  });

  it("flags payment clauses missing timeline or amount details as high risk", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "doc-ke-3",
      contractText: "Payment clause",
      sections: [
        {
          page: 2,
          section: "Payment",
          text: "The customer shall pay fees based on invoices issued by the provider.",
        },
      ],
      metadata: { governingLaw: "Kenya" },
    };

    const findings = await defaultClauseExtractor({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "services_agreement", confidence: 0.8 },
    });

    expect(findings).toHaveLength(1);
    expect(findings[0]?.severity).toBe("high");
    expect(findings[0]?.title.toLowerCase()).toContain("payment");
  });

  it("classifies SLA clauses as warranty for technology service contracts", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "doc-tech-1",
      contractText: "Master services agreement for cloud platform operations.",
      sections: [
        {
          page: 5,
          section: "Service Levels",
          text: "Service availability shall be 99.9% uptime and service credits apply for downtime.",
        },
      ],
      metadata: {
        governingLaw: "Kenya",
        industryHint: "technology",
      },
    };

    const findings = await defaultClauseExtractor({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "msa", confidence: 0.9 },
    });

    expect(findings).toHaveLength(1);
    expect(findings[0]?.clauseType).toBe("warranty");
  });

  it("classifies lease rent clauses as payment based on contract type", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "doc-lease-1",
      contractText: "Residential lease agreement.",
      sections: [
        {
          page: 2,
          section: "Rent",
          text: "Rent of KES 120,000 is due monthly on the first business day.",
        },
      ],
      metadata: { governingLaw: "Kenya" },
    };

    const findings = await defaultClauseExtractor({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "lease", confidence: 0.95 },
    });

    expect(findings).toHaveLength(1);
    expect(findings[0]?.clauseType).toBe("payment");
  });

  it("classifies processor/controller clauses as privacy for Kenya jurisdiction", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "doc-privacy-1",
      contractText: "Data processing terms for outsourced services.",
      sections: [
        {
          page: 7,
          section: "Data Processing",
          text: "The processor shall process data only on documented instructions from the controller and apply security measures.",
        },
      ],
      metadata: { governingLaw: "Kenya" },
    };

    const findings = await defaultClauseExtractor({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "services_agreement", confidence: 0.9 },
    });

    expect(findings).toHaveLength(1);
    expect(findings[0]?.clauseType).toBe("privacy");
  });

  it("normalizes contract type hint using Kenya taxonomy", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "doc-type-1",
      contractText: "Short agreement text",
      sections: [{ page: 1, section: "Intro", text: "Sample text." }],
      metadata: {
        governingLaw: "Kenya",
        contractTypeHint: "Data Processing Agreement (DPA)",
      },
    };

    const contractType = await defaultContractTypeClassifier(document);
    expect(contractType.contractType).toBe("dpa");
  });

  it("detects Kenya-focused finance contracts from body text", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "doc-type-2",
      contractText:
        "This Loan Agreement sets out the principal amount, interest obligations, and events of default.",
      sections: [{ page: 1, section: "Intro", text: "Loan Agreement terms." }],
      metadata: { governingLaw: "Kenya" },
    };

    const contractType = await defaultContractTypeClassifier(document);
    expect(contractType.contractType).toBe("loan_agreement");
  });

  it("classifies legal characteristics separately from contract type", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "doc-char-1",
      contractText:
        "This standard form contract is non-negotiable. Each party shall perform future obligations.",
      sections: [
        {
          page: 1,
          section: "General",
          text: "The parties agree to mutual obligations and performance to be performed over time.",
        },
      ],
      metadata: {
        governingLaw: "Kenya",
        contractTypeHint: "SaaS Agreement",
      },
    };

    const contractType = await defaultContractTypeClassifier(document);
    const characterization = await defaultLegalCharacterizer({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType,
    });

    expect(contractType.contractType).toBe("saas_agreement");
    expect(characterization.labels).toContain("adhesion");
    expect(characterization.labels).toContain("executory");
    expect(characterization.source).toBe("heuristic_kenya_legal_characterizer");
  });

  it("maps sales agreement price and tax clauses to payment", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "doc-sales-1",
      contractText: "Sales Agreement for delivery of goods.",
      sections: [
        {
          page: 2,
          section: "Price and Taxes",
          text: "The purchase price is KES 4,000,000 exclusive of VAT and duties. Invoice payable in 30 days.",
        },
      ],
      metadata: { governingLaw: "Kenya", contractTypeHint: "Sales Agreement" },
    };

    const findings = await defaultClauseExtractor({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.95, source: "metadata_hint" },
      contractType: { contractType: "sales_agreement", confidence: 0.95 },
    });

    expect(findings).toHaveLength(1);
    expect(findings[0]?.clauseType).toBe("payment");
  });

  it("maps sales agreement inspection and warranty clauses to warranty", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "doc-sales-2",
      contractText: "Sales Agreement for equipment supply.",
      sections: [
        {
          page: 4,
          section: "Inspection and Acceptance",
          text: "Buyer may inspect goods and reject defective goods. Seller warrants fitness for purpose.",
        },
      ],
      metadata: { governingLaw: "Kenya", contractTypeHint: "Sales Agreement" },
    };

    const findings = await defaultClauseExtractor({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.95, source: "metadata_hint" },
      contractType: { contractType: "sales_agreement", confidence: 0.95 },
    });

    expect(findings).toHaveLength(1);
    expect(findings[0]?.clauseType).toBe("warranty");
  });

  it("maps sales agreement governing law and dispute clauses to dispute resolution", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "doc-sales-3",
      contractText: "Sales Agreement for export goods.",
      sections: [
        {
          page: 8,
          section: "Governing Law and Dispute Resolution",
          text: "This agreement is governed by the laws of Kenya and disputes shall be referred to arbitration in Nairobi.",
        },
      ],
      metadata: { governingLaw: "Kenya", contractTypeHint: "Sales Agreement" },
    };

    const findings = await defaultClauseExtractor({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.95, source: "metadata_hint" },
      contractType: { contractType: "sales_agreement", confidence: 0.95 },
    });

    expect(findings).toHaveLength(1);
    expect(findings[0]?.clauseType).toBe("dispute_resolution");
  });
});
