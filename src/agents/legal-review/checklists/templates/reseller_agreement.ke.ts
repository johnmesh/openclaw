import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const RESELLER_ITEMS: ChecklistTemplateItem[] = [
  { id: "res-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "res-parties-registration",
    title: "Parties - Registration Numbers",
    keywords: ["registration numbers"],
  },
  {
    id: "res-parties-addresses",
    title: "Parties - Addresses",
    keywords: ["addresses", "registered address"],
  },
  {
    id: "res-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "res-appointment-clause",
    title: "Appointment of Reseller - Appointment Clause",
    keywords: ["appointment clause"],
  },
  {
    id: "res-appointment-exclusivity",
    title: "Appointment of Reseller - Exclusivity",
    keywords: ["non-exclusive", "exclusive status"],
  },
  {
    id: "res-appointment-territory",
    title: "Appointment of Reseller - Territory",
    keywords: ["territory"],
  },
  {
    id: "res-appointment-products",
    title: "Appointment of Reseller - Products Covered",
    keywords: ["products covered"],
  },
  {
    id: "res-appointment-competition-act",
    title: "Appointment of Reseller - Competition Act Compliance",
    keywords: ["competition act"],
  },
  {
    id: "res-relationship-independent",
    title: "Nature of Relationship - Independent Contractor",
    keywords: ["independent contractor status"],
  },
  {
    id: "res-relationship-no-agency",
    title: "Nature of Relationship - No Agency",
    keywords: ["no agency relationship"],
  },
  {
    id: "res-relationship-no-bind",
    title: "Nature of Relationship - No Authority to Bind Supplier",
    keywords: ["no authority to bind supplier"],
  },
  {
    id: "res-rights-market-resell",
    title: "Scope of Rights - Right to Market and Resell",
    keywords: ["right to market and resell"],
  },
  {
    id: "res-rights-resale-restrictions",
    title: "Scope of Rights - Resale Restrictions",
    keywords: ["restrictions on resale"],
  },
  {
    id: "res-rights-online",
    title: "Scope of Rights - Online Sales Rights",
    keywords: ["online sales rights"],
  },
  {
    id: "res-rights-channel",
    title: "Scope of Rights - Channel Restrictions",
    keywords: ["channel restrictions"],
  },
  {
    id: "res-pricing-wholesale",
    title: "Pricing and Discounts - Wholesale Pricing",
    keywords: ["wholesale pricing"],
  },
  {
    id: "res-pricing-discount",
    title: "Pricing and Discounts - Discount Structure",
    keywords: ["discount structure"],
  },
  {
    id: "res-pricing-adjustment",
    title: "Pricing and Discounts - Price Adjustment Rights",
    keywords: ["price adjustment rights"],
  },
  {
    id: "res-pricing-resale-price",
    title: "Pricing and Discounts - Recommended Resale Price",
    keywords: ["recommended resale price", "price fixing"],
  },
  {
    id: "res-orders-procedure",
    title: "Orders and Payment - Order Procedure",
    keywords: ["order procedure"],
  },
  {
    id: "res-orders-acceptance",
    title: "Orders and Payment - Acceptance of Orders",
    keywords: ["acceptance of orders"],
  },
  {
    id: "res-orders-payment",
    title: "Orders and Payment - Payment Terms",
    keywords: ["payment terms"],
  },
  {
    id: "res-orders-vat",
    title: "Orders and Payment - VAT Treatment",
    keywords: ["vat treatment"],
  },
  {
    id: "res-orders-late-interest",
    title: "Orders and Payment - Late Payment Interest",
    keywords: ["late payment interest"],
  },
  {
    id: "res-delivery-terms",
    title: "Delivery and Risk - Delivery Terms",
    keywords: ["delivery terms"],
  },
  {
    id: "res-delivery-risk",
    title: "Delivery and Risk - Transfer of Risk",
    keywords: ["transfer of risk"],
  },
  {
    id: "res-delivery-title",
    title: "Delivery and Risk - Transfer of Title",
    keywords: ["transfer of title"],
  },
  {
    id: "res-delivery-retention",
    title: "Delivery and Risk - Retention of Title",
    keywords: ["retention of title"],
  },
  {
    id: "res-marketing-trademarks",
    title: "Marketing and Branding - Use of Trademarks",
    keywords: ["use of trademarks"],
  },
  {
    id: "res-marketing-brand-guidelines",
    title: "Marketing and Branding - Branding Guidelines",
    keywords: ["branding guidelines"],
  },
  {
    id: "res-marketing-approvals",
    title: "Marketing and Branding - Advertising Approvals",
    keywords: ["advertising approvals"],
  },
  {
    id: "res-marketing-promotions",
    title: "Marketing and Branding - Promotional Obligations",
    keywords: ["promotional obligations"],
  },
  {
    id: "res-marketing-trade-marks-act",
    title: "Marketing and Branding - Trade Marks Act Protection",
    keywords: ["trade marks act", "protect trademarks"],
  },
  {
    id: "res-ip-license",
    title: "Intellectual Property - License to Use IP",
    keywords: ["license to use ip"],
  },
  {
    id: "res-ip-no-transfer",
    title: "Intellectual Property - No Ownership Transfer",
    keywords: ["no ownership transfer"],
  },
  {
    id: "res-ip-infringement-reporting",
    title: "Intellectual Property - Infringement Reporting",
    keywords: ["ip infringement reporting"],
  },
  {
    id: "res-ip-misuse",
    title: "Intellectual Property - Misuse Restrictions",
    keywords: ["ip misuse restrictions"],
  },
  {
    id: "res-support-warranty",
    title: "Customer Support and After-Sales - Warranty Handling",
    keywords: ["warranty handling"],
  },
  {
    id: "res-support-complaints",
    title: "Customer Support and After-Sales - Customer Complaints",
    keywords: ["customer complaints"],
  },
  {
    id: "res-support-technical",
    title: "Customer Support and After-Sales - Technical Support",
    keywords: ["technical support obligations"],
  },
  {
    id: "res-warranty-product",
    title: "Warranties - Product Warranty Terms",
    keywords: ["product warranty terms"],
  },
  {
    id: "res-warranty-compliance",
    title: "Warranties - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "res-warranty-disclaimer",
    title: "Warranties - Disclaimer of Additional Warranties",
    keywords: ["disclaimer of additional warranties"],
  },
  {
    id: "res-laws-consumer",
    title: "Compliance with Laws - Consumer Protection Act",
    keywords: ["consumer protection act", "consumer protection compliance"],
  },
  {
    id: "res-laws-regulatory",
    title: "Compliance with Laws - Regulatory Approvals",
    keywords: ["regulatory approvals"],
  },
  {
    id: "res-laws-data-protection",
    title: "Compliance with Laws - Data Protection Act",
    keywords: ["data protection act"],
  },
  {
    id: "res-conf-info",
    title: "Confidentiality - Confidential Information",
    keywords: ["confidential information"],
  },
  { id: "res-conf-duration", title: "Confidentiality - Duration", keywords: ["duration"] },
  { id: "res-conf-exceptions", title: "Confidentiality - Exceptions", keywords: ["exceptions"] },
  {
    id: "res-restrictive-during",
    title: "Non-Compete/Restrictions - During Term",
    keywords: ["restrictions during term"],
  },
  {
    id: "res-restrictive-nonsolicit",
    title: "Non-Compete/Restrictions - Non-Solicitation",
    keywords: ["non-solicitation"],
  },
  {
    id: "res-restrictive-reasonable",
    title: "Non-Compete/Restrictions - Reasonableness",
    keywords: ["reasonableness requirement", "overbroad restrictions"],
  },
  {
    id: "res-indemnity-product",
    title: "Indemnity - Product Liability",
    keywords: ["product liability indemnity"],
  },
  {
    id: "res-indemnity-third-party",
    title: "Indemnity - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  {
    id: "res-indemnity-regulatory",
    title: "Indemnity - Regulatory Fines",
    keywords: ["regulatory fines"],
  },
  {
    id: "res-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "res-liability-indirect",
    title: "Limitation of Liability - Indirect Loss Exclusion",
    keywords: ["exclusion of indirect loss", "indirect loss"],
  },
  {
    id: "res-liability-fraud",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  {
    id: "res-insurance-public",
    title: "Insurance - Public Liability Insurance",
    keywords: ["public liability insurance"],
  },
  {
    id: "res-insurance-product",
    title: "Insurance - Product Liability Insurance",
    keywords: ["product liability insurance"],
  },
  { id: "res-term-initial", title: "Term - Initial Term", keywords: ["initial term"] },
  { id: "res-term-renewal", title: "Term - Renewal", keywords: ["renewal"] },
  {
    id: "res-termination-breach",
    title: "Termination - Breach",
    keywords: ["termination for breach"],
  },
  { id: "res-termination-cure", title: "Termination - Cure Period", keywords: ["cure period"] },
  { id: "res-termination-insolvency", title: "Termination - Insolvency", keywords: ["insolvency"] },
  {
    id: "res-termination-convenience",
    title: "Termination - Convenience",
    keywords: ["termination for convenience"],
  },
  {
    id: "res-consequence-cease-trademark",
    title: "Consequences of Termination - Cease Trademark Use",
    keywords: ["cease use of trademarks"],
  },
  {
    id: "res-consequence-return-confidential",
    title: "Consequences of Termination - Return Confidential Information",
    keywords: ["return of confidential information"],
  },
  {
    id: "res-consequence-outstanding-payments",
    title: "Consequences of Termination - Outstanding Payments",
    keywords: ["outstanding payments"],
  },
  {
    id: "res-consequence-selloff",
    title: "Consequences of Termination - Sell-Off Period",
    keywords: ["sell-off period", "sell off period"],
  },
  {
    id: "res-assignment-restrictions",
    title: "Assignment - Transfer Restrictions",
    keywords: ["restrictions on transfer"],
  },
  { id: "res-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  {
    id: "res-dispute-escalation",
    title: "Dispute Resolution - Escalation",
    keywords: ["escalation"],
  },
  { id: "res-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "res-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  {
    id: "res-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  { id: "res-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "res-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "res-severability", title: "Severability", keywords: ["severability"] },
  { id: "res-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "res-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...RESELLER_ITEMS];

const template = createKenyaTemplate("reseller_agreement", ITEMS);

export default template;
