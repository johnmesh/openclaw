import { createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const SECURITY_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "sec-parties-secured-party",
    title: "Parties - Secured Party (Lender)",
    keywords: ["secured party", "lender"],
  },
  {
    id: "sec-parties-grantor",
    title: "Parties - Grantor/Chargor",
    keywords: ["grantor", "chargor", "security provider"],
  },
  { id: "sec-parties-guarantor", title: "Parties - Guarantor", keywords: ["guarantor"] },
  {
    id: "sec-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "sec-obligations-description",
    title: "Secured Obligations - Description of Debt",
    keywords: ["description of secured debt"],
  },
  {
    id: "sec-obligations-principal",
    title: "Secured Obligations - Principal Amount",
    keywords: ["principal amount"],
  },
  {
    id: "sec-obligations-interest",
    title: "Secured Obligations - Interest",
    keywords: ["interest"],
  },
  { id: "sec-obligations-fees", title: "Secured Obligations - Fees", keywords: ["fees"] },
  {
    id: "sec-obligations-present-future",
    title: "Secured Obligations - Present and Future Obligations",
    keywords: ["present and future obligations"],
  },
  {
    id: "sec-grant-creation",
    title: "Grant of Security - Creation of Security Interest",
    keywords: ["creation of security interest"],
  },
  {
    id: "sec-grant-type",
    title: "Grant of Security - Type of Charge",
    keywords: ["fixed", "floating", "assignment"],
  },
  {
    id: "sec-grant-collateral-description",
    title: "Grant of Security - Collateral Description",
    keywords: ["description of collateral"],
  },
  { id: "sec-collateral-equipment", title: "Collateral - Equipment", keywords: ["equipment"] },
  { id: "sec-collateral-inventory", title: "Collateral - Inventory", keywords: ["inventory"] },
  {
    id: "sec-collateral-receivables",
    title: "Collateral - Receivables",
    keywords: ["receivables"],
  },
  { id: "sec-collateral-shares", title: "Collateral - Shares", keywords: ["shares"] },
  {
    id: "sec-collateral-bank-accounts",
    title: "Collateral - Bank Accounts",
    keywords: ["bank accounts"],
  },
  {
    id: "sec-collateral-ip",
    title: "Collateral - Intellectual Property",
    keywords: ["intellectual property"],
  },
  {
    id: "sec-collateral-mpsra",
    title: "Collateral - MPSRA Compliance for Movables",
    keywords: ["movable property security rights act"],
  },
  {
    id: "sec-perfection-collateral-registry",
    title: "Perfection - Collateral Registry Registration",
    keywords: ["collateral registry"],
  },
  {
    id: "sec-perfection-companies-registry",
    title: "Perfection - Companies Registry Registration",
    keywords: ["companies registry"],
  },
  {
    id: "sec-perfection-lands-registry",
    title: "Perfection - Lands Registry Registration",
    keywords: ["lands registry"],
  },
  {
    id: "sec-perfection-stamp-duty",
    title: "Perfection - Stamp Duty Compliance",
    keywords: ["stamp duty compliance"],
  },
  {
    id: "sec-warranty-ownership",
    title: "Representations - Ownership of Collateral",
    keywords: ["ownership of collateral"],
  },
  {
    id: "sec-warranty-no-encumbrances",
    title: "Representations - No Prior Encumbrances",
    keywords: ["no prior encumbrances"],
  },
  {
    id: "sec-warranty-authority",
    title: "Representations - Authority to Grant Security",
    keywords: ["authority to grant security"],
  },
  {
    id: "sec-warranty-validity",
    title: "Representations - Validity of Security Interest",
    keywords: ["validity of security interest"],
  },
  {
    id: "sec-covenant-positive-maintain",
    title: "Covenants - Positive - Maintain Collateral",
    keywords: ["maintain collateral"],
  },
  {
    id: "sec-covenant-positive-insure",
    title: "Covenants - Positive - Insure Collateral",
    keywords: ["insure collateral"],
  },
  {
    id: "sec-covenant-positive-taxes",
    title: "Covenants - Positive - Pay Taxes",
    keywords: ["pay taxes"],
  },
  {
    id: "sec-covenant-positive-financials",
    title: "Covenants - Positive - Financial Statements",
    keywords: ["provide financial statements"],
  },
  {
    id: "sec-covenant-negative-disposal",
    title: "Covenants - Negative - No Disposal of Collateral",
    keywords: ["no disposal of collateral"],
  },
  {
    id: "sec-covenant-negative-encumbrance",
    title: "Covenants - Negative - No Further Encumbrance",
    keywords: ["no further encumbrance"],
  },
  {
    id: "sec-covenant-negative-change-control",
    title: "Covenants - Negative - No Change of Control",
    keywords: ["no change of control"],
  },
  {
    id: "sec-insurance-mandatory",
    title: "Insurance - Mandatory Insurance",
    keywords: ["mandatory insurance"],
  },
  {
    id: "sec-insurance-assignment",
    title: "Insurance - Assignment of Proceeds",
    keywords: ["assignment of insurance proceeds"],
  },
  {
    id: "sec-insurance-loss-payee",
    title: "Insurance - Lender as Loss Payee",
    keywords: ["loss payee"],
  },
  {
    id: "sec-default-nonpayment",
    title: "Events of Default - Non-Payment",
    keywords: ["non-payment", "non payment"],
  },
  {
    id: "sec-default-covenant-breach",
    title: "Events of Default - Breach of Covenants",
    keywords: ["breach of covenants"],
  },
  {
    id: "sec-default-insolvency",
    title: "Events of Default - Insolvency",
    keywords: ["insolvency"],
  },
  {
    id: "sec-default-cross-default",
    title: "Events of Default - Cross-Default",
    keywords: ["cross-default"],
  },
  {
    id: "sec-default-misrepresentation",
    title: "Events of Default - Misrepresentation",
    keywords: ["misrepresentation"],
  },
  {
    id: "sec-enforcement-possession",
    title: "Enforcement Rights - Take Possession",
    keywords: ["right to take possession"],
  },
  {
    id: "sec-enforcement-sale",
    title: "Enforcement Rights - Sell Collateral",
    keywords: ["right to sell collateral"],
  },
  {
    id: "sec-enforcement-receiver",
    title: "Enforcement Rights - Receiver",
    keywords: ["appointment of receiver"],
  },
  {
    id: "sec-enforcement-proceeds",
    title: "Enforcement Rights - Application of Proceeds",
    keywords: ["application of proceeds"],
  },
  {
    id: "sec-enforcement-mpsra",
    title: "Enforcement Rights - MPSRA Compliance",
    keywords: ["movable property security rights act"],
  },
  {
    id: "sec-notice-default",
    title: "Notice Requirements - Default Notice",
    keywords: ["default notice"],
  },
  {
    id: "sec-notice-land-act",
    title: "Notice Requirements - Land Act Statutory Notice",
    keywords: ["statutory notice", "land act"],
  },
  {
    id: "sec-proceeds-priority",
    title: "Application of Proceeds - Order of Priority",
    keywords: ["order of priority"],
  },
  {
    id: "sec-proceeds-costs",
    title: "Application of Proceeds - Payment of Costs",
    keywords: ["payment of costs"],
  },
  {
    id: "sec-proceeds-secured-obligations",
    title: "Application of Proceeds - Repayment of Secured Obligations",
    keywords: ["repayment of secured obligations"],
  },
  {
    id: "sec-further-assurance",
    title: "Further Assurance - Execute Additional Documents",
    keywords: ["execute additional documents"],
  },
  {
    id: "sec-assignment-lender",
    title: "Assignment - Lender Right to Assign",
    keywords: ["lender s right to assign"],
  },
  {
    id: "sec-assignment-grantor-restrictions",
    title: "Assignment - Restrictions on Grantor",
    keywords: ["restrictions on grantor"],
  },
  {
    id: "sec-continuing-security",
    title: "Continuing Security - Until Full Discharge",
    keywords: ["security continues until full discharge"],
  },
  {
    id: "sec-continuing-future-advances",
    title: "Continuing Security - Future Advances",
    keywords: ["covers future advances"],
  },
  { id: "sec-costs-legal", title: "Costs and Expenses - Legal Fees", keywords: ["legal fees"] },
  {
    id: "sec-costs-registration",
    title: "Costs and Expenses - Registration Fees",
    keywords: ["registration fees"],
  },
  {
    id: "sec-costs-enforcement",
    title: "Costs and Expenses - Enforcement Costs",
    keywords: ["enforcement costs"],
  },
  { id: "sec-indemnity", title: "Indemnity", keywords: ["indemnity"] },
  {
    id: "sec-release-conditions",
    title: "Release and Discharge - Conditions for Release",
    keywords: ["conditions for release"],
  },
  {
    id: "sec-release-filing",
    title: "Release and Discharge - Filing Discharge Notice",
    keywords: ["filing discharge notice"],
  },
  { id: "sec-confidentiality", title: "Confidentiality", keywords: ["confidentiality"] },
  {
    id: "sec-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "sec-dispute-courts",
    title: "Dispute Resolution - Kenyan Courts",
    keywords: ["kenyan courts"],
  },
  {
    id: "sec-dispute-arbitration",
    title: "Dispute Resolution - Arbitration (if agreed)",
    keywords: ["arbitration"],
  },
  { id: "sec-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "sec-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "sec-severability", title: "Severability", keywords: ["severability"] },
  { id: "sec-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "sec-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...SECURITY_ITEMS];

const template = createKenyaTemplate("security_agreement", ITEMS);

export default template;
