import { SALES_ITEMS, createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const SUPPLY_ITEMS: ChecklistTemplateItem[] = [
  { id: "sup-parties", title: "Parties", keywords: ["supplier", "buyer", "parties"] },
  {
    id: "sup-parties-legal",
    title: "Parties - Legal Names",
    keywords: ["legal name", "full legal name"],
  },
  {
    id: "sup-parties-addresses",
    title: "Parties - Addresses",
    keywords: ["address", "registered office"],
  },
  {
    id: "sup-parties-reg",
    title: "Parties - Registration Details",
    keywords: ["registration number", "company number"],
  },
  {
    id: "sup-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "sup-appointment",
    title: "Appointment of Supplier",
    keywords: ["appoint", "appointment of supplier"],
  },
  { id: "sup-scope", title: "Scope of Supply", keywords: ["scope of supply"] },
  {
    id: "sup-description",
    title: "Description of Goods/Services",
    keywords: ["goods", "services", "description"],
  },
  {
    id: "sup-specifications",
    title: "Specifications",
    keywords: ["specification", "technical requirements"],
  },
  {
    id: "sup-exclusivity",
    title: "Exclusivity/Non-Exclusivity",
    keywords: ["exclusive", "non-exclusive"],
  },
  { id: "sup-territory", title: "Territory (If Applicable)", keywords: ["territory"] },
  {
    id: "sup-competition-act",
    title: "Exclusivity - Competition Act Compliance",
    keywords: ["competition act"],
  },
  {
    id: "sup-order-procedure",
    title: "Order Procedure",
    keywords: ["order procedure", "purchase order"],
  },
  { id: "sup-po", title: "Purchase Orders", keywords: ["purchase order"] },
  {
    id: "sup-order-acceptance",
    title: "Acceptance of Orders",
    keywords: ["acceptance of orders", "order acceptance"],
  },
  {
    id: "sup-forecast",
    title: "Forecasting Obligations",
    keywords: ["forecast", "forecasting obligations"],
  },
  {
    id: "sup-min-purchase",
    title: "Minimum Purchase Requirements",
    keywords: ["minimum purchase", "minimum order"],
  },
  { id: "sup-price-list", title: "Price List", keywords: ["price list"] },
  {
    id: "sup-pricing-structure",
    title: "Pricing Structure",
    keywords: ["fixed price", "unit-based", "volume-based"],
  },
  { id: "sup-discounts", title: "Discounts", keywords: ["discount"] },
  {
    id: "sup-price-adjustment",
    title: "Price Adjustment Mechanism",
    keywords: ["price adjustment"],
  },
  { id: "sup-currency", title: "Currency", keywords: ["currency"] },
  { id: "sup-vat-treatment", title: "VAT Treatment", keywords: ["vat treatment"] },
  { id: "sup-invoicing", title: "Invoicing", keywords: ["invoice", "invoicing"] },
  { id: "sup-payment-date", title: "Payment Due Date", keywords: ["payment due date", "due date"] },
  {
    id: "sup-payment-method",
    title: "Payment Method",
    keywords: ["payment method", "bank details"],
  },
  {
    id: "sup-late-interest",
    title: "Late Payment Interest",
    keywords: ["late payment interest", "default interest"],
  },
  { id: "sup-setoff", title: "Set-Off Rights", keywords: ["set-off", "set off"] },
  { id: "sup-delivery-schedule", title: "Delivery Schedule", keywords: ["delivery schedule"] },
  { id: "sup-lead-times", title: "Lead Times", keywords: ["lead time"] },
  { id: "sup-delivery-location", title: "Delivery Location", keywords: ["delivery location"] },
  { id: "sup-shipping", title: "Shipping Terms", keywords: ["incoterms", "shipping terms"] },
  {
    id: "sup-packaging",
    title: "Packaging Requirements",
    keywords: ["packaging requirements", "packaging"],
  },
  { id: "sup-delivery-costs", title: "Delivery Costs", keywords: ["delivery costs"] },
  {
    id: "sup-partial-deliveries",
    title: "Partial Deliveries",
    keywords: ["partial deliveries", "partial delivery"],
  },
  {
    id: "sup-risk-transfer",
    title: "Transfer of Risk",
    keywords: ["risk transfer", "risk passes"],
  },
  {
    id: "sup-title-transfer",
    title: "Transfer of Ownership",
    keywords: ["title transfer", "ownership passes"],
  },
  { id: "sup-retention-title", title: "Retention of Title", keywords: ["retention of title"] },
  {
    id: "sup-sale-of-goods-alignment",
    title: "Risk/Title Alignment with Sale of Goods Act",
    keywords: ["sale of goods act"],
  },
  {
    id: "sup-inspection",
    title: "Inspection Period",
    keywords: ["inspection period", "inspection"],
  },
  {
    id: "sup-rejection",
    title: "Rejection of Defective Goods",
    keywords: ["rejection", "defective goods"],
  },
  { id: "sup-acceptance", title: "Acceptance Criteria", keywords: ["acceptance criteria"] },
  { id: "sup-quality", title: "Quality Standards", keywords: ["quality standards"] },
  { id: "sup-testing", title: "Testing Procedures", keywords: ["testing procedures", "testing"] },
  { id: "sup-reg-compliance", title: "Regulatory Compliance", keywords: ["regulatory compliance"] },
  {
    id: "sup-kebs-standards-act",
    title: "KEBS Standards Act Compliance",
    keywords: ["kebs", "standards act"],
  },
  { id: "sup-audit-rights", title: "Audit Rights", keywords: ["audit rights", "audit"] },
  {
    id: "sup-continuous-improvement",
    title: "Continuous Improvement Obligations",
    keywords: ["continuous improvement"],
  },
  { id: "sup-title-warranty", title: "Warranties - Title Warranty", keywords: ["title warranty"] },
  {
    id: "sup-warranty-spec",
    title: "Warranties - Conformity with Specifications",
    keywords: ["conformity with specifications"],
  },
  {
    id: "sup-warranty-merchantable",
    title: "Warranties - Merchantable Quality",
    keywords: ["merchantable quality"],
  },
  {
    id: "sup-warranty-fitness",
    title: "Warranties - Fitness for Purpose",
    keywords: ["fitness for purpose"],
  },
  {
    id: "sup-warranty-laws",
    title: "Warranties - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "sup-warranty-period",
    title: "Warranties - Warranty Period",
    keywords: ["warranty period"],
  },
  {
    id: "sup-rejection-right",
    title: "Rejection and Remedies - Right to Reject Defective Goods",
    keywords: ["right to reject defective goods"],
  },
  {
    id: "sup-repair-replacement",
    title: "Rejection and Remedies - Repair/Replacement",
    keywords: ["repair", "replacement"],
  },
  {
    id: "sup-refund-rights",
    title: "Rejection and Remedies - Refund Rights",
    keywords: ["refund rights", "refund"],
  },
  {
    id: "sup-claims-time-limits",
    title: "Rejection and Remedies - Time Limits for Claims",
    keywords: ["time limits for claims", "claims time limit"],
  },
  {
    id: "sup-ip-ownership",
    title: "Intellectual Property - Ownership",
    keywords: ["ip ownership", "intellectual property"],
  },
  {
    id: "sup-ip-license",
    title: "Intellectual Property - License Rights",
    keywords: ["license rights"],
  },
  { id: "sup-ip-trademark", title: "Protection of Trademarks", keywords: ["trademark"] },
  {
    id: "sup-ip-indemnity",
    title: "IP Infringement Indemnity",
    keywords: ["ip infringement indemnity"],
  },
  {
    id: "sup-conf-definition",
    title: "Confidentiality - Definition",
    keywords: ["confidential information"],
  },
  {
    id: "sup-conf-obligation",
    title: "Confidentiality - Obligations",
    keywords: ["confidentiality obligation"],
  },
  {
    id: "sup-conf-exceptions",
    title: "Confidentiality - Exceptions",
    keywords: ["confidentiality exceptions"],
  },
  {
    id: "sup-conf-duration",
    title: "Confidentiality - Duration",
    keywords: ["confidentiality duration"],
  },
  { id: "sup-comply-laws", title: "Compliance with Laws", keywords: ["compliance with laws"] },
  {
    id: "sup-anti-bribery",
    title: "Anti-Bribery and Anti-Corruption",
    keywords: ["anti-bribery", "anti-corruption"],
  },
  {
    id: "sup-environment",
    title: "Environmental Compliance",
    keywords: ["environmental compliance"],
  },
  {
    id: "sup-data-protection",
    title: "Data Protection",
    keywords: ["data protection", "personal data"],
  },
  {
    id: "sup-consumer-protection-act",
    title: "Consumer Protection Act Compliance",
    keywords: ["consumer protection act", "consumer law compliance"],
  },
  {
    id: "sup-subcontract-consent",
    title: "Subcontracting Consent Requirements",
    keywords: ["subcontracting consent"],
  },
  {
    id: "sup-subcontract-responsibility",
    title: "Responsibility for Subcontractors",
    keywords: ["responsibility for subcontractors"],
  },
  {
    id: "sup-indemnity-third-party",
    title: "Indemnities - Third-Party Claims",
    keywords: ["third-party claims"],
  },
  {
    id: "sup-indemnity-product",
    title: "Indemnities - Product Liability",
    keywords: ["product liability"],
  },
  { id: "sup-indemnity-ip", title: "Indemnities - IP Infringement", keywords: ["ip infringement"] },
  {
    id: "sup-indemnity-pi-pd",
    title: "Indemnities - Personal Injury/Property Damage",
    keywords: ["personal injury", "property damage"],
  },
  { id: "sup-liability-cap", title: "Limitation of Liability - Cap", keywords: ["liability cap"] },
  {
    id: "sup-liability-indirect",
    title: "Limitation of Liability - Indirect Loss Exclusion",
    keywords: ["indirect loss", "consequential loss"],
  },
  {
    id: "sup-liability-carveouts",
    title: "Limitation of Liability - Carve-Outs",
    keywords: ["fraud", "willful misconduct"],
  },
  {
    id: "sup-insurance-required",
    title: "Insurance Coverage Requirements",
    keywords: ["insurance coverage", "required insurance"],
  },
  {
    id: "sup-insurance-evidence",
    title: "Evidence of Insurance",
    keywords: ["evidence of insurance", "insurance certificate"],
  },
  { id: "sup-insurance-transit", title: "Transit Insurance", keywords: ["transit insurance"] },
  { id: "sup-term-duration", title: "Term and Duration", keywords: ["term", "contract duration"] },
  { id: "sup-term-renewal", title: "Renewal", keywords: ["renewal"] },
  {
    id: "sup-term-cause",
    title: "Termination for Cause",
    keywords: ["termination for cause", "material breach"],
  },
  {
    id: "sup-term-convenience",
    title: "Termination for Convenience",
    keywords: ["termination for convenience"],
  },
  {
    id: "sup-term-insolvency",
    title: "Insolvency Termination",
    keywords: ["insolvency termination", "insolvent"],
  },
  {
    id: "sup-term-consequences",
    title: "Consequences of Termination",
    keywords: ["consequences of termination"],
  },
  {
    id: "sup-consequence-outstanding-payments",
    title: "Consequences - Outstanding Payments",
    keywords: ["outstanding payments"],
  },
  {
    id: "sup-consequence-return-goods",
    title: "Consequences - Return of Goods",
    keywords: ["return of goods"],
  },
  {
    id: "sup-consequence-survival",
    title: "Consequences - Survival of Clauses",
    keywords: ["survival of clauses"],
  },
  {
    id: "sup-change-variation",
    title: "Variation Procedure",
    keywords: ["variation procedure", "variation"],
  },
  { id: "sup-change-orders", title: "Change Orders", keywords: ["change order"] },
  {
    id: "sup-change-impact",
    title: "Change Impact on Price/Timeline",
    keywords: ["impact on price", "impact on timeline"],
  },
  { id: "sup-fm-events", title: "Force Majeure Events", keywords: ["force majeure"] },
  { id: "sup-fm-notice", title: "Force Majeure Notice", keywords: ["force majeure notice"] },
  {
    id: "sup-fm-suspension",
    title: "Force Majeure Suspension Rights",
    keywords: ["suspension rights"],
  },
  {
    id: "sup-bc-dr",
    title: "Business Continuity / Disaster Recovery",
    keywords: ["business continuity", "disaster recovery"],
  },
  { id: "sup-bc-plan", title: "Continuity Planning", keywords: ["continuity plan"] },
  {
    id: "sup-assignment",
    title: "Assignment Restrictions",
    keywords: ["assignment restrictions", "assignment"],
  },
  { id: "sup-novation", title: "Novation Rights", keywords: ["novation rights", "novation"] },
  {
    id: "sup-notices",
    title: "Notices",
    keywords: ["notice", "method of service", "contact details"],
  },
  { id: "sup-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "sup-amendment", title: "Amendment", keywords: ["amendment", "written variation"] },
  { id: "sup-severability", title: "Severability", keywords: ["severability"] },
  { id: "sup-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "sup-governing-law", title: "Governing Law", keywords: ["governing law"] },
  {
    id: "sup-dispute-escalation",
    title: "Dispute Escalation Mechanism",
    keywords: ["escalation mechanism"],
  },
  { id: "sup-dispute-mediation", title: "Dispute Mediation", keywords: ["mediation"] },
  {
    id: "sup-dispute-arb-court",
    title: "Dispute Arbitration or Courts",
    keywords: ["arbitration", "courts"],
  },
];

const ITEMS: ChecklistTemplateItem[] = [...SALES_ITEMS, ...SUPPLY_ITEMS];

const template = createKenyaTemplate("supply_agreement", ITEMS);

export default template;
