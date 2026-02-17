import { describe, expect, it } from "vitest";
import type { ContractDocument } from "./types.js";
import {
  defaultClauseExtractor,
  defaultJurisdictionResolver,
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
});
