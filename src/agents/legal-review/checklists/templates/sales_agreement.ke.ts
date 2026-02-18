import { SALES_ITEMS, createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const SALES_AGREEMENT_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "parties-legal-names",
    title: "Parties - Full Legal Names",
    keywords: ["full legal name", "legal name", "buyer", "seller"],
  },
  {
    id: "parties-reg-numbers",
    title: "Parties - Registration Numbers",
    keywords: ["registration number", "company number"],
  },
  {
    id: "parties-addresses",
    title: "Parties - Addresses",
    keywords: ["address", "registered office"],
  },
  {
    id: "parties-signatories",
    title: "Parties - Authorized Signatories",
    keywords: ["authorized signatory", "executed by"],
  },
  {
    id: "definitions-interpretation",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  { id: "goods", title: "Description of Goods", keywords: ["goods", "product", "specification"] },
  {
    id: "goods-specifications",
    title: "Goods Specifications",
    keywords: ["specification", "technical specification"],
  },
  { id: "quantity", title: "Quantity", keywords: ["quantity", "units"] },
  {
    id: "goods-quality",
    title: "Quality Standards",
    keywords: ["quality standards", "merchantable quality", "quality"],
  },
  { id: "goods-samples", title: "Reference to Samples", keywords: ["sample", "specimen"] },
  {
    id: "price",
    title: "Purchase Price - Unit/Total",
    keywords: ["unit price", "purchase price", "total price"],
  },
  {
    id: "price-currency",
    title: "Purchase Price - Currency",
    keywords: ["currency", "kes", "usd"],
  },
  {
    id: "taxes",
    title: "VAT Inclusion/Exclusion",
    keywords: ["vat", "inclusive of vat", "exclusive of vat"],
  },
  { id: "payment-terms", title: "Payment Terms", keywords: ["payment terms", "due date"] },
  {
    id: "invoicing",
    title: "Payment Method and Bank Details",
    keywords: ["payment method", "bank details", "bank account"],
  },
  {
    id: "payment-late-interest",
    title: "Late Payment Interest",
    keywords: ["late payment interest", "default interest"],
  },
  {
    id: "payment-nonpayment",
    title: "Consequences of Non-Payment",
    keywords: ["non-payment", "failure to pay", "suspend delivery"],
  },
  {
    id: "delivery",
    title: "Delivery Terms",
    keywords: ["delivery location", "delivery date", "delivery method"],
  },
  {
    id: "delivery-costs",
    title: "Delivery Costs",
    keywords: ["delivery costs", "freight", "shipping cost"],
  },
  {
    id: "delivery-partial",
    title: "Partial Delivery",
    keywords: ["partial delivery", "instalment delivery"],
  },
  { id: "risk-transfer", title: "Transfer of Risk", keywords: ["risk passes", "transfer of risk"] },
  {
    id: "title-transfer",
    title: "Transfer of Title",
    keywords: ["title passes", "ownership passes", "transfer of title"],
  },
  {
    id: "retention-of-title",
    title: "Retention of Title",
    keywords: ["retention of title", "title remains with seller"],
  },
  {
    id: "inspection",
    title: "Inspection and Acceptance",
    keywords: ["inspection period", "acceptance criteria", "rejection procedure"],
  },
  {
    id: "product-warranties",
    title: "Warranties and Representations",
    keywords: ["warranty", "representation"],
  },
  {
    id: "title-warranty",
    title: "Implied Term - Right to Sell",
    keywords: ["right to sell", "good title"],
  },
  {
    id: "warranty-description",
    title: "Implied Term - Correspondence with Description",
    keywords: ["correspond with description", "as described"],
  },
  {
    id: "fitness-purpose",
    title: "Implied Term - Fitness for Purpose",
    keywords: ["fitness for purpose"],
  },
  {
    id: "warranty-merchantable",
    title: "Implied Term - Merchantable Quality",
    keywords: ["merchantable quality", "satisfactory quality"],
  },
  {
    id: "rejection-defects",
    title: "Returns and Remedies - Rejection",
    keywords: ["reject", "defective goods"],
  },
  {
    id: "repair-replacement",
    title: "Returns and Remedies - Repair/Replacement",
    keywords: ["repair", "replacement"],
  },
  { id: "refund-terms", title: "Returns and Remedies - Refund", keywords: ["refund"] },
  {
    id: "claims-time-limit",
    title: "Returns and Remedies - Claim Time Limits",
    keywords: ["time limit", "claims period"],
  },
  {
    id: "limitation-liability",
    title: "Limitation of Liability - Cap",
    keywords: ["liability cap", "limit of liability"],
  },
  {
    id: "consequential-loss",
    title: "Limitation of Liability - Indirect Loss Exclusion",
    keywords: ["indirect loss", "consequential loss"],
  },
  {
    id: "fraud-carveout",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  { id: "indemnity", title: "Indemnity", keywords: ["indemnity", "indemnify"] },
  {
    id: "indemnity-third-party",
    title: "Indemnity - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  {
    id: "indemnity-product-liability",
    title: "Indemnity - Product Liability Allocation",
    keywords: ["product liability"],
  },
  {
    id: "compliance-laws",
    title: "Compliance with Laws",
    keywords: ["compliance with laws", "applicable law"],
  },
  {
    id: "compliance-kebs",
    title: "Standards Compliance (KEBS)",
    keywords: ["kebs", "kenya bureau of standards", "standards compliance"],
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    keywords: ["force majeure", "events beyond control"],
  },
  {
    id: "force-majeure-notice",
    title: "Force Majeure Notice Requirements",
    keywords: ["force majeure notice", "notice requirement"],
  },
  { id: "insurance", title: "Insurance", keywords: ["insurance", "insures goods"] },
  {
    id: "insurance-transit",
    title: "Transit Insurance",
    keywords: ["transit insurance", "marine cargo insurance"],
  },
  {
    id: "termination-breach",
    title: "Termination for Breach",
    keywords: ["termination for breach", "material breach"],
  },
  {
    id: "termination-insolvency",
    title: "Termination for Insolvency",
    keywords: ["insolvency termination", "insolvent"],
  },
  {
    id: "termination-consequences",
    title: "Consequences of Termination",
    keywords: ["consequences of termination", "effect of termination"],
  },
  {
    id: "dispute-resolution",
    title: "Dispute Resolution",
    keywords: ["dispute resolution", "arbitration", "jurisdiction"],
  },
  {
    id: "governing-law",
    title: "Governing Law (Kenya)",
    keywords: ["governing law", "laws of kenya"],
  },
  { id: "mediation", title: "Mediation (Optional)", keywords: ["mediation"] },
  {
    id: "confidentiality",
    title: "Confidentiality",
    keywords: ["confidentiality", "confidential"],
  },
  { id: "notices", title: "Notices", keywords: ["notices", "notice delivery", "served"] },
  { id: "assignment", title: "Assignment", keywords: ["assignment", "assign"] },
  { id: "entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "amendment", title: "Amendment", keywords: ["amendment", "variation"] },
  { id: "severability", title: "Severability", keywords: ["severability"] },
];

const ITEMS: ChecklistTemplateItem[] = [...SALES_ITEMS, ...SALES_AGREEMENT_ITEMS];

const template = createKenyaTemplate("sales_agreement", ITEMS);

export default template;
