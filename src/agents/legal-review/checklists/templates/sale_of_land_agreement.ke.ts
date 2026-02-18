import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const SALE_OF_LAND_ITEMS: ChecklistTemplateItem[] = [
  { id: "land-parties-legal", title: "Parties - Full Legal Names", keywords: ["full legal names"] },
  {
    id: "land-parties-id",
    title: "Parties - ID/Passport Numbers",
    keywords: ["id/passport numbers", "passport numbers"],
  },
  { id: "land-parties-kra", title: "Parties - KRA PIN", keywords: ["kra pin"] },
  { id: "land-parties-addresses", title: "Parties - Addresses", keywords: ["addresses"] },
  {
    id: "land-parties-capacity",
    title: "Parties - Capacity",
    keywords: ["capacity", "individual", "company", "trust"],
  },
  { id: "land-recitals", title: "Recitals/Background", keywords: ["recitals", "background"] },
  {
    id: "land-property-title-number",
    title: "Property Description - Title Number",
    keywords: ["title number"],
  },
  {
    id: "land-property-lr-number",
    title: "Property Description - Land Reference Number",
    keywords: ["land reference number", "lr number"],
  },
  {
    id: "land-property-location",
    title: "Property Description - Location",
    keywords: ["location"],
  },
  {
    id: "land-property-size",
    title: "Property Description - Size/Acreage",
    keywords: ["size", "acreage"],
  },
  {
    id: "land-property-owner",
    title: "Property Description - Registered Owner Details",
    keywords: ["registered owner details"],
  },
  {
    id: "land-property-lra-match",
    title: "Property Description - Match Title (Land Registration Act)",
    keywords: ["land registration act"],
  },
  {
    id: "land-price-total",
    title: "Purchase Price - Total Consideration",
    keywords: ["total consideration"],
  },
  { id: "land-price-currency", title: "Purchase Price - Currency", keywords: ["currency"] },
  {
    id: "land-price-deposit",
    title: "Purchase Price - Deposit Amount",
    keywords: ["deposit amount"],
  },
  {
    id: "land-price-balance",
    title: "Purchase Price - Balance Payable",
    keywords: ["balance payable"],
  },
  {
    id: "land-payment-deposit-timeline",
    title: "Payment Terms - Deposit Timeline",
    keywords: ["deposit payment timeline"],
  },
  {
    id: "land-payment-balance-timeline",
    title: "Payment Terms - Balance Timeline",
    keywords: ["balance payment timeline"],
  },
  {
    id: "land-payment-escrow",
    title: "Payment Terms - Escrow Arrangements",
    keywords: ["escrow arrangements"],
  },
  {
    id: "land-payment-late",
    title: "Payment Terms - Late Payment Consequences",
    keywords: ["consequences of late payment"],
  },
  {
    id: "land-completion-date",
    title: "Completion - Completion Date/Timeline",
    keywords: ["completion timeline", "90 days"],
  },
  {
    id: "land-completion-place",
    title: "Completion - Place of Completion",
    keywords: ["place of completion"],
  },
  {
    id: "land-completion-docs",
    title: "Completion - Required Documents",
    keywords: ["documents required on completion"],
  },
  {
    id: "land-cp-lcb",
    title: "Conditions Precedent - Land Control Board Consent",
    keywords: ["land control board consent", "land control act"],
  },
  {
    id: "land-cp-spousal",
    title: "Conditions Precedent - Spousal Consent",
    keywords: ["spousal consent"],
  },
  {
    id: "land-cp-regulatory",
    title: "Conditions Precedent - Regulatory Approvals",
    keywords: ["regulatory approvals"],
  },
  {
    id: "land-cp-discharge-charge",
    title: "Conditions Precedent - Discharge of Charge",
    keywords: ["discharge of charge"],
  },
  {
    id: "land-cp-lcb-void-risk",
    title: "Conditions Precedent - LCB Consent Voidness Risk",
    keywords: ["transaction void", "failure to obtain land control board consent"],
  },
  {
    id: "land-possession-vacant",
    title: "Vacant Possession - Delivery",
    keywords: ["delivery of vacant possession"],
  },
  {
    id: "land-possession-tenants",
    title: "Vacant Possession - Tenant Removal",
    keywords: ["removal of tenants"],
  },
  {
    id: "land-warranty-title",
    title: "Representations and Warranties - Good Title",
    keywords: ["good title"],
  },
  {
    id: "land-warranty-no-encumbrances",
    title: "Representations and Warranties - No Encumbrances",
    keywords: ["no encumbrances"],
  },
  {
    id: "land-warranty-no-litigation",
    title: "Representations and Warranties - No Pending Litigation",
    keywords: ["no pending litigation"],
  },
  {
    id: "land-warranty-planning",
    title: "Representations and Warranties - Planning Law Compliance",
    keywords: ["compliance with planning laws"],
  },
  {
    id: "land-risk-transfer-date",
    title: "Risk and Insurance - Risk Transfer Date",
    keywords: ["risk transfer date"],
  },
  {
    id: "land-risk-insurance-before-completion",
    title: "Risk and Insurance - Pre-Completion Insurance Responsibility",
    keywords: ["insurance responsibility before completion"],
  },
  {
    id: "land-doc-original-title",
    title: "Completion Documents - Original Title",
    keywords: ["original title"],
  },
  {
    id: "land-doc-transfer",
    title: "Completion Documents - Transfer Instrument",
    keywords: ["transfer instrument"],
  },
  {
    id: "land-doc-rent-clearance",
    title: "Completion Documents - Land Rent Clearance Certificate",
    keywords: ["land rent clearance certificate"],
  },
  {
    id: "land-doc-rates-clearance",
    title: "Completion Documents - Rates Clearance Certificate",
    keywords: ["rates clearance certificate"],
  },
  {
    id: "land-doc-pin",
    title: "Completion Documents - PIN Certificates",
    keywords: ["pin certificates"],
  },
  {
    id: "land-doc-consents",
    title: "Completion Documents - Consent Documents",
    keywords: ["consent documents"],
  },
  {
    id: "land-stamp-duty-responsibility",
    title: "Stamp Duty - Payment Responsibility",
    keywords: ["responsibility for payment"],
  },
  {
    id: "land-stamp-duty-valuation",
    title: "Stamp Duty - Valuation Requirement",
    keywords: ["valuation requirement"],
  },
  {
    id: "land-stamp-duty-act",
    title: "Stamp Duty - Stamp Duty Act Compliance",
    keywords: ["stamp duty act"],
  },
  {
    id: "land-registration-lodgment",
    title: "Registration - Lodgment for Registration",
    keywords: ["lodgment for registration"],
  },
  {
    id: "land-registration-fees",
    title: "Registration - Registration Fees Responsibility",
    keywords: ["responsibility for registration fees"],
  },
  {
    id: "land-registration-lra",
    title: "Registration - Land Registration Act Compliance",
    keywords: ["land registration act"],
  },
  { id: "land-default-buyer", title: "Default - Buyer Default", keywords: ["buyer default"] },
  { id: "land-default-seller", title: "Default - Seller Default", keywords: ["seller default"] },
  {
    id: "land-default-notice",
    title: "Default - Notice of Breach",
    keywords: ["notice of breach"],
  },
  { id: "land-default-cure", title: "Default - Cure Period", keywords: ["cure period"] },
  {
    id: "land-remedy-forfeiture",
    title: "Remedies - Forfeiture of Deposit",
    keywords: ["forfeiture of deposit"],
  },
  {
    id: "land-remedy-specific-performance",
    title: "Remedies - Specific Performance",
    keywords: ["specific performance"],
  },
  {
    id: "land-remedy-refund",
    title: "Remedies - Refund of Deposit",
    keywords: ["refund of deposit"],
  },
  {
    id: "land-remedy-interest",
    title: "Remedies - Interest on Unpaid Sums",
    keywords: ["interest on unpaid sums"],
  },
  { id: "land-indemnity-breach", title: "Indemnity - Breach", keywords: ["indemnity for breach"] },
  {
    id: "land-indemnity-misrepresentation",
    title: "Indemnity - Misrepresentation",
    keywords: ["liability for misrepresentation"],
  },
  {
    id: "land-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "land-dispute-mediation",
    title: "Dispute Resolution - Mediation",
    keywords: ["mediation"],
  },
  {
    id: "land-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  { id: "land-force-majeure", title: "Force Majeure (Optional)", keywords: ["force majeure"] },
  {
    id: "land-assignment-restriction",
    title: "Assignment - Restriction Before Completion",
    keywords: ["restriction on transfer of interest before completion"],
  },
  { id: "land-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  {
    id: "land-amendment-written",
    title: "Amendment - Written Variation Requirement",
    keywords: ["written variation requirement"],
  },
  { id: "land-severability", title: "Severability", keywords: ["severability"] },
  { id: "land-waiver", title: "Waiver", keywords: ["waiver"] },
  {
    id: "land-notices-method",
    title: "Notices - Method of Service",
    keywords: ["method of service"],
  },
  {
    id: "land-notices-addresses",
    title: "Notices - Addresses for Notice",
    keywords: ["addresses for notice"],
  },
];

const ITEMS: ChecklistTemplateItem[] = [...SALE_OF_LAND_ITEMS];

const template = createKenyaTemplate("sale_of_land_agreement", ITEMS);

export default template;
