import { GOVERNMENT_ITEMS, createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const PROCUREMENT_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "proc-parties",
    title: "Parties",
    keywords: ["procuring entity", "supplier", "contractor", "parties"],
  },
  {
    id: "proc-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  { id: "proc-recitals", title: "Background / Recitals", keywords: ["background", "recitals"] },
  {
    id: "proc-scope",
    title: "Scope of Procurement",
    keywords: ["scope of procurement", "scope of works", "scope of services"],
  },
  {
    id: "proc-description",
    title: "Description of Goods/Services/Works",
    keywords: ["goods", "services", "works"],
  },
  {
    id: "proc-specs",
    title: "Specifications and Technical Requirements",
    keywords: ["specification", "technical requirements"],
  },
  { id: "proc-sow", title: "Statement of Work", keywords: ["statement of work", "sow"] },
  {
    id: "proc-performance-standards",
    title: "Performance Standards",
    keywords: ["performance standards", "service levels"],
  },
  { id: "proc-deliverables", title: "Deliverables", keywords: ["deliverables"] },
  {
    id: "proc-commencement",
    title: "Commencement Date",
    keywords: ["commencement date", "effective date"],
  },
  { id: "proc-duration", title: "Duration", keywords: ["duration", "term"] },
  { id: "proc-renewal", title: "Renewal Options", keywords: ["renewal option", "extension"] },
  { id: "proc-contract-price", title: "Contract Price", keywords: ["contract price", "price"] },
  {
    id: "proc-pricing-structure",
    title: "Pricing Structure",
    keywords: ["fixed price", "unit-based", "milestone"],
  },
  { id: "proc-taxes", title: "Taxes", keywords: ["vat", "duties", "taxes"] },
  {
    id: "proc-invoicing",
    title: "Invoicing Requirements",
    keywords: ["invoice", "invoicing requirements"],
  },
  {
    id: "proc-payment-timeline",
    title: "Payment Timeline",
    keywords: ["payment timeline", "payment due"],
  },
  {
    id: "proc-late-interest",
    title: "Late Payment Interest",
    keywords: ["late payment interest", "default interest"],
  },
  {
    id: "proc-price-adjustment",
    title: "Price Adjustment Mechanism",
    keywords: ["price adjustment", "escalation"],
  },
  {
    id: "proc-ordering",
    title: "Purchase Order Process",
    keywords: ["purchase order", "ordering process"],
  },
  {
    id: "proc-calloff",
    title: "Call-Off Procedure",
    keywords: ["call-off", "framework agreement"],
  },
  {
    id: "proc-minmax-qty",
    title: "Minimum/Maximum Quantities",
    keywords: ["minimum quantity", "maximum quantity"],
  },
  { id: "proc-delivery-schedule", title: "Delivery Schedule", keywords: ["delivery schedule"] },
  { id: "proc-delivery-location", title: "Delivery Location", keywords: ["delivery location"] },
  { id: "proc-risk-transfer", title: "Risk Transfer", keywords: ["risk transfer", "risk passes"] },
  {
    id: "proc-title-transfer",
    title: "Title Transfer",
    keywords: ["title transfer", "ownership passes"],
  },
  {
    id: "proc-inspection",
    title: "Inspection and Acceptance",
    keywords: ["inspection", "acceptance"],
  },
  {
    id: "proc-rejection",
    title: "Rejection of Non-Conforming Goods",
    keywords: ["non-conforming goods", "rejection"],
  },
  { id: "proc-quality-standards", title: "Quality Standards", keywords: ["quality standards"] },
  {
    id: "proc-testing",
    title: "Testing Requirements",
    keywords: ["testing requirements", "testing"],
  },
  {
    id: "proc-spec-compliance",
    title: "Compliance with Specifications",
    keywords: ["comply with specifications", "specification compliance"],
  },
  { id: "proc-audit-rights", title: "Audit Rights", keywords: ["audit rights", "audit"] },
  {
    id: "proc-continuous-improvement",
    title: "Continuous Improvement",
    keywords: ["continuous improvement"],
  },
  {
    id: "proc-warranty-product-service",
    title: "Product/Service Warranty",
    keywords: ["product warranty", "service warranty"],
  },
  {
    id: "proc-warranty-laws",
    title: "Warranty - Compliance with Laws",
    keywords: ["warranty", "compliance with laws"],
  },
  {
    id: "proc-warranty-ip",
    title: "Warranty - Non-Infringement of IP",
    keywords: ["non-infringement", "intellectual property"],
  },
  {
    id: "proc-warranty-performance",
    title: "Performance Warranty",
    keywords: ["performance warranty"],
  },
  {
    id: "proc-variation",
    title: "Variation Procedure",
    keywords: ["variation procedure", "variation"],
  },
  { id: "proc-change-order", title: "Change Order Process", keywords: ["change order"] },
  {
    id: "proc-change-impact",
    title: "Impact on Pricing/Timeline",
    keywords: ["impact on pricing", "impact on timeline"],
  },
  {
    id: "proc-regulatory",
    title: "Compliance with Applicable Laws",
    keywords: ["applicable laws", "regulatory compliance"],
  },
  {
    id: "proc-anti-bribery",
    title: "Anti-Bribery and Anti-Corruption",
    keywords: ["anti-bribery", "anti-corruption", "bribery"],
  },
  {
    id: "proc-data-protection",
    title: "Data Protection",
    keywords: ["data protection", "personal data"],
  },
  { id: "proc-health-safety", title: "Health and Safety", keywords: ["health and safety"] },
  {
    id: "proc-environmental",
    title: "Environmental Compliance",
    keywords: ["environmental compliance"],
  },
  {
    id: "proc-confidentiality-def",
    title: "Confidentiality - Definition",
    keywords: ["confidential information"],
  },
  {
    id: "proc-confidentiality-duration",
    title: "Confidentiality - Duration",
    keywords: ["confidentiality duration"],
  },
  {
    id: "proc-confidentiality-exceptions",
    title: "Confidentiality - Exceptions",
    keywords: ["confidentiality exceptions"],
  },
  {
    id: "proc-ip-ownership",
    title: "IP - Ownership of Deliverables",
    keywords: ["ownership of deliverables", "ip ownership"],
  },
  { id: "proc-ip-license", title: "IP - License Rights", keywords: ["license rights"] },
  { id: "proc-ip-background", title: "IP - Background IP", keywords: ["background ip"] },
  {
    id: "proc-ip-indemnity",
    title: "IP Infringement Indemnity",
    keywords: ["ip infringement indemnity"],
  },
  {
    id: "proc-indemnity-third-party",
    title: "Indemnity - Third-Party Claims",
    keywords: ["third-party claims"],
  },
  {
    id: "proc-indemnity-reg-fines",
    title: "Indemnity - Regulatory Fines",
    keywords: ["regulatory fines"],
  },
  {
    id: "proc-indemnity-pi-pd",
    title: "Indemnity - Personal Injury / Property Damage",
    keywords: ["personal injury", "property damage"],
  },
  { id: "proc-liability-cap", title: "Liability Cap", keywords: ["liability cap"] },
  {
    id: "proc-liability-indirect",
    title: "Exclusion of Indirect Loss",
    keywords: ["indirect loss", "consequential loss"],
  },
  {
    id: "proc-liability-carveouts",
    title: "Liability Carve-Outs",
    keywords: ["fraud", "willful misconduct"],
  },
  {
    id: "proc-insurance-types",
    title: "Required Insurance Types",
    keywords: ["required insurance", "insurance types"],
  },
  {
    id: "proc-insurance-limits",
    title: "Insurance Coverage Limits",
    keywords: ["coverage limits"],
  },
  {
    id: "proc-insurance-proof",
    title: "Proof of Insurance",
    keywords: ["proof of insurance", "insurance certificate"],
  },
  {
    id: "proc-subcontract-consent",
    title: "Subcontracting Consent Requirements",
    keywords: ["subcontracting consent", "consent to subcontract"],
  },
  {
    id: "proc-subcontract-responsibility",
    title: "Responsibility for Subcontractors",
    keywords: ["responsibility for subcontractors"],
  },
  { id: "proc-personnel-key", title: "Key Personnel", keywords: ["key personnel"] },
  {
    id: "proc-personnel-replacement",
    title: "Personnel Replacement Procedure",
    keywords: ["replacement procedure"],
  },
  {
    id: "proc-personnel-background",
    title: "Personnel Background Checks",
    keywords: ["background checks"],
  },
  {
    id: "proc-term-convenience",
    title: "Termination for Convenience",
    keywords: ["termination for convenience"],
  },
  {
    id: "proc-term-cause",
    title: "Termination for Cause",
    keywords: ["termination for cause", "material breach"],
  },
  {
    id: "proc-term-insolvency",
    title: "Insolvency Termination",
    keywords: ["insolvency termination", "insolvent"],
  },
  {
    id: "proc-term-consequence",
    title: "Consequences of Termination",
    keywords: ["consequences of termination"],
  },
  {
    id: "proc-term-transition",
    title: "Transition Assistance",
    keywords: ["transition assistance"],
  },
  { id: "proc-fm-definition", title: "Force Majeure Definition", keywords: ["force majeure"] },
  {
    id: "proc-fm-notice",
    title: "Force Majeure Notice Requirements",
    keywords: ["force majeure notice"],
  },
  {
    id: "proc-fm-suspension",
    title: "Force Majeure Suspension Rights",
    keywords: ["suspension rights"],
  },
  {
    id: "proc-dispute-escalation",
    title: "Dispute Escalation Procedure",
    keywords: ["escalation procedure"],
  },
  { id: "proc-dispute-mediation", title: "Dispute Mediation", keywords: ["mediation"] },
  {
    id: "proc-dispute-arb-court",
    title: "Arbitration or Courts",
    keywords: ["arbitration", "courts"],
  },
  { id: "proc-dispute-governing", title: "Governing Law", keywords: ["governing law"] },
  { id: "proc-ethics-conflict", title: "Conflict of Interest", keywords: ["conflict of interest"] },
  { id: "proc-ethics-debarment", title: "Debarment Representation", keywords: ["debarment"] },
  {
    id: "proc-ethics-transparency",
    title: "Transparency and Audit",
    keywords: ["transparency", "audit"],
  },
  {
    id: "proc-ethics-records",
    title: "Public Records Disclosure",
    keywords: ["public records disclosure"],
  },
  {
    id: "proc-ethics-authority-rules",
    title: "Procurement Authority Rules Compliance",
    keywords: ["procurement authority rules"],
  },
  {
    id: "proc-data-processing",
    title: "Data Processing Obligations",
    keywords: ["data processing obligations"],
  },
  { id: "proc-data-security", title: "Data Security Measures", keywords: ["security measures"] },
  {
    id: "proc-data-breach",
    title: "Data Breach Notification",
    keywords: ["data breach notification"],
  },
  {
    id: "proc-assignment-restrictions",
    title: "Assignment Restrictions",
    keywords: ["assignment restrictions"],
  },
  {
    id: "proc-assignment-novation",
    title: "Novation Rights",
    keywords: ["novation rights", "novation"],
  },
  { id: "proc-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "proc-amendment", title: "Amendment", keywords: ["amendment", "variation"] },
  { id: "proc-severability", title: "Severability", keywords: ["severability"] },
  { id: "proc-notices", title: "Notices", keywords: ["notices", "notice delivery"] },
];

const ITEMS: ChecklistTemplateItem[] = [...GOVERNMENT_ITEMS, ...PROCUREMENT_ITEMS];

const template = createKenyaTemplate("procurement_contract", ITEMS);

export default template;
