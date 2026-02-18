import {
  CORPORATE_ITEMS,
  createKenyaTemplate,
  type ChecklistTemplateItem,
} from "../../shared.ke.js";

const DISTRIBUTION_ITEMS: ChecklistTemplateItem[] = [
  { id: "dist-parties", title: "Parties", keywords: ["supplier", "distributor", "parties"] },
  {
    id: "dist-parties-legal",
    title: "Parties - Legal Names",
    keywords: ["legal name", "full legal name"],
  },
  {
    id: "dist-parties-address",
    title: "Parties - Registered Addresses",
    keywords: ["registered address", "address"],
  },
  {
    id: "dist-parties-company",
    title: "Parties - Company Details",
    keywords: ["company details", "registration number"],
  },
  {
    id: "dist-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "dist-appointment",
    title: "Appointment of Distributor",
    keywords: ["appointment of distributor", "appoint distributor"],
  },
  {
    id: "dist-rights-grant",
    title: "Grant of Distribution Rights",
    keywords: ["distribution rights", "right to distribute"],
  },
  { id: "dist-territory", title: "Territory", keywords: ["territory"] },
  { id: "dist-products", title: "Products Covered", keywords: ["products covered", "products"] },
  {
    id: "dist-exclusivity",
    title: "Exclusivity / Non-Exclusivity",
    keywords: ["exclusive", "non-exclusive"],
  },
  {
    id: "dist-exclusivity-competition-act",
    title: "Exclusivity - Competition Act Compliance",
    keywords: ["competition act"],
  },
  {
    id: "dist-online-sales",
    title: "Online Sales Rights",
    keywords: ["online sales", "e-commerce"],
  },
  {
    id: "dist-resell-right",
    title: "Right to Resell",
    keywords: ["right to resell", "resale rights"],
  },
  {
    id: "dist-resell-restrictions",
    title: "Restrictions on Resale",
    keywords: ["restrictions on resale", "resale restrictions"],
  },
  { id: "dist-no-agency", title: "No Agency Relationship", keywords: ["no agency relationship"] },
  {
    id: "dist-no-bind",
    title: "No Authority to Bind Supplier",
    keywords: ["no authority to bind", "cannot bind supplier"],
  },
  {
    id: "dist-geo-limits",
    title: "Geographic Limits",
    keywords: ["geographic limits", "within territory"],
  },
  {
    id: "dist-cross-border",
    title: "Restrictions on Cross-Border Sales",
    keywords: ["cross-border sales", "cross border"],
  },
  {
    id: "dist-export-restrictions",
    title: "Export Restrictions",
    keywords: ["export restrictions"],
  },
  {
    id: "dist-passive-active",
    title: "Passive vs Active Sales",
    keywords: ["passive sales", "active sales"],
  },
  {
    id: "dist-commencement",
    title: "Commencement Date",
    keywords: ["commencement date", "effective date"],
  },
  { id: "dist-initial-term", title: "Initial Term", keywords: ["initial term"] },
  { id: "dist-renewal", title: "Renewal Provisions", keywords: ["renewal", "extension"] },
  {
    id: "dist-sales-targets",
    title: "Minimum Sales Targets",
    keywords: ["minimum sales target", "annual targets"],
  },
  {
    id: "dist-target-failure",
    title: "Consequences of Failure to Meet Targets",
    keywords: ["failure to meet targets", "target failure"],
  },
  {
    id: "dist-target-review",
    title: "Target Review Mechanism",
    keywords: ["review mechanism", "target review"],
  },
  {
    id: "dist-order-procedure",
    title: "Order Procedure",
    keywords: ["order procedure", "purchase order"],
  },
  {
    id: "dist-order-acceptance",
    title: "Acceptance of Orders",
    keywords: ["acceptance of orders", "order acceptance"],
  },
  { id: "dist-forecasting", title: "Forecasting", keywords: ["forecast", "forecasting"] },
  { id: "dist-lead-times", title: "Lead Times", keywords: ["lead time"] },
  { id: "dist-wholesale-pricing", title: "Wholesale Pricing", keywords: ["wholesale pricing"] },
  {
    id: "dist-discount-structure",
    title: "Discount Structure",
    keywords: ["discount structure", "discount"],
  },
  {
    id: "dist-price-changes",
    title: "Price Changes",
    keywords: ["price changes", "change in price"],
  },
  { id: "dist-payment-terms", title: "Payment Terms", keywords: ["payment terms", "due date"] },
  { id: "dist-payment-timelines", title: "Payment Timelines", keywords: ["payment timelines"] },
  { id: "dist-vat-treatment", title: "VAT Treatment", keywords: ["vat treatment"] },
  { id: "dist-currency", title: "Currency", keywords: ["currency"] },
  { id: "dist-delivery-terms", title: "Delivery Terms", keywords: ["delivery terms", "incoterms"] },
  {
    id: "dist-risk-transfer",
    title: "Transfer of Risk",
    keywords: ["risk transfer", "risk passes"],
  },
  {
    id: "dist-title-transfer",
    title: "Transfer of Title",
    keywords: ["title transfer", "ownership passes"],
  },
  { id: "dist-retention-title", title: "Retention of Title", keywords: ["retention of title"] },
  {
    id: "dist-sale-of-goods-alignment",
    title: "Delivery/Risk/Title Alignment with Sale of Goods Act",
    keywords: ["sale of goods act"],
  },
  {
    id: "dist-marketing-obligations",
    title: "Marketing Obligations",
    keywords: ["marketing obligations"],
  },
  { id: "dist-ad-standards", title: "Advertising Standards", keywords: ["advertising standards"] },
  {
    id: "dist-brand-guidelines",
    title: "Brand Usage Guidelines",
    keywords: ["brand usage", "brand guidelines"],
  },
  {
    id: "dist-marketing-approval",
    title: "Marketing Material Approval Rights",
    keywords: ["approval rights", "marketing materials"],
  },
  {
    id: "dist-trade-marks-act",
    title: "Trademark Protection under Trade Marks Act",
    keywords: ["trade marks act"],
  },
  { id: "dist-trademark-license", title: "Trademark License", keywords: ["trademark license"] },
  {
    id: "dist-ip-ownership",
    title: "IP Ownership",
    keywords: ["ip ownership", "intellectual property"],
  },
  {
    id: "dist-ip-use-restrictions",
    title: "IP Use Restrictions",
    keywords: ["restrictions on use", "ip restrictions"],
  },
  { id: "dist-ip-infringement", title: "IP Infringement Handling", keywords: ["ip infringement"] },
  {
    id: "dist-import-export",
    title: "Import/Export Compliance",
    keywords: ["import", "export compliance"],
  },
  {
    id: "dist-product-registration",
    title: "Product Registration",
    keywords: ["product registration"],
  },
  { id: "dist-comply-laws", title: "Compliance with Laws", keywords: ["compliance with laws"] },
  {
    id: "dist-kebs-standards-act",
    title: "KEBS Compliance under Standards Act",
    keywords: ["kebs", "standards act"],
  },
  {
    id: "dist-consumer-protection-act",
    title: "Consumer Protection Act Compliance",
    keywords: ["consumer protection act"],
  },
  { id: "dist-product-warranty", title: "Product Warranties", keywords: ["product warranty"] },
  {
    id: "dist-compliance-warranty",
    title: "Compliance Warranties",
    keywords: ["compliance warranty"],
  },
  {
    id: "dist-warranty-disclaimer",
    title: "Disclaimer of Additional Warranties",
    keywords: ["disclaimer of warranties", "additional warranties"],
  },
  {
    id: "dist-after-sales-support",
    title: "After-Sales Customer Support",
    keywords: ["customer support", "after-sales support"],
  },
  {
    id: "dist-warranty-claims",
    title: "Warranty Claim Handling",
    keywords: ["warranty claim handling"],
  },
  { id: "dist-returns-process", title: "Returns Process", keywords: ["returns process"] },
  {
    id: "dist-confidentiality",
    title: "Confidentiality",
    keywords: ["confidential information", "confidentiality"],
  },
  {
    id: "dist-conf-duration",
    title: "Confidentiality Duration",
    keywords: ["confidentiality duration"],
  },
  {
    id: "dist-conf-exceptions",
    title: "Confidentiality Exceptions",
    keywords: ["confidentiality exceptions"],
  },
  { id: "dist-non-compete", title: "Non-Compete", keywords: ["non-compete", "non compete"] },
  {
    id: "dist-non-solicit",
    title: "Non-Solicitation",
    keywords: ["non-solicitation", "non solicitation"],
  },
  {
    id: "dist-restrict-competing",
    title: "Restrictions on Competing Products",
    keywords: ["competing products"],
  },
  {
    id: "dist-competition-law",
    title: "Competition Law Compliance",
    keywords: ["competition law compliance"],
  },
  {
    id: "dist-restrictive-reasonable",
    title: "Reasonableness Requirement for Restrictions",
    keywords: ["reasonable to be enforceable", "reasonableness requirement"],
  },
  {
    id: "dist-indemnity-product",
    title: "Product Liability Indemnity",
    keywords: ["product liability indemnity"],
  },
  {
    id: "dist-indemnity-third-party",
    title: "Third-Party Claims Indemnity",
    keywords: ["third-party claims"],
  },
  {
    id: "dist-indemnity-ip",
    title: "IP Infringement Indemnity",
    keywords: ["ip infringement indemnity"],
  },
  { id: "dist-liability-cap", title: "Liability Cap", keywords: ["liability cap"] },
  {
    id: "dist-liability-indirect",
    title: "Exclusion of Indirect Losses",
    keywords: ["indirect loss", "consequential loss"],
  },
  {
    id: "dist-liability-fraud",
    title: "Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  {
    id: "dist-insurance",
    title: "Required Insurance",
    keywords: ["required coverage", "insurance"],
  },
  {
    id: "dist-insurance-product-liability",
    title: "Product Liability Insurance",
    keywords: ["product liability insurance"],
  },
  {
    id: "dist-insurance-public-liability",
    title: "Public Liability Insurance",
    keywords: ["public liability insurance"],
  },
  {
    id: "dist-insurance-proof",
    title: "Proof of Insurance",
    keywords: ["proof of insurance", "insurance certificate"],
  },
  {
    id: "dist-subdist-permission",
    title: "Sub-Distribution Permission",
    keywords: ["sub-distribution", "sub-distributor"],
  },
  {
    id: "dist-subdist-responsibility",
    title: "Responsibility for Sub-Distributors",
    keywords: ["responsibility for sub-distributors"],
  },
  {
    id: "dist-term-cause",
    title: "Termination for Cause",
    keywords: ["termination for cause", "material breach"],
  },
  { id: "dist-term-cure-period", title: "Termination - Cure Period", keywords: ["cure period"] },
  {
    id: "dist-term-convenience",
    title: "Termination for Convenience",
    keywords: ["termination for convenience"],
  },
  {
    id: "dist-term-insolvency",
    title: "Insolvency Termination",
    keywords: ["insolvency termination", "insolvent"],
  },
  {
    id: "dist-term-target-breach",
    title: "Termination for Breach of Targets",
    keywords: ["breach of targets", "failure to meet targets"],
  },
  {
    id: "dist-term-consequences",
    title: "Consequences of Termination",
    keywords: ["consequences of termination"],
  },
  {
    id: "dist-post-cease-trademark",
    title: "Post-Termination - Cease Trademark Use",
    keywords: ["cease use of trademarks"],
  },
  {
    id: "dist-post-return-conf",
    title: "Post-Termination - Return Confidential Information",
    keywords: ["return confidential information"],
  },
  {
    id: "dist-post-selloff",
    title: "Post-Termination - Sell-Off Period",
    keywords: ["sell-off period", "sell off period"],
  },
  {
    id: "dist-post-payments",
    title: "Post-Termination - Outstanding Payments",
    keywords: ["outstanding payments"],
  },
  { id: "dist-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  { id: "dist-assignment", title: "Assignment", keywords: ["assignment"] },
  {
    id: "dist-assignment-restrictions",
    title: "Assignment - Restrictions on Transfer",
    keywords: ["restrictions on transfer"],
  },
  { id: "dist-notices", title: "Notices", keywords: ["notices", "notice"] },
  { id: "dist-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "dist-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "dist-severability", title: "Severability", keywords: ["severability"] },
  { id: "dist-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "dist-governing-law", title: "Governing Law", keywords: ["governing law"] },
  {
    id: "dist-dispute-escalation",
    title: "Dispute Escalation",
    keywords: ["escalation mechanism"],
  },
  { id: "dist-dispute-mediation", title: "Dispute Mediation", keywords: ["mediation"] },
  {
    id: "dist-dispute-arb-courts",
    title: "Arbitration or Courts",
    keywords: ["arbitration", "courts"],
  },
];

const ITEMS: ChecklistTemplateItem[] = [...CORPORATE_ITEMS, ...DISTRIBUTION_ITEMS];

const template = createKenyaTemplate("distribution_agreement", ITEMS);

export default template;
