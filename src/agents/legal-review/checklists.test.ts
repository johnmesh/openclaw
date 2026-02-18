import { describe, expect, it } from "vitest";
import type { ContractDocument } from "./types.js";
import {
  defaultAgreementChecklistEvaluator,
  EXHAUSTIVE_KENYA_CHECKLIST_TYPES,
} from "./checklists.js";
import { KENYA_CONTRACT_TYPE_ALIASES } from "./contract-types.js";

describe("defaultAgreementChecklistEvaluator", () => {
  it("evaluates sales agreement checklist with evidence-backed hits", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "sales-1",
      contractText: "Sales Agreement",
      sections: [
        {
          page: 1,
          section: "Parties",
          text: "This agreement is made between buyer and seller.",
        },
        {
          page: 2,
          section: "Price and Payment",
          text: "Purchase price is KES 5,000,000 plus VAT. Invoice due in 30 days.",
        },
        {
          page: 3,
          section: "Delivery",
          text: "Delivery shall be on CIF Incoterms 2020 terms.",
        },
      ],
      metadata: { governingLaw: "Kenya" },
    };

    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "sales_agreement", confidence: 0.95 },
    });

    expect(result.agreementType).toBe("sales_agreement");
    expect(result.summary.present).toBeGreaterThan(2);
    expect(result.items.find((item) => item.id === "price")?.status).toBe("present");
    expect(result.items.find((item) => item.id === "delivery")?.status).toBe("present");
  });

  it("provides a dedicated checklist template for every known agreement type alias", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "generic",
      contractText: "Agreement text",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const allTypes = [...new Set(Object.values(KENYA_CONTRACT_TYPE_ALIASES))];

    for (const contractType of allTypes) {
      const result = await defaultAgreementChecklistEvaluator({
        document,
        jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
        contractType: { contractType, confidence: 0.9 },
      });
      expect(result.agreementType).toBe(contractType);
      expect(result.items.length).toBeGreaterThanOrEqual(12);
      expect(result.agreementType).not.toBe("general");
    }
  });

  it("keeps an explicit checklist template for each tracked Kenya type", () => {
    expect(EXHAUSTIVE_KENYA_CHECKLIST_TYPES.size).toBeGreaterThanOrEqual(
      new Set(Object.values(KENYA_CONTRACT_TYPE_ALIASES)).size,
    );
  });

  it("includes exhaustive sales-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "sales-2",
      contractText: "Sales Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "sales_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "parties-legal-names",
      "parties-reg-numbers",
      "parties-addresses",
      "parties-signatories",
      "definitions-interpretation",
      "goods",
      "quantity",
      "price",
      "taxes",
      "payment-terms",
      "invoicing",
      "delivery",
      "risk-transfer",
      "title-transfer",
      "retention-of-title",
      "inspection",
      "product-warranties",
      "title-warranty",
      "fitness-purpose",
      "rejection-defects",
      "repair-replacement",
      "refund-terms",
      "limitation-liability",
      "consequential-loss",
      "indemnity",
      "insurance",
      "termination-breach",
      "termination-insolvency",
      "termination-consequences",
      "claims-time-limit",
      "fraud-carveout",
      "compliance-kebs",
      "mediation",
      "notices",
      "assignment",
      "entire-agreement",
      "amendment",
      "severability",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(
      result.items.some((item) => item.id === "goods" && (item.citations?.length ?? 0) > 0),
    ).toBe(true);
  });

  it("includes exhaustive acquisition-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "acq-1",
      contractText: "Acquisition Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "acquisition_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "acq-sale-structure",
      "acq-structure-percentage",
      "acq-structure-control-threshold",
      "acq-purchase-price",
      "acq-price-adjustment",
      "acq-completion-accounts",
      "acq-payment-escrow",
      "acq-conditions-regulatory",
      "acq-conditions-board",
      "acq-conditions-mac",
      "acq-completion-deliverables",
      "acq-transfer-instruments",
      "acq-companies-act",
      "acq-warranties-financial",
      "acq-warranties-undisclosed",
      "acq-warranties-buyer-funding",
      "acq-indemnity-tax",
      "acq-liability-cap",
      "acq-liability-fraud-carveout",
      "acq-covenant-precompletion",
      "acq-covenant-no-new-debt",
      "acq-covenant-postcompletion",
      "acq-covenant-post-records",
      "acq-tax-covenant",
      "acq-ip-transfer",
      "acq-financing-debt-condition",
      "acq-termination-precompletion",
      "acq-termination-longstop",
      "acq-confidentiality",
      "acq-announcements",
      "acq-dispute-escrow",
      "acq-third-party-rights",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(60);
  });

  it("includes exhaustive procurement-contract core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "proc-1",
      contractText: "Procurement Contract",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "procurement_contract", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "proc-scope",
      "proc-specs",
      "proc-performance-standards",
      "proc-pricing-structure",
      "proc-payment-timeline",
      "proc-calloff",
      "proc-inspection",
      "proc-quality-standards",
      "proc-warranty-product-service",
      "proc-variation",
      "proc-anti-bribery",
      "proc-health-safety",
      "proc-ip-ownership",
      "proc-ip-indemnity",
      "proc-liability-cap",
      "proc-insurance-types",
      "proc-subcontract-consent",
      "proc-term-convenience",
      "proc-term-transition",
      "proc-dispute-escalation",
      "proc-ethics-conflict",
      "proc-ethics-authority-rules",
      "proc-data-breach",
      "proc-assignment-novation",
      "proc-entire-agreement",
      "proc-amendment",
      "proc-severability",
      "proc-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(85);
  });

  it("includes exhaustive supply-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "sup-1",
      contractText: "Supply Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "supply_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "sup-appointment",
      "sup-scope",
      "sup-order-procedure",
      "sup-forecast",
      "sup-price-list",
      "sup-pricing-structure",
      "sup-currency",
      "sup-vat-treatment",
      "sup-payment-date",
      "sup-setoff",
      "sup-delivery-schedule",
      "sup-delivery-costs",
      "sup-partial-deliveries",
      "sup-risk-transfer",
      "sup-title-transfer",
      "sup-sale-of-goods-alignment",
      "sup-inspection",
      "sup-quality",
      "sup-testing",
      "sup-kebs-standards-act",
      "sup-warranty-spec",
      "sup-title-warranty",
      "sup-rejection-right",
      "sup-repair-replacement",
      "sup-refund-rights",
      "sup-ip-ownership",
      "sup-ip-indemnity",
      "sup-anti-bribery",
      "sup-consumer-protection-act",
      "sup-subcontract-consent",
      "sup-indemnity-product",
      "sup-liability-cap",
      "sup-insurance-required",
      "sup-insurance-transit",
      "sup-term-cause",
      "sup-term-convenience",
      "sup-consequence-outstanding-payments",
      "sup-consequence-return-goods",
      "sup-consequence-survival",
      "sup-change-variation",
      "sup-fm-events",
      "sup-bc-dr",
      "sup-assignment",
      "sup-notices",
      "sup-waiver",
      "sup-governing-law",
      "sup-dispute-escalation",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(89);
  });

  it("includes exhaustive distribution-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "dist-1",
      contractText: "Distribution Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "distribution_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "dist-appointment",
      "dist-rights-grant",
      "dist-territory",
      "dist-exclusivity",
      "dist-exclusivity-competition-act",
      "dist-online-sales",
      "dist-no-agency",
      "dist-no-bind",
      "dist-passive-active",
      "dist-export-restrictions",
      "dist-sales-targets",
      "dist-order-procedure",
      "dist-wholesale-pricing",
      "dist-vat-treatment",
      "dist-delivery-terms",
      "dist-risk-transfer",
      "dist-title-transfer",
      "dist-sale-of-goods-alignment",
      "dist-marketing-obligations",
      "dist-brand-guidelines",
      "dist-trademark-license",
      "dist-trade-marks-act",
      "dist-ip-infringement",
      "dist-import-export",
      "dist-kebs-standards-act",
      "dist-consumer-protection-act",
      "dist-product-warranty",
      "dist-after-sales-support",
      "dist-competition-law",
      "dist-restrictive-reasonable",
      "dist-indemnity-product",
      "dist-liability-cap",
      "dist-insurance-product-liability",
      "dist-insurance-public-liability",
      "dist-subdist-permission",
      "dist-term-cure-period",
      "dist-term-target-breach",
      "dist-post-cease-trademark",
      "dist-post-selloff",
      "dist-assignment-restrictions",
      "dist-governing-law",
      "dist-dispute-escalation",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(95);
  });

  it("includes exhaustive SLA core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "sla-1",
      contractText: "Service Level Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "sla", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "sla-scope-description",
      "sla-scope-deliverables",
      "sla-performance-uptime",
      "sla-performance-kpis",
      "sla-measure-system-logs",
      "sla-credits-formula",
      "sla-credits-sole-remedy",
      "sla-fees-vat",
      "sla-change-request",
      "sla-data-protection-act",
      "sla-data-cross-border",
      "sla-security-cmca",
      "sla-ip-indemnity",
      "sla-warranty-performance",
      "sla-indemnity-data-breach",
      "sla-liability-cap",
      "sla-liability-carveouts",
      "sla-bcdr-rto",
      "sla-bcdr-rpo",
      "sla-subcontracting-consent",
      "sla-compliance-consumer",
      "sla-termination-convenience",
      "sla-exit-data-handover",
      "sla-exit-return-delete",
      "sla-dispute-forum",
      "sla-dispute-governing-law",
      "sla-force-majeure",
      "sla-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(80);
  });

  it("includes exhaustive manufacturing-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "mfg-1",
      contractText: "Manufacturing Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "manufacturing_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "mfg-appointment",
      "mfg-products-scope",
      "mfg-specs-technical",
      "mfg-specs-kebs",
      "mfg-reg-sector-licensing",
      "mfg-orders-moq",
      "mfg-pricing-adjustment",
      "mfg-pricing-vat",
      "mfg-materials-provider",
      "mfg-goods-risk-transfer",
      "mfg-goods-title-transfer",
      "mfg-quality-audits",
      "mfg-quality-rejection",
      "mfg-warranty-spec",
      "mfg-warranty-fitness",
      "mfg-ip-designs",
      "mfg-ip-industrial-property-act",
      "mfg-subcontract-consent",
      "mfg-indemnity-product-liability",
      "mfg-liability-cap",
      "mfg-insurance-product",
      "mfg-laws-competition",
      "mfg-termination-breach",
      "mfg-termination-convenience",
      "mfg-recall-procedures",
      "mfg-recall-costs",
      "mfg-dispute-forum",
      "mfg-dispute-governing-law",
      "mfg-force-majeure",
      "mfg-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(89);
  });

  it("includes exhaustive outsourcing-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "out-1",
      contractText: "Outsourcing Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "outsourcing_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "out-scope-services",
      "out-scope-deliverables",
      "out-sla-kpis",
      "out-sla-resolution",
      "out-sla-escalation",
      "out-fees-structure",
      "out-fees-vat",
      "out-change-request",
      "out-transition-plan",
      "out-exit-plan",
      "out-exit-data-handover",
      "out-data-dpa",
      "out-data-cross-border",
      "out-security-cmca",
      "out-personnel-no-employment",
      "out-personnel-employment-act",
      "out-subcontract-consent",
      "out-warranty-skill-care",
      "out-indemnity-data-breach",
      "out-liability-cap",
      "out-liability-data-breach",
      "out-insurance-cyber",
      "out-audit-rights",
      "out-bcdr-rto",
      "out-bcdr-rpo",
      "out-termination-regulatory",
      "out-consequence-data-return",
      "out-consequence-survival",
      "out-dispute-forum",
      "out-dispute-governing-law",
      "out-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(95);
  });

  it("includes exhaustive consultancy-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "cons-1",
      contractText: "Consultancy Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "consultancy_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "cons-parties-kra",
      "cons-scope-services",
      "cons-deliverables",
      "cons-fees-structure",
      "cons-fees-vat",
      "cons-payment-withholding-tax",
      "cons-obligation-standard-care",
      "cons-client-cooperation",
      "cons-independent-no-employment",
      "cons-independent-no-bind",
      "cons-conf-duration",
      "cons-ip-ownership",
      "cons-ip-assignment",
      "cons-data-dpa",
      "cons-conflict-disclosure",
      "cons-restrictive-post",
      "cons-restrictive-reasonable",
      "cons-warranty-qualifications",
      "cons-indemnity-breach",
      "cons-liability-cap",
      "cons-liability-fraud",
      "cons-insurance-prof-indemnity",
      "cons-termination-convenience",
      "cons-consequence-ip-confirmation",
      "cons-dispute-forum",
      "cons-dispute-governing-law",
      "cons-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(75);
  });

  it("includes exhaustive licensing-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "lic-1",
      contractText: "Licensing Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "licensing_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "lic-grant-ip-type",
      "lic-grant-scope",
      "lic-grant-exclusivity",
      "lic-grant-sublicensing",
      "lic-grant-field-use",
      "lic-grant-territory",
      "lic-ownership-confirm",
      "lic-fee-royalty",
      "lic-fee-vat",
      "lic-accounting-audit-rights",
      "lic-quality-standards",
      "lic-quality-trademark-validity",
      "lic-restrict-no-reverse",
      "lic-data-dpa",
      "lic-warranty-noninfringement",
      "lic-indemnity-ip",
      "lic-liability-cap",
      "lic-enforcement-rights",
      "lic-improvements-license-back",
      "lic-competition-act",
      "lic-competition-restrictions",
      "lic-sublicense-consent",
      "lic-termination-royalty-default",
      "lic-consequence-cease-ip",
      "lic-consequence-outstanding-royalty",
      "lic-dispute-forum",
      "lic-dispute-governing-law",
      "lic-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(85);
  });

  it("includes exhaustive reseller-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "res-1",
      contractText: "Reseller Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "reseller_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "res-appointment-clause",
      "res-appointment-exclusivity",
      "res-appointment-competition-act",
      "res-relationship-independent",
      "res-rights-market-resell",
      "res-rights-online",
      "res-pricing-wholesale",
      "res-pricing-resale-price",
      "res-orders-vat",
      "res-delivery-risk",
      "res-delivery-title",
      "res-delivery-retention",
      "res-marketing-trademarks",
      "res-marketing-trade-marks-act",
      "res-ip-license",
      "res-support-warranty",
      "res-warranty-product",
      "res-laws-consumer",
      "res-laws-data-protection",
      "res-restrictive-nonsolicit",
      "res-restrictive-reasonable",
      "res-indemnity-product",
      "res-liability-cap",
      "res-insurance-product",
      "res-termination-convenience",
      "res-consequence-cease-trademark",
      "res-consequence-selloff",
      "res-assignment-restrictions",
      "res-dispute-forum",
      "res-dispute-governing-law",
      "res-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(85);
  });

  it("includes exhaustive commission-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "com-1",
      contractText: "Commission Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "commission_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "com-parties-kra",
      "com-appointment-agent",
      "com-appointment-exclusive",
      "com-relationship-independent",
      "com-relationship-no-employment",
      "com-duty-best-efforts",
      "com-principal-pay",
      "com-commission-rate",
      "com-commission-basis",
      "com-commission-earned",
      "com-commission-repeat",
      "com-commission-renewals",
      "com-commission-definition-critical",
      "com-payment-withholding-tax",
      "com-expenses-reimbursable",
      "com-data-dpa",
      "com-ip-trademark-use",
      "com-restrictive-post",
      "com-restrictive-reasonable",
      "com-indemnity-breach",
      "com-liability-cap",
      "com-liability-fraud",
      "com-termination-convenience",
      "com-consequence-outstanding-commission",
      "com-consequence-pending-transactions",
      "com-consequence-post-term-commission",
      "com-dispute-forum",
      "com-dispute-governing-law",
      "com-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(80);
  });

  it("includes exhaustive MOU core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "mou-1",
      contractText: "Memorandum of Understanding",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "mou", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "mou-parties-authorized",
      "mou-background-purpose",
      "mou-objectives-scope",
      "mou-scope-activities",
      "mou-roles-lead-party",
      "mou-financial-cost-sharing",
      "mou-financial-intent",
      "mou-governance-decision",
      "mou-conf-binding",
      "mou-data-dpa",
      "mou-ip-joint",
      "mou-nonexclusive",
      "mou-nonbinding-express",
      "mou-nonbinding-binding-clauses",
      "mou-nonbinding-law-of-contract-act",
      "mou-term-notice",
      "mou-publicity-media",
      "mou-dispute-forum",
      "mou-dispute-governing-law",
      "mou-laws-procurement",
      "mou-entire-understanding",
      "mou-amendment-written",
      "mou-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(55);
  });

  it("includes exhaustive sale-of-land-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "land-1",
      contractText: "Sale of Land Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "sale_of_land_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "land-parties-kra",
      "land-parties-capacity",
      "land-property-title-number",
      "land-property-lr-number",
      "land-property-owner",
      "land-property-lra-match",
      "land-price-deposit",
      "land-payment-escrow",
      "land-completion-date",
      "land-cp-lcb",
      "land-cp-spousal",
      "land-cp-lcb-void-risk",
      "land-possession-vacant",
      "land-warranty-title",
      "land-risk-transfer-date",
      "land-doc-original-title",
      "land-doc-rates-clearance",
      "land-stamp-duty-act",
      "land-registration-lra",
      "land-default-cure",
      "land-remedy-specific-performance",
      "land-indemnity-misrepresentation",
      "land-dispute-governing-law",
      "land-dispute-forum",
      "land-assignment-restriction",
      "land-amendment-written",
      "land-notices-method",
      "land-notices-addresses",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(70);
  });

  it("includes exhaustive lease-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "lease-1",
      contractText: "Lease Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "lease", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "lease-parties-kra",
      "lease-premises-title",
      "lease-premises-lra-match",
      "lease-term-commencement",
      "lease-term-duration",
      "lease-term-renewal",
      "lease-term-break",
      "lease-term-controlled-tenancy-risk",
      "lease-rent-escalation",
      "lease-deposit-refund",
      "lease-review-market",
      "lease-use-zoning",
      "lease-outgoings-service-charge",
      "lease-maint-landlord",
      "lease-maint-tenant",
      "lease-alter-consent",
      "lease-insurance-landlord",
      "lease-quiet-enjoyment",
      "lease-assign-sublet-consent",
      "lease-default-nonpayment",
      "lease-default-cure",
      "lease-remedy-distress",
      "lease-remedy-controlled-tribunal",
      "lease-controlled-tenancy-act",
      "lease-controlled-tenancy-bprt",
      "lease-surrender-voluntary",
      "lease-dispute-governing-law",
      "lease-dispute-tribunal",
      "lease-dispute-forum",
      "lease-notices-method",
      "lease-notices-addresses",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(70);
  });

  it("includes exhaustive commercial-lease core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "cle-1",
      contractText: "Commercial Lease Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "commercial_lease", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "cl-parties-kra",
      "cl-premises-title",
      "cl-premises-common-areas",
      "cl-premises-lra",
      "cl-term-break",
      "cl-term-controlled-tenancy-risk",
      "cl-rent-base",
      "cl-rent-vat",
      "cl-rent-late-interest",
      "cl-review-market-formula",
      "cl-review-valuation",
      "cl-service-charge-scope",
      "cl-service-charge-audit",
      "cl-use-zoning",
      "cl-maint-landlord-structural",
      "cl-maint-dilapidations",
      "cl-alter-consent",
      "cl-insurance-landlord",
      "cl-insurance-tenant-public",
      "cl-outgoings-land-rent",
      "cl-assignment-liability",
      "cl-default-cure",
      "cl-remedy-distress",
      "cl-remedy-controlled-tribunal-approval",
      "cl-controlled-tribunal-jurisdiction",
      "cl-controlled-act",
      "cl-laws-business-licensing",
      "cl-surrender-early",
      "cl-indemnity-tenant-damage",
      "cl-dispute-tribunal",
      "cl-dispute-governing-law",
      "cl-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(85);
  });

  it("includes exhaustive sublease-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "sub-1",
      contractText: "Sublease Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "sublease_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "sub-parties-sublessor",
      "sub-parties-sublessee",
      "sub-parties-landlord-consent",
      "sub-parties-kra",
      "sub-recitals-head-lease",
      "sub-recitals-consent",
      "sub-premises-title",
      "sub-premises-portion",
      "sub-premises-lra",
      "sub-term-not-exceed-head",
      "sub-rent-vat",
      "sub-rent-late-interest",
      "sub-head-lease-compliance",
      "sub-head-lease-incorporation",
      "sub-head-lease-copy",
      "sub-head-lease-critical",
      "sub-maint-tenant",
      "sub-assignment-further-subletting",
      "sub-default-cure",
      "sub-remedy-distress",
      "sub-remedy-controlled-tenancy-risk",
      "sub-controlled-tenancy-tribunal",
      "sub-indemnity-subtenant",
      "sub-termination-head-lease-expiry",
      "sub-consequence-vacant-possession",
      "sub-consequence-restoration",
      "sub-dispute-tribunal",
      "sub-dispute-governing-law",
      "sub-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(75);
  });

  it("includes exhaustive mortgage-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "mtg-1",
      contractText: "Mortgage Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "mortgage_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "mtg-parties-chargee",
      "mtg-parties-chargor",
      "mtg-parties-kra",
      "mtg-loan-principal",
      "mtg-interest-rate",
      "mtg-interest-default",
      "mtg-repay-schedule",
      "mtg-security-property",
      "mtg-security-lra",
      "mtg-warranty-title",
      "mtg-covenant-maintenance",
      "mtg-covenant-rates-rent",
      "mtg-insurance-mandatory",
      "mtg-default-misrepresentation",
      "mtg-remedy-90day-notice",
      "mtg-remedy-sale",
      "mtg-remedy-receiver",
      "mtg-remedy-strict-notice",
      "mtg-notice-40day",
      "mtg-notice-auction",
      "mtg-receiver-powers",
      "mtg-further-assurance",
      "mtg-costs-enforcement",
      "mtg-assignment-lender",
      "mtg-guarantee-continuing",
      "mtg-stamp-duty-act",
      "mtg-registration-lands-registry",
      "mtg-registration-companies-act",
      "mtg-discharge-conditions",
      "mtg-dispute-courts",
      "mtg-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(85);
  });

  it("includes exhaustive property-management-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "pm-1",
      contractText: "Property Management Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "property_management_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "pm-parties-owner",
      "pm-parties-manager",
      "pm-parties-kra",
      "pm-appointment-manager",
      "pm-appointment-properties",
      "pm-scope-rent-collection",
      "pm-scope-lease-admin",
      "pm-scope-service-charge",
      "pm-authority-leases",
      "pm-authority-spending-limit",
      "pm-rent-trust-account",
      "pm-rent-estate-agents-act",
      "pm-service-charge-budget",
      "pm-service-charge-audit",
      "pm-maint-capex",
      "pm-ins-manager-pi",
      "pm-accounting-monthly",
      "pm-laws-controlled-tenancy",
      "pm-laws-data-protection",
      "pm-data-breach",
      "pm-indemnity-third-party",
      "pm-liability-cap",
      "pm-term-review",
      "pm-termination-convenience",
      "pm-consequence-handover-records",
      "pm-consequence-final-accounting",
      "pm-conflict-disclosure",
      "pm-assignment-restrictions",
      "pm-dispute-governing-law",
      "pm-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(85);
  });

  it("includes exhaustive construction-contract core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "cc-1",
      contractText: "Construction Contract",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "construction_contract", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "cc-parties-employer",
      "cc-parties-contractor",
      "cc-scope-boq",
      "cc-scope-workmanship",
      "cc-price-model",
      "cc-price-vat",
      "cc-payment-interim",
      "cc-payment-retention",
      "cc-security-performance-bond",
      "cc-security-advance-guarantee",
      "cc-programme-eot",
      "cc-variation-valuation",
      "cc-delay-ld-rate",
      "cc-delay-ld-cap",
      "cc-quality-nca",
      "cc-hs-osha",
      "cc-reg-planning-act",
      "cc-ins-car",
      "cc-ins-workmen",
      "cc-subcontract-consent",
      "cc-defects-rectification",
      "cc-indemnity-property-damage",
      "cc-liability-cap",
      "cc-suspension-rights",
      "cc-term-default",
      "cc-term-convenience",
      "cc-dispute-dab",
      "cc-dispute-courts",
      "cc-procurement-ppada",
      "cc-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(85);
  });

  it("includes exhaustive design-build-contract core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "db-1",
      contractText: "Design & Build Contract",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "design_build_contract", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "db-parties-employer",
      "db-parties-contractor",
      "db-scope-design",
      "db-scope-construction",
      "db-scope-er",
      "db-scope-proposals",
      "db-scope-performance-spec",
      "db-design-full-responsibility",
      "db-design-standard-care",
      "db-design-liability-period",
      "db-price-lumpsum",
      "db-payment-interim",
      "db-security-performance-bond",
      "db-programme-eot",
      "db-variation-scope-change",
      "db-delay-ld-rate",
      "db-approval-employer-rights",
      "db-approval-liability-remains",
      "db-reg-nca",
      "db-hs-osha",
      "db-ins-pi",
      "db-ins-pi-critical",
      "db-sub-design-consultants",
      "db-defects-rectification",
      "db-ip-ownership",
      "db-indemnity-design-defects",
      "db-liability-prof-negligence-carveout",
      "db-dispute-adjudication",
      "db-procurement-ppada",
      "db-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(85);
  });

  it("includes exhaustive loan-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "loan-1",
      contractText: "Loan Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "loan_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "loan-parties-lender",
      "loan-parties-borrower",
      "loan-parties-kra",
      "loan-amount-principal",
      "loan-amount-disbursement",
      "loan-amount-drawdown",
      "loan-interest-rate",
      "loan-interest-default-rate",
      "loan-repay-schedule",
      "loan-repay-maturity",
      "loan-security-charge-land",
      "loan-security-land-compliance",
      "loan-cp-security-docs",
      "loan-warranty-authority",
      "loan-covenant-negative-borrowing",
      "loan-default-cross-default",
      "loan-remedy-acceleration",
      "loan-remedy-enforcement-security",
      "loan-remedy-receiver",
      "loan-guarantee-waiver-defences",
      "loan-costs-enforcement",
      "loan-assignment-lender",
      "loan-taxes-withholding",
      "loan-taxes-stamp-duty",
      "loan-taxes-gross-up",
      "loan-setoff",
      "loan-discharge-release-security",
      "loan-dispute-courts",
      "loan-entire-agreement",
      "loan-waiver",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(80);
  });

  it("includes exhaustive credit-facility-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "cfa-1",
      contractText: "Credit Facility Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "credit_facility_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "cfa-parties-lender",
      "cfa-parties-borrower",
      "cfa-parties-security-provider",
      "cfa-facility-type",
      "cfa-facility-limit",
      "cfa-drawdown-cp",
      "cfa-drawdown-notice",
      "cfa-interest-rate",
      "cfa-interest-default",
      "cfa-fee-arrangement",
      "cfa-fee-commitment",
      "cfa-fee-agency",
      "cfa-repay-revolving",
      "cfa-repay-early-penalty",
      "cfa-security-land-charge",
      "cfa-security-land-compliance",
      "cfa-warranty-financials",
      "cfa-covenant-negative-additional-security",
      "cfa-financial-dscr",
      "cfa-financial-leverage",
      "cfa-default-cross",
      "cfa-default-mac",
      "cfa-remedy-acceleration",
      "cfa-remedy-receiver",
      "cfa-guarantee-continuing",
      "cfa-guarantee-waiver-defences",
      "cfa-tax-stamp-duty",
      "cfa-tax-gross-up",
      "cfa-variation-interest",
      "cfa-dispute-courts",
      "cfa-confidentiality",
      "cfa-waiver",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(85);
  });

  it("includes exhaustive security-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "sec-1",
      contractText: "Security Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "security_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "sec-parties-secured-party",
      "sec-parties-grantor",
      "sec-obligations-present-future",
      "sec-grant-type",
      "sec-collateral-receivables",
      "sec-collateral-ip",
      "sec-collateral-mpsra",
      "sec-perfection-collateral-registry",
      "sec-perfection-companies-registry",
      "sec-perfection-lands-registry",
      "sec-perfection-stamp-duty",
      "sec-warranty-no-encumbrances",
      "sec-covenant-negative-encumbrance",
      "sec-insurance-loss-payee",
      "sec-default-cross-default",
      "sec-enforcement-possession",
      "sec-enforcement-sale",
      "sec-enforcement-receiver",
      "sec-enforcement-mpsra",
      "sec-notice-land-act",
      "sec-proceeds-priority",
      "sec-further-assurance",
      "sec-assignment-lender",
      "sec-continuing-future-advances",
      "sec-release-filing",
      "sec-dispute-courts",
      "sec-entire-agreement",
      "sec-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(80);
  });

  it("includes exhaustive guarantee-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "guar-1",
      contractText: "Guarantee Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "guarantee_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "guar-parties-lender",
      "guar-parties-borrower",
      "guar-parties-guarantor",
      "guar-parties-kra",
      "guar-core-payment-performance",
      "guar-core-scope",
      "guar-core-underlying-reference",
      "guar-indemnity-separate",
      "guar-indemnity-primary-liability",
      "guar-indemnity-pay-on-demand",
      "guar-continuing-future-advances",
      "guar-liability-joint-several",
      "guar-liability-on-demand",
      "guar-waiver-first-pursue",
      "guar-waiver-setoff",
      "guar-waiver-discharge-variation",
      "guar-variation-no-consent",
      "guar-demand-written",
      "guar-subrogation-postponement",
      "guar-tax-stamp-duty",
      "guar-release-full-repayment",
      "guar-dispute-courts",
      "guar-entire-agreement",
      "guar-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(70);
  });

  it("includes exhaustive indemnity-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "ind-1",
      contractText: "Indemnity Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "indemnity_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "ind-parties-indemnifier",
      "ind-parties-indemnified",
      "ind-parties-kra",
      "ind-core-scope",
      "ind-core-trigger",
      "ind-core-nature",
      "ind-loss-third-party",
      "ind-loss-regulatory-fines",
      "ind-claim-notice",
      "ind-claim-defence-control",
      "ind-claim-settlement-approval",
      "ind-continuing-future",
      "ind-continuing-survival",
      "ind-warranty-authority",
      "ind-covenant-insurance",
      "ind-liability-cap",
      "ind-liability-time-limit",
      "ind-liability-carveout",
      "ind-liability-uncapped-option",
      "ind-exclusion-indemnified-negligence",
      "ind-exclusion-indirect",
      "ind-exclusion-mitigation",
      "ind-payment-timeline",
      "ind-payment-gross-up",
      "ind-insurance-min-limits",
      "ind-subrogation-right",
      "ind-assignment-restrictions",
      "ind-stamp-duty-act",
      "ind-dispute-governing-law",
      "ind-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(60);
  });

  it("includes exhaustive investment-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "inv-1",
      contractText: "Investment Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "investment_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "inv-parties-company",
      "inv-parties-investors",
      "inv-structure-type",
      "inv-structure-valuation",
      "inv-cp-dd",
      "inv-cp-articles",
      "inv-subscription-shares",
      "inv-subscription-closing",
      "inv-rep-company-ip",
      "inv-rep-founder-no-competing",
      "inv-cov-negative-shares",
      "inv-governance-board",
      "inv-governance-reserved",
      "inv-info-audit",
      "inv-antidilution-weighted",
      "inv-antidilution-ratchet",
      "inv-preemption",
      "inv-tag-along",
      "inv-drag-along",
      "inv-exit-ipo",
      "inv-exit-put-call",
      "inv-founder-vesting-schedule",
      "inv-founder-vesting-leaver",
      "inv-indemnity-tax",
      "inv-liability-de-minimis",
      "inv-completion-certificates",
      "inv-reg-companies-act",
      "inv-reg-capital-markets",
      "inv-tax-cgt",
      "inv-term-longstop",
      "inv-dispute-governing-law",
      "inv-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(89);
  });

  it("includes exhaustive share-purchase-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "spa-1",
      contractText: "Share Purchase Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "share_purchase_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "spa-parties-seller",
      "spa-parties-buyer",
      "spa-parties-target",
      "spa-sale-number",
      "spa-sale-class",
      "spa-price-mechanism",
      "spa-payment-escrow",
      "spa-cp-competition",
      "spa-closing-transfer-forms",
      "spa-closing-register-update",
      "spa-closing-companies-act",
      "spa-warranty-seller-title",
      "spa-warranty-seller-financials",
      "spa-warranty-seller-liabilities",
      "spa-warranty-buyer-funding",
      "spa-indemnity-tax",
      "spa-indemnity-litigation",
      "spa-liability-cap",
      "spa-liability-time-limit",
      "spa-liability-de-minimis",
      "spa-liability-basket",
      "spa-liability-fraud",
      "spa-precompletion-ordinary-course",
      "spa-postcompletion-transition",
      "spa-restrictive-noncompete",
      "spa-restrictive-reasonable",
      "spa-tax-cgt",
      "spa-tax-stamp-duty",
      "spa-employees-labour-law",
      "spa-term-longstop",
      "spa-dispute-governing-law",
      "spa-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(85);
  });

  it("includes exhaustive asset-purchase-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "apa-1",
      contractText: "Asset Purchase Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "asset_purchase_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "apa-parties-seller",
      "apa-parties-buyer",
      "apa-sale-assets-description",
      "apa-sale-tangible",
      "apa-sale-intangible",
      "apa-sale-contracts-assigned",
      "apa-sale-excluded-assets",
      "apa-sale-precision",
      "apa-price-allocation",
      "apa-payment-earnout",
      "apa-payment-escrow",
      "apa-liabilities-assumed",
      "apa-liabilities-excluded",
      "apa-liabilities-separation",
      "apa-cp-third-party",
      "apa-cp-competition",
      "apa-closing-transfer-docs",
      "apa-warranty-seller-ownership",
      "apa-warranty-seller-liabilities",
      "apa-indemnity-tax",
      "apa-indemnity-employees",
      "apa-indemnity-environment",
      "apa-liability-basket",
      "apa-liability-fraud",
      "apa-employees-employment-act",
      "apa-employees-redundancy",
      "apa-ip-assignment",
      "apa-contracts-novation",
      "apa-precompletion-no-liabilities",
      "apa-tax-cgt",
      "apa-tax-vat",
      "apa-term-longstop",
      "apa-dispute-governing-law",
      "apa-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(90);
  });

  it("includes exhaustive convertible-note-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "cn-1",
      contractText: "Convertible Note Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "convertible_note_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "cn-parties-company",
      "cn-parties-investor",
      "cn-principal-amount",
      "cn-interest-rate",
      "cn-interest-converts",
      "cn-interest-free-option",
      "cn-maturity-date",
      "cn-maturity-extension",
      "cn-trigger-qualified",
      "cn-trigger-maturity",
      "cn-trigger-change-control",
      "cn-trigger-ipo",
      "cn-trigger-core-risk",
      "cn-mechanics-price",
      "cn-mechanics-cap",
      "cn-mechanics-discount",
      "cn-mechanics-automatic-optional",
      "cn-cap-maximum",
      "cn-discount-percentage",
      "cn-repay-principal",
      "cn-ranking-subordination",
      "cn-rep-company-authority",
      "cn-rep-investor-sophisticated",
      "cn-covenant-no-debt",
      "cn-default-cross",
      "cn-assignment-transferability",
      "cn-tax-withholding",
      "cn-tax-stamp-duty",
      "cn-amendment-consent",
      "cn-dispute-governing-law",
      "cn-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(75);
  });

  it("includes exhaustive debenture core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "deb-1",
      contractText: "Debenture",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "debenture", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "deb-parties-lender",
      "deb-parties-borrower",
      "deb-obligations-future",
      "deb-grant-fixed",
      "deb-grant-floating",
      "deb-grant-crystallisation",
      "deb-grant-crystallisation-key",
      "deb-assets-movable-mpsra",
      "deb-registration-companies",
      "deb-registration-collateral",
      "deb-registration-lands",
      "deb-registration-void-risk",
      "deb-warranty-no-encumbrances",
      "deb-covenant-negative-further-charge",
      "deb-insurance-loss-payee",
      "deb-default-cross",
      "deb-enforcement-receiver",
      "deb-enforcement-land-act",
      "deb-receiver-agent",
      "deb-crys-automatic-default",
      "deb-crys-insolvency",
      "deb-continuing-security",
      "deb-assignment-lender",
      "deb-release-filing",
      "deb-dispute-governing-law",
      "deb-boilerplate-entire",
      "deb-boilerplate-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(75);
  });

  it("includes exhaustive share-subscription-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "ssa-1",
      contractText: "Share Subscription Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "share_subscription_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "ssa-parties-company",
      "ssa-parties-subscriber",
      "ssa-subscription-number",
      "ssa-subscription-class",
      "ssa-subscription-nominal",
      "ssa-subscription-premium",
      "ssa-subscription-total",
      "ssa-price-per-share",
      "ssa-cp-board",
      "ssa-cp-shareholder",
      "ssa-cp-companies-act",
      "ssa-closing-allotment",
      "ssa-closing-register",
      "ssa-closing-certificates",
      "ssa-rep-company-authority",
      "ssa-rep-company-financials",
      "ssa-rep-subscriber-funds",
      "ssa-cov-pre-no-new-shares",
      "ssa-cov-post-governance",
      "ssa-proceeds-working-capital",
      "ssa-preemption-antidilution",
      "ssa-antidilution-weighted",
      "ssa-governance-board",
      "ssa-governance-reserved",
      "ssa-info-audit",
      "ssa-lockup-tag",
      "ssa-lockup-drag",
      "ssa-indemnity-tax",
      "ssa-liability-de-minimis",
      "ssa-tax-stamp-duty",
      "ssa-reg-capital-markets",
      "ssa-term-longstop",
      "ssa-dispute-governing-law",
      "ssa-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(89);
  });

  it("includes exhaustive merger-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "merg-1",
      contractText: "Merger Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "merger_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "merg-parties-a",
      "merg-parties-b",
      "merg-parties-surviving",
      "merg-structure-type",
      "merg-structure-effective-date",
      "merg-structure-companies-act",
      "merg-consideration-ratio",
      "merg-consideration-fractional",
      "merg-cp-cak",
      "merg-cp-third-party",
      "merg-pre-ordinary",
      "merg-pre-no-liabilities",
      "merg-warranty-assets",
      "merg-warranty-negotiated",
      "merg-indemnity-tax",
      "merg-liability-basket",
      "merg-liability-fraud",
      "merg-employee-transfer",
      "merg-ip-assignment",
      "merg-financing-refinancing",
      "merg-term-longstop",
      "merg-term-break-fees",
      "merg-announcement-regulatory",
      "merg-tax-cgt",
      "merg-reg-notification",
      "merg-reg-cak-conditions",
      "merg-post-board",
      "merg-post-shareholding",
      "merg-dispute-governing-law",
      "merg-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(80);
  });

  it("includes exhaustive founders-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "fnd-1",
      contractText: "Founders Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "founders_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "fnd-parties-names",
      "fnd-parties-id",
      "fnd-parties-shareholding",
      "fnd-purpose-objectives",
      "fnd-share-initial-allocation",
      "fnd-share-companies-act",
      "fnd-vesting-schedule",
      "fnd-vesting-cliff",
      "fnd-vesting-acceleration",
      "fnd-vesting-clawback",
      "fnd-roles-founder-roles",
      "fnd-decision-reserved",
      "fnd-capital-future",
      "fnd-ip-assignment",
      "fnd-ip-company-ownership",
      "fnd-restrictive-post",
      "fnd-restrictive-reasonable",
      "fnd-remuneration-employment-act",
      "fnd-transfer-rofr",
      "fnd-transfer-tag",
      "fnd-transfer-drag",
      "fnd-leaver-good",
      "fnd-leaver-bad",
      "fnd-leaver-unvested",
      "fnd-deadlock-buysell",
      "fnd-exit-ipo",
      "fnd-exit-sale",
      "fnd-indemnities",
      "fnd-dispute-governing-law",
      "fnd-term-survival",
      "fnd-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(70);
  });

  it("includes exhaustive articles-of-association core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "aoa-1",
      contractText: "Articles of Association",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "articles_of_association", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "aoa-interpretation-definitions",
      "aoa-interpretation-companies-act",
      "aoa-capital-authorised",
      "aoa-capital-classes",
      "aoa-capital-variation-rights",
      "aoa-issue-authority",
      "aoa-issue-preemption",
      "aoa-issue-companies-act",
      "aoa-certs-timeline",
      "aoa-transfer-instrument",
      "aoa-transfer-board-approval",
      "aoa-transfer-preemption",
      "aoa-transfer-refusal",
      "aoa-transfer-customized",
      "aoa-transmission-death",
      "aoa-lien-unpaid",
      "aoa-calls-forfeiture",
      "aoa-alteration-reduction",
      "aoa-meetings-agm",
      "aoa-voting-proxy",
      "aoa-directors-appointment",
      "aoa-powers-borrowing",
      "aoa-proceedings-written",
      "aoa-conflict-voting-restrictions",
      "aoa-dividends-interim",
      "aoa-accounts-audit",
      "aoa-notices-electronic",
      "aoa-indemnity-directors",
      "aoa-seal",
      "aoa-winding-up-priority",
      "aoa-variation-special-resolution",
      "aoa-variation-companies-act",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(75);
  });

  it("includes exhaustive agency-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "agency-1",
      contractText: "Agency Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "agency_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "agent-appointment",
      "agent-territory",
      "agent-products-services",
      "agent-exclusive",
      "agent-exclusive-competition-act",
      "agent-parties-kra",
      "agent-authority-scope",
      "agent-authority-negotiate",
      "agent-authority-conclude",
      "agent-authority-limits",
      "agent-no-vary-terms",
      "agent-relationship-independent",
      "agent-relationship-no-employment",
      "agent-relationship-no-partnership",
      "agent-duty-best-efforts",
      "agent-duty-reporting",
      "principal-duty-commission",
      "principal-duty-honor-authorized",
      "agent-commission-rate",
      "agent-commission-calc",
      "agent-commission-basis",
      "agent-commission-earned",
      "agent-commission-trigger",
      "agent-commission-payment",
      "agent-commission-renewals",
      "agent-commission-termination",
      "agent-payment-withholding-tax",
      "agent-expenses",
      "agent-data-protection-act",
      "agent-data-customer-handling",
      "agent-ip-trademark",
      "agent-comply-anti-bribery",
      "agent-indemnity-agent",
      "agent-indemnity-principal",
      "agent-indemnity-third-party",
      "agent-liability-cap",
      "agent-insurance",
      "agent-subagents-consent",
      "agent-term-cause",
      "agent-term-convenience",
      "agent-term-notice",
      "agent-post-outstanding-commission",
      "agent-post-pending-deals",
      "agent-post-commission-clarity",
      "agent-restrictive-nondealing",
      "agent-restrictive-reasonable",
      "agent-assignment-restrictions",
      "agent-governing-law",
      "agent-dispute-escalation",
      "agent-dispute-mediation",
      "agent-dispute-arb-court",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(85);
  });

  it("includes exhaustive franchise-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "fr-1",
      contractText: "Franchise Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "franchise_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "fr-grant-brand-right",
      "fr-grant-scope",
      "fr-grant-territory",
      "fr-grant-exclusive",
      "fr-grant-competition",
      "fr-fee-initial",
      "fr-fee-royalties",
      "fr-fee-marketing-fund",
      "fr-fee-tech",
      "fr-fee-vat",
      "fr-payment-audit",
      "fr-ops-manual",
      "fr-ops-brand-standards",
      "fr-ip-trademark-license",
      "fr-ip-registration-kenya",
      "fr-supply-approved",
      "fr-marketing-national-fund",
      "fr-reg-consumer-protection",
      "fr-reg-employment",
      "fr-reg-data-protection",
      "fr-restrictive-post",
      "fr-restrictive-reasonable",
      "fr-payment-reporting",
      "fr-assignment-consent",
      "fr-default-events",
      "fr-termination-breach",
      "fr-termination-immediate",
      "fr-post-debranding",
      "fr-indemnity-franchisee",
      "fr-liability-cap",
      "fr-dispute-governing-law",
      "fr-dispute-forum",
      "fr-dispute-mediation",
      "fr-amendment-written",
      "fr-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(90);
  });

  it("includes exhaustive partnership-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "ps-1",
      contractText: "Partnership Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "partnership_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "ps-parties-legal",
      "ps-parties-id",
      "ps-parties-kra",
      "ps-formation-name",
      "ps-formation-place",
      "ps-formation-start",
      "ps-formation-registration",
      "ps-capital-initial",
      "ps-capital-ownership",
      "ps-capital-default-equal",
      "ps-profit-ratio",
      "ps-profit-default-equal",
      "ps-mgmt-roles",
      "ps-mgmt-reserved",
      "ps-mgmt-agent-rule",
      "ps-duty-goodfaith",
      "ps-duty-fiduciary",
      "ps-remuneration-default",
      "ps-new-partner-approval",
      "ps-withdrawal-buyout",
      "ps-death-continuation",
      "ps-expulsion-grounds",
      "ps-expulsion-express",
      "ps-restrictive-reasonable",
      "ps-dissolution-events",
      "ps-dissolution-court",
      "ps-indemnity-between",
      "ps-liability-joint",
      "ps-dispute-mediation",
      "ps-governing-law",
      "ps-assignment",
      "ps-amendment-written",
      "ps-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(85);
  });

  it("includes exhaustive shareholders-agreement core clause checklist items", async () => {
    const document: ContractDocument = {
      sourceDocumentId: "sh-1",
      contractText: "Shareholders Agreement",
      sections: [{ page: 1, section: "General", text: "General terms." }],
      metadata: { governingLaw: "Kenya" },
    };
    const result = await defaultAgreementChecklistEvaluator({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "shareholders_agreement", confidence: 0.95 },
    });
    const ids = new Set(result.items.map((item) => item.id));
    const expected = [
      "sh-company-details",
      "sh-parties-company",
      "sh-purpose",
      "sh-purpose-company",
      "sh-capital-issued",
      "sh-capital-classes",
      "sh-capital-articles-alignment",
      "sh-governance-board-size",
      "sh-governance-directors",
      "sh-reserved-shares",
      "sh-reserved-dividend",
      "sh-reserved-ma",
      "sh-transfer-preemption",
      "sh-transfer-rofr",
      "sh-transfer-tag",
      "sh-transfer-drag",
      "sh-transfer-companies-act",
      "sh-funding-future",
      "sh-funding-preemption",
      "sh-funding-dilution",
      "sh-dividends-policy",
      "sh-info-financial",
      "sh-info-records",
      "sh-deadlock-russian",
      "sh-deadlock-shotgun",
      "sh-exit-ipo",
      "sh-exit-buyback",
      "sh-exit-putcall",
      "sh-valuation-formula",
      "sh-restrictive-post",
      "sh-restrictive-reasonable",
      "sh-founder-vesting",
      "sh-founder-leaver",
      "sh-founder-clawback",
      "sh-ip-founder-assignment",
      "sh-warranty-share-ownership",
      "sh-indemnity-breach",
      "sh-dispute-governing-law",
      "sh-dispute-arbitration",
      "sh-term-events",
      "sh-term-survival",
      "sh-amendment-threshold",
      "sh-amendment-written",
      "sh-notices",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
    expect(result.items.length).toBeGreaterThanOrEqual(90);
  });
});
