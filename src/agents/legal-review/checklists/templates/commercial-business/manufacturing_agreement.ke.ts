import { createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const MANUFACTURING_ITEMS: ChecklistTemplateItem[] = [
  { id: "mfg-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "mfg-parties-registration",
    title: "Parties - Registration Numbers",
    keywords: ["registration numbers"],
  },
  {
    id: "mfg-parties-addresses",
    title: "Parties - Addresses",
    keywords: ["addresses", "registered address"],
  },
  {
    id: "mfg-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "mfg-appointment",
    title: "Appointment and Scope - Appointment of Manufacturer",
    keywords: ["appointment of manufacturer"],
  },
  {
    id: "mfg-products-scope",
    title: "Appointment and Scope - Products to be Manufactured",
    keywords: ["products to be manufactured"],
  },
  {
    id: "mfg-exclusive",
    title: "Appointment and Scope - Exclusivity",
    keywords: ["exclusive", "non-exclusive"],
  },
  { id: "mfg-territory", title: "Appointment and Scope - Territory", keywords: ["territory"] },
  {
    id: "mfg-specs-technical",
    title: "Product Specifications - Technical Specifications",
    keywords: ["technical specifications"],
  },
  {
    id: "mfg-specs-materials",
    title: "Product Specifications - Approved Materials",
    keywords: ["approved materials"],
  },
  {
    id: "mfg-specs-standards",
    title: "Product Specifications - Manufacturing Standards",
    keywords: ["manufacturing standards"],
  },
  {
    id: "mfg-specs-packaging",
    title: "Product Specifications - Packaging Requirements",
    keywords: ["packaging requirements"],
  },
  {
    id: "mfg-specs-labeling",
    title: "Product Specifications - Labeling Requirements",
    keywords: ["labeling requirements", "labelling requirements"],
  },
  {
    id: "mfg-specs-kebs",
    title: "Product Specifications - KEBS Standards",
    keywords: ["kebs", "standards act"],
  },
  {
    id: "mfg-reg-kebs",
    title: "Regulatory Compliance - Kenyan Standards",
    keywords: ["kenyan standards", "kebs"],
  },
  {
    id: "mfg-reg-sector-licensing",
    title: "Regulatory Compliance - Sector Licensing",
    keywords: ["sector-specific licensing", "sector specific licensing", "food", "pharma"],
  },
  {
    id: "mfg-reg-environment",
    title: "Regulatory Compliance - Environmental",
    keywords: ["environmental compliance"],
  },
  {
    id: "mfg-reg-import-export",
    title: "Regulatory Compliance - Import/Export Approvals",
    keywords: ["import/export approvals", "import export approvals"],
  },
  {
    id: "mfg-orders-procedure",
    title: "Orders and Forecasting - Order Procedure",
    keywords: ["order procedure"],
  },
  {
    id: "mfg-orders-moq",
    title: "Orders and Forecasting - MOQ",
    keywords: ["minimum order quantities", "moq"],
  },
  {
    id: "mfg-orders-forecast",
    title: "Orders and Forecasting - Forecasting",
    keywords: ["forecasting obligations"],
  },
  {
    id: "mfg-orders-production-schedule",
    title: "Orders and Forecasting - Production Schedules",
    keywords: ["production schedules"],
  },
  { id: "mfg-pricing-unit", title: "Pricing - Unit Pricing", keywords: ["unit pricing"] },
  { id: "mfg-pricing-breakdown", title: "Pricing - Cost Breakdown", keywords: ["cost breakdown"] },
  {
    id: "mfg-pricing-adjustment",
    title: "Pricing - Price Adjustment Mechanism",
    keywords: ["price adjustment mechanism"],
  },
  { id: "mfg-pricing-currency", title: "Pricing - Currency", keywords: ["currency"] },
  { id: "mfg-pricing-vat", title: "Pricing - Taxes (VAT)", keywords: ["vat treatment", "taxes"] },
  { id: "mfg-payment-invoicing", title: "Payment Terms - Invoicing", keywords: ["invoicing"] },
  {
    id: "mfg-payment-timelines",
    title: "Payment Terms - Timelines",
    keywords: ["payment timelines"],
  },
  {
    id: "mfg-payment-late-interest",
    title: "Payment Terms - Late Interest",
    keywords: ["late payment interest"],
  },
  {
    id: "mfg-payment-setoff",
    title: "Payment Terms - Set-Off Rights",
    keywords: ["set-off rights", "set off rights"],
  },
  {
    id: "mfg-materials-provider",
    title: "Supply of Materials - Supplier of Raw Materials",
    keywords: ["who provides raw materials", "raw materials"],
  },
  {
    id: "mfg-materials-ownership",
    title: "Supply of Materials - Ownership",
    keywords: ["ownership of materials"],
  },
  {
    id: "mfg-materials-storage",
    title: "Supply of Materials - Storage Obligations",
    keywords: ["storage obligations"],
  },
  {
    id: "mfg-materials-risk",
    title: "Supply of Materials - Risk of Loss",
    keywords: ["risk of loss"],
  },
  {
    id: "mfg-goods-risk-transfer",
    title: "Ownership of Goods - Transfer of Risk",
    keywords: ["transfer of risk"],
  },
  {
    id: "mfg-goods-title-transfer",
    title: "Ownership of Goods - Transfer of Title",
    keywords: ["transfer of title"],
  },
  {
    id: "mfg-goods-retention-title",
    title: "Ownership of Goods - Retention of Title",
    keywords: ["retention of title"],
  },
  {
    id: "mfg-quality-inspection-rights",
    title: "Quality Control and Inspection - Inspection Rights",
    keywords: ["inspection rights"],
  },
  {
    id: "mfg-quality-audits",
    title: "Quality Control and Inspection - Quality Audits",
    keywords: ["quality audits"],
  },
  {
    id: "mfg-quality-rejection",
    title: "Quality Control and Inspection - Rejection of Defects",
    keywords: ["rejection of defective goods"],
  },
  {
    id: "mfg-quality-corrective",
    title: "Quality Control and Inspection - Corrective Action",
    keywords: ["corrective action process"],
  },
  {
    id: "mfg-warranty-spec",
    title: "Warranties - Conformity with Specifications",
    keywords: ["conformity with specifications"],
  },
  {
    id: "mfg-warranty-merchantable",
    title: "Warranties - Merchantable Quality",
    keywords: ["merchantable quality"],
  },
  {
    id: "mfg-warranty-fitness",
    title: "Warranties - Fitness for Purpose",
    keywords: ["fitness for purpose"],
  },
  {
    id: "mfg-warranty-compliance",
    title: "Warranties - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "mfg-warranty-period",
    title: "Warranties - Warranty Period",
    keywords: ["warranty period"],
  },
  {
    id: "mfg-ip-designs",
    title: "Intellectual Property - Product Designs Ownership",
    keywords: ["ownership of product designs"],
  },
  {
    id: "mfg-ip-trademarks",
    title: "Intellectual Property - Trademark Use",
    keywords: ["use of trademarks"],
  },
  {
    id: "mfg-ip-tooling",
    title: "Intellectual Property - Tooling Ownership",
    keywords: ["tooling ownership"],
  },
  {
    id: "mfg-ip-improvements",
    title: "Intellectual Property - Assignment of Improvements",
    keywords: ["assignment of improvements"],
  },
  {
    id: "mfg-ip-indemnity",
    title: "Intellectual Property - IP Infringement Indemnity",
    keywords: ["ip infringement indemnity"],
  },
  {
    id: "mfg-ip-industrial-property-act",
    title: "Intellectual Property - Industrial Property Act",
    keywords: ["industrial property act"],
  },
  {
    id: "mfg-conf-trade-secrets",
    title: "Confidentiality - Trade Secrets",
    keywords: ["trade secrets"],
  },
  {
    id: "mfg-conf-processes",
    title: "Confidentiality - Manufacturing Processes",
    keywords: ["manufacturing processes"],
  },
  {
    id: "mfg-conf-duration",
    title: "Confidentiality - Duration",
    keywords: ["duration of confidentiality"],
  },
  {
    id: "mfg-subcontract-consent",
    title: "Subcontracting - Consent Requirements",
    keywords: ["consent requirements"],
  },
  {
    id: "mfg-subcontract-responsibility",
    title: "Subcontracting - Responsibility",
    keywords: ["responsibility for subcontractors"],
  },
  {
    id: "mfg-indemnity-product-liability",
    title: "Indemnity - Product Liability",
    keywords: ["product liability"],
  },
  {
    id: "mfg-indemnity-third-party",
    title: "Indemnity - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  {
    id: "mfg-indemnity-regulatory",
    title: "Indemnity - Regulatory Penalties",
    keywords: ["regulatory penalties"],
  },
  {
    id: "mfg-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "mfg-liability-indirect",
    title: "Limitation of Liability - Indirect Loss Exclusion",
    keywords: ["exclusion of indirect loss", "indirect loss"],
  },
  {
    id: "mfg-liability-fraud",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  {
    id: "mfg-insurance-product",
    title: "Insurance - Product Liability Insurance",
    keywords: ["product liability insurance"],
  },
  {
    id: "mfg-insurance-public",
    title: "Insurance - Public Liability Insurance",
    keywords: ["public liability insurance"],
  },
  {
    id: "mfg-insurance-evidence",
    title: "Insurance - Evidence of Coverage",
    keywords: ["evidence of coverage", "proof of insurance"],
  },
  {
    id: "mfg-laws-health-safety",
    title: "Compliance with Laws - Health and Safety",
    keywords: ["health and safety compliance", "health & safety"],
  },
  {
    id: "mfg-laws-employment",
    title: "Compliance with Laws - Employment",
    keywords: ["employment compliance"],
  },
  {
    id: "mfg-laws-environment",
    title: "Compliance with Laws - Environmental",
    keywords: ["environmental compliance"],
  },
  {
    id: "mfg-laws-competition",
    title: "Compliance with Laws - Competition",
    keywords: ["competition law compliance"],
  },
  { id: "mfg-term-initial", title: "Term - Initial Term", keywords: ["initial term"] },
  { id: "mfg-term-renewal", title: "Term - Renewal", keywords: ["renewal"] },
  {
    id: "mfg-termination-breach",
    title: "Termination - Breach",
    keywords: ["termination for breach"],
  },
  { id: "mfg-termination-cure", title: "Termination - Cure Period", keywords: ["cure period"] },
  { id: "mfg-termination-insolvency", title: "Termination - Insolvency", keywords: ["insolvency"] },
  {
    id: "mfg-termination-convenience",
    title: "Termination - Convenience",
    keywords: ["termination for convenience"],
  },
  {
    id: "mfg-termination-consequences",
    title: "Termination - Consequences",
    keywords: ["consequences of termination"],
  },
  {
    id: "mfg-recall-procedures",
    title: "Product Recall - Procedures",
    keywords: ["recall procedures"],
  },
  {
    id: "mfg-recall-costs",
    title: "Product Recall - Cost Allocation",
    keywords: ["cost allocation"],
  },
  {
    id: "mfg-recall-notice",
    title: "Product Recall - Notification Obligations",
    keywords: ["notification obligations"],
  },
  { id: "mfg-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  { id: "mfg-assignment", title: "Assignment", keywords: ["assignment"] },
  {
    id: "mfg-dispute-escalation",
    title: "Dispute Resolution - Escalation",
    keywords: ["escalation"],
  },
  { id: "mfg-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "mfg-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  {
    id: "mfg-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  { id: "mfg-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "mfg-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "mfg-severability", title: "Severability", keywords: ["severability"] },
  { id: "mfg-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "mfg-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...MANUFACTURING_ITEMS];

const template = createKenyaTemplate("manufacturing_agreement", ITEMS);

export default template;
