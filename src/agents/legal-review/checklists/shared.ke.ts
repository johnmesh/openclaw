import type { AgreementChecklistItem } from "../types.js";

type Citation = NonNullable<AgreementChecklistItem["citations"]>[number];

export type ChecklistTemplateItem = {
  id: string;
  title: string;
  keywords: string[];
  citations?: Citation[];
};

export type ChecklistTemplate = {
  agreementType: string;
  items: ChecklistTemplateItem[];
};

export function item(
  id: string,
  title: string,
  keywords: string[],
  citations?: Citation[],
): ChecklistTemplateItem {
  return { id, title, keywords, citations };
}

const CITATIONS = {
  lawOfContract: {
    source: "Law of Contract Act, Cap. 23 (Kenya)",
    section: "Sections 3 and 4",
    url: "https://new.kenyalaw.org/akn/ke/act/2002/6/eng@2022-12-31",
  },
  arbitration: {
    source: "Arbitration Act, 1995 (Kenya)",
    section: "Sections 4, 6 and 10",
    url: "https://new.kenyalaw.org/akn/ke/act/1995/4/eng@2024-12-27",
  },
  saleOfGoods: {
    source: "Sale of Goods Act, Cap. 31 (Kenya)",
    section: "Sections 14 to 16",
    url: "https://new.kenyalaw.org/akn/ke/act/1930/31/eng@2022-12-31/download/pdf",
  },
  dataProtection: {
    source: "Data Protection Act, 2019 (Kenya)",
    section: "Sections 25, 26 and 48",
    url: "https://new.kenyalaw.org/akn/ke/act/2019/24/eng@2022-12-31",
  },
  competition: {
    source: "Competition Act, 2010 (Kenya)",
    section: "Section 24A",
    url: "https://new.kenyalaw.org/akn/ke/act/2010/12/eng@2023-12-11",
  },
  employment: {
    source: "Employment Act, 2007 (Kenya)",
    section: "Part III and Part VI",
  },
  companies: {
    source: "Companies Act, 2015 (Kenya)",
    section: "Directors, shares and corporate governance provisions",
  },
  land: {
    source: "Land Act, 2012 (Kenya)",
    section: "Leases, charges and dispositions",
  },
  insurance: {
    source: "Insurance Act, Cap. 487 (Kenya)",
    section: "Policy and claims framework",
  },
  procurement: {
    source: "Public Procurement and Asset Disposal Act, 2015 (Kenya)",
    section: "Tendering and contract administration provisions",
  },
  consumer: {
    source: "Consumer Protection Act, 2012 (Kenya)",
    section: "Consumer contract and unfair practice protections",
  },
};

export const BOILERPLATE_ITEMS: ChecklistTemplateItem[] = [
  item("parties", "Parties", ["party", "parties"], [CITATIONS.lawOfContract]),
  item("definitions", "Definitions and Interpretation", ["definition", "interpretation"]),
  item("compliance-laws", "Compliance with Laws", ["compliance with laws", "applicable law"]),
  item("confidentiality", "Confidentiality", ["confidential"]),
  item("assignment", "Assignment", ["assignment", "assign"]),
  item("entire-agreement", "Entire Agreement", ["entire agreement"]),
  item("amendment", "Amendment", ["amendment", "variation"], [CITATIONS.lawOfContract]),
  item("severability", "Severability", ["severability"]),
  item("force-majeure", "Force Majeure", ["force majeure"]),
  item("governing-law", "Governing Law", ["governing law", "laws of"], [CITATIONS.lawOfContract]),
  item(
    "dispute-resolution",
    "Dispute Resolution",
    ["dispute", "arbitration", "jurisdiction", "forum"],
    [CITATIONS.arbitration],
  ),
  item("termination", "Termination", ["termination", "breach"]),
  item("notices", "Notices", ["notice", "served", "address for service"]),
];

export const SALES_ITEMS: ChecklistTemplateItem[] = [
  item("sales-parties", "Parties (Buyer/Seller)", ["buyer", "seller", "parties"]),
  item("sales-definitions", "Definitions and Interpretation", ["definition", "interpretation"]),
  item(
    "goods",
    "Description of Goods",
    ["goods", "product", "specification"],
    [CITATIONS.saleOfGoods],
  ),
  item("quantity", "Quantity", ["quantity", "units"], [CITATIONS.saleOfGoods]),
  item("price", "Price", ["price", "purchase price"], [CITATIONS.saleOfGoods]),
  item("taxes", "Taxes", ["vat", "tax", "duties"], [CITATIONS.competition]),
  item(
    "payment-terms",
    "Payment Terms",
    ["payment", "invoice", "due date"],
    [CITATIONS.competition],
  ),
  item("invoicing", "Invoicing", ["invoice", "invoicing"]),
  item("delivery", "Delivery", ["delivery", "incoterms", "delivery date"], [CITATIONS.saleOfGoods]),
  item("delivery-schedule", "Delivery Date / Schedule", [
    "delivery schedule",
    "delivery date",
    "shipment schedule",
  ]),
  item("risk-transfer", "Risk Transfer", ["risk transfer", "risk passes"], [CITATIONS.saleOfGoods]),
  item(
    "title-transfer",
    "Title Transfer",
    ["title transfer", "retention of title"],
    [CITATIONS.saleOfGoods],
  ),
  item(
    "retention-of-title",
    "Retention of Title",
    ["retention of title", "title remains with seller"],
    [CITATIONS.saleOfGoods],
  ),
  item(
    "inspection",
    "Inspection and Acceptance",
    ["inspection", "acceptance"],
    [CITATIONS.saleOfGoods],
  ),
  item(
    "product-warranties",
    "Product Warranties",
    ["warranty", "product warranty"],
    [CITATIONS.saleOfGoods],
  ),
  item(
    "title-warranty",
    "Title Warranty",
    ["title warranty", "good title"],
    [CITATIONS.saleOfGoods],
  ),
  item("fitness-purpose", "Fitness for Purpose", ["fitness for purpose"], [CITATIONS.saleOfGoods]),
  item(
    "rejection-defects",
    "Rejection of Defective Goods",
    ["defective goods", "reject goods"],
    [CITATIONS.saleOfGoods],
  ),
  item("repair-replacement", "Repair / Replacement", ["repair", "replacement"]),
  item("refund-terms", "Refund Terms", ["refund"]),
  item("limitation-liability", "Limitation of Liability", ["limitation of liability"]),
  item("consequential-loss", "Exclusion of Consequential Loss", [
    "consequential loss",
    "indirect loss",
  ]),
  item("indemnity", "Indemnity", ["indemnity", "indemnify"]),
  item("insurance", "Insurance", ["insurance"]),
  item("termination-breach", "Termination for Breach", [
    "termination for breach",
    "material breach",
  ]),
  item("termination-insolvency", "Insolvency Termination", ["insolvency", "insolvent"]),
  item("termination-consequences", "Consequences of Termination", [
    "consequences of termination",
    "upon termination",
  ]),
];

export const EMPLOYMENT_ITEMS: ChecklistTemplateItem[] = [
  item(
    "role",
    "Role and Duties",
    ["position", "duties", "responsibilities"],
    [CITATIONS.employment],
  ),
  item("salary", "Compensation", ["salary", "wage", "remuneration"], [CITATIONS.employment]),
  item("benefits", "Benefits", ["benefits", "leave", "medical"], [CITATIONS.employment]),
  item("term", "Term", ["term", "duration", "probation"], [CITATIONS.employment]),
  item(
    "working-hours",
    "Working Hours",
    ["working hours", "work schedule"],
    [CITATIONS.employment],
  ),
  item(
    "leave",
    "Leave Entitlements",
    ["annual leave", "sick leave", "maternity"],
    [CITATIONS.employment],
  ),
  item(
    "disciplinary",
    "Disciplinary Process",
    ["disciplinary", "misconduct"],
    [CITATIONS.employment],
  ),
  item(
    "termination-process",
    "Termination Process",
    ["termination", "notice period", "dismissal"],
    [CITATIONS.employment],
  ),
  item("non-compete", "Restrictive Covenants", ["non-compete", "non solicitation"]),
];

export const TECHNOLOGY_ITEMS: ChecklistTemplateItem[] = [
  item("license", "License Scope", ["license", "permitted use"]),
  item("service-level", "Service Levels", ["service level", "uptime", "availability"]),
  item("ip", "IP Ownership", ["intellectual property", "ip ownership"]),
  item(
    "data-protection",
    "Data Protection",
    ["data protection", "processor", "controller"],
    [CITATIONS.dataProtection],
  ),
  item("security", "Security", ["security", "encryption", "incident"], [CITATIONS.dataProtection]),
  item("source-code", "Source Code / Escrow", ["source code", "escrow"]),
  item("open-source", "Open Source Compliance", ["open source", "oss"]),
  item("availability-remedies", "Availability Remedies", ["service credit", "downtime credit"]),
];

export const REAL_ESTATE_ITEMS: ChecklistTemplateItem[] = [
  item("premises", "Premises Description", ["premises", "property", "parcel"], [CITATIONS.land]),
  item("term", "Term", ["term", "commencement", "expiry"], [CITATIONS.land]),
  item("rent", "Rent and Charges", ["rent", "service charge"], [CITATIONS.land]),
  item("maintenance", "Maintenance", ["maintenance", "repair"]),
  item("use", "Permitted Use", ["use of premises", "permitted use"]),
  item("deposit", "Security Deposit", ["deposit", "security deposit"]),
  item("default-remedies", "Default Remedies", ["default", "re-entry", "forfeiture"]),
  item("quiet-enjoyment", "Quiet Enjoyment", ["quiet enjoyment"]),
];

export const FINANCE_ITEMS: ChecklistTemplateItem[] = [
  item("principal", "Principal / Facility Amount", ["principal", "facility amount"]),
  item("interest", "Interest", ["interest", "rate"]),
  item("repayment", "Repayment Terms", ["repayment", "installment"]),
  item("security", "Security", ["security", "collateral", "charge"]),
  item("events-default", "Events of Default", ["event of default", "default"]),
  item("conditions-precedent", "Conditions Precedent", ["condition precedent"]),
  item("representations", "Representations and Warranties", ["representations", "warranties"]),
  item("covenants", "Covenants", ["financial covenant", "undertaking"]),
];

export const CORPORATE_ITEMS: ChecklistTemplateItem[] = [
  item(
    "shares",
    "Shares/Equity Terms",
    ["shares", "equity", "subscription"],
    [CITATIONS.companies],
  ),
  item("governance", "Governance", ["board", "voting", "governance"], [CITATIONS.companies]),
  item(
    "transfer",
    "Transfer Restrictions",
    ["transfer", "pre-emption", "right of first refusal"],
    [CITATIONS.companies],
  ),
  item("exit", "Exit Terms", ["exit", "drag-along", "tag-along"]),
  item("reserved-matters", "Reserved Matters", ["reserved matters", "consent rights"]),
  item("dividend-policy", "Dividend Policy", ["dividend"]),
  item("deadlock", "Deadlock Resolution", ["deadlock"]),
];

export const INTERNATIONAL_ITEMS: ChecklistTemplateItem[] = [
  item("trade-terms", "Trade Terms", ["incoterms", "export", "import"]),
  item("customs", "Customs and Duties", ["customs", "duties", "tariff"]),
  item("fx", "Currency and FX", ["currency", "exchange rate"]),
  item("sanctions", "Sanctions and Compliance", ["sanctions", "export control"]),
  item("trade-documents", "Trade Documentation", ["bill of lading", "certificate of origin"]),
  item("cross-border-tax", "Cross-Border Tax", ["withholding tax", "double taxation"]),
  item("import-export-licenses", "Import/Export Licenses", ["export license", "import permit"]),
];

export const CONSTRUCTION_ITEMS: ChecklistTemplateItem[] = [
  item("scope", "Scope of Works", ["scope of works", "specifications"]),
  item("program", "Timeline and Milestones", ["milestone", "completion date"]),
  item("payment", "Payment and Certification", ["interim payment", "certificate"]),
  item("variations", "Variations", ["variation", "change order"]),
  item("defects", "Defects Liability", ["defects liability", "defect correction"]),
  item("liquidated-damages", "Liquidated Damages", ["liquidated damages", "delay damages"]),
  item("performance-security", "Performance Security", [
    "performance bond",
    "advance payment guarantee",
  ]),
  item("site-handover", "Site Handover", ["site handover", "possession of site"]),
];

export const CONSUMER_ITEMS: ChecklistTemplateItem[] = [
  item(
    "consumer-terms",
    "Consumer Terms",
    ["terms and conditions", "consumer"],
    [CITATIONS.consumer],
  ),
  item(
    "pricing",
    "Pricing and Billing",
    ["price", "subscription", "billing"],
    [CITATIONS.consumer],
  ),
  item("cancellation", "Cancellation", ["cancel", "termination"], [CITATIONS.consumer]),
  item("refund", "Refunds", ["refund"], [CITATIONS.consumer]),
  item("auto-renewal", "Auto-Renewal", ["auto-renew", "automatic renewal"]),
  item("consumer-notices", "Consumer Notices", ["consumer notice", "notice to customer"]),
  item("warranty-disclaimer", "Warranty Disclaimer", ["as is", "disclaimer"]),
];

export const FAMILY_ITEMS: ChecklistTemplateItem[] = [
  item("assets", "Assets and Property", ["assets", "property"]),
  item("support", "Support/Obligations", ["maintenance", "support"]),
  item("children", "Children/Parental Terms", ["child", "custody"]),
  item("disclosure", "Financial Disclosure", ["financial disclosure"]),
  item("independent-advice", "Independent Legal Advice", ["independent legal advice"]),
  item("review-trigger", "Review / Variation Triggers", ["review trigger", "variation"]),
];

export const INSURANCE_ITEMS: ChecklistTemplateItem[] = [
  item("insured-risk", "Insured Risk", ["insured risk", "covered event"], [CITATIONS.insurance]),
  item("premium", "Premium", ["premium"], [CITATIONS.insurance]),
  item("claims", "Claims Process", ["claim", "notification"], [CITATIONS.insurance]),
  item("exclusions", "Exclusions", ["exclusion"], [CITATIONS.insurance]),
  item("sum-insured", "Sum Insured", ["sum insured", "policy limit"]),
  item("deductible", "Deductible / Excess", ["deductible", "excess"]),
  item("subrogation", "Subrogation", ["subrogation"]),
];

export const GOVERNMENT_ITEMS: ChecklistTemplateItem[] = [
  item(
    "procurement",
    "Procurement Requirements",
    ["procurement", "tender"],
    [CITATIONS.procurement],
  ),
  item("public-law", "Public Law Compliance", ["public", "statutory"], [CITATIONS.procurement]),
  item("audit", "Audit Rights", ["audit", "inspection"], [CITATIONS.procurement]),
  item(
    "anti-corruption",
    "Anti-Corruption",
    ["anti-corruption", "bribery"],
    [CITATIONS.procurement],
  ),
  item("reporting", "Reporting Obligations", ["reporting", "progress report"]),
  item("value-for-money", "Value for Money Controls", ["value for money"]),
  item("termination-convenience", "Termination for Convenience", ["termination for convenience"]),
];

export const LEGAL_STRUCTURE_ITEMS: ChecklistTemplateItem[] = [
  item(
    "formation",
    "Contract Formation",
    ["offer", "acceptance", "consideration"],
    [CITATIONS.lawOfContract],
  ),
  item(
    "enforceability",
    "Enforceability",
    ["void", "voidable", "enforceable"],
    [CITATIONS.lawOfContract],
  ),
  item("performance", "Performance Status", ["executed", "executory", "performed"]),
  item("risk-allocation", "Risk Allocation", ["risk", "allocation", "liability"]),
];

export function createKenyaTemplate(
  agreementType: string,
  items: ChecklistTemplateItem[],
): ChecklistTemplate {
  const merged = [...items, ...BOILERPLATE_ITEMS];
  const seen = new Set<string>();
  const deduped: ChecklistTemplateItem[] = [];
  for (const entry of merged) {
    if (seen.has(entry.id)) {
      continue;
    }
    seen.add(entry.id);
    deduped.push(entry);
  }
  return {
    agreementType,
    items: deduped,
  };
}
