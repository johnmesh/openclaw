import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const DEBENTURE_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "deb-parties-lender",
    title: "Parties - Lender (Chargee)",
    keywords: ["lender", "chargee"],
  },
  {
    id: "deb-parties-borrower",
    title: "Parties - Borrower Company (Chargor)",
    keywords: ["borrower company", "chargor"],
  },
  {
    id: "deb-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "deb-obligations-principal",
    title: "Secured Obligations - Principal Debt",
    keywords: ["principal debt"],
  },
  {
    id: "deb-obligations-interest",
    title: "Secured Obligations - Interest",
    keywords: ["interest"],
  },
  { id: "deb-obligations-fees", title: "Secured Obligations - Fees", keywords: ["fees"] },
  {
    id: "deb-obligations-future",
    title: "Secured Obligations - Future Advances",
    keywords: ["future advances"],
  },
  { id: "deb-grant-fixed", title: "Grant of Security - Fixed Charge", keywords: ["fixed charge"] },
  {
    id: "deb-grant-floating",
    title: "Grant of Security - Floating Charge",
    keywords: ["floating charge"],
  },
  {
    id: "deb-grant-crystallisation",
    title: "Grant of Security - Crystallisation Clause",
    keywords: ["crystallisation clause"],
  },
  {
    id: "deb-grant-crystallisation-key",
    title: "Grant of Security - Crystallisation as Key Feature",
    keywords: ["crystallisation is a key feature"],
  },
  { id: "deb-assets-land", title: "Charged Assets - Land", keywords: ["land"] },
  { id: "deb-assets-equipment", title: "Charged Assets - Equipment", keywords: ["equipment"] },
  { id: "deb-assets-inventory", title: "Charged Assets - Inventory", keywords: ["inventory"] },
  { id: "deb-assets-bank", title: "Charged Assets - Bank Accounts", keywords: ["bank accounts"] },
  {
    id: "deb-assets-receivables",
    title: "Charged Assets - Receivables",
    keywords: ["receivables"],
  },
  {
    id: "deb-assets-ip",
    title: "Charged Assets - Intellectual Property",
    keywords: ["intellectual property"],
  },
  {
    id: "deb-assets-movable-mpsra",
    title: "Charged Assets - MPSRA Compliance for Movables",
    keywords: ["movable property security rights act"],
  },
  {
    id: "deb-registration-companies",
    title: "Registration and Perfection - Companies Registry Filing",
    keywords: ["companies registry", "companies act"],
  },
  {
    id: "deb-registration-collateral",
    title: "Registration and Perfection - Collateral Registry Filing",
    keywords: ["collateral registry"],
  },
  {
    id: "deb-registration-lands",
    title: "Registration and Perfection - Lands Registry Filing",
    keywords: ["lands registry"],
  },
  {
    id: "deb-registration-stamp-duty",
    title: "Registration and Perfection - Stamp Duty Compliance",
    keywords: ["stamp duty compliance"],
  },
  {
    id: "deb-registration-void-risk",
    title: "Registration and Perfection - Voidness Risk if Unregistered",
    keywords: ["void against a liquidator"],
  },
  {
    id: "deb-warranty-ownership",
    title: "Representations and Warranties - Ownership of Assets",
    keywords: ["ownership of assets"],
  },
  {
    id: "deb-warranty-no-encumbrances",
    title: "Representations and Warranties - No Prior Encumbrances",
    keywords: ["no prior encumbrances"],
  },
  {
    id: "deb-warranty-authority",
    title: "Representations and Warranties - Authority to Grant Charge",
    keywords: ["authority to grant charge"],
  },
  {
    id: "deb-warranty-solvency",
    title: "Representations and Warranties - Solvency",
    keywords: ["solvency"],
  },
  {
    id: "deb-covenant-positive-maintain",
    title: "Covenants - Positive - Maintain Assets",
    keywords: ["maintain assets"],
  },
  {
    id: "deb-covenant-positive-insure",
    title: "Covenants - Positive - Insure Assets",
    keywords: ["insure assets"],
  },
  {
    id: "deb-covenant-positive-financials",
    title: "Covenants - Positive - Financial Statements",
    keywords: ["provide financial statements"],
  },
  {
    id: "deb-covenant-negative-disposal",
    title: "Covenants - Negative - No Disposal of Charged Assets",
    keywords: ["no disposal of charged assets"],
  },
  {
    id: "deb-covenant-negative-further-charge",
    title: "Covenants - Negative - No Further Charges",
    keywords: ["no further charges without consent"],
  },
  {
    id: "deb-covenant-negative-change-control",
    title: "Covenants - Negative - No Change of Control",
    keywords: ["no change of control"],
  },
  { id: "deb-insurance-coverage", title: "Insurance - Coverage", keywords: ["insurance coverage"] },
  {
    id: "deb-insurance-loss-payee",
    title: "Insurance - Lender as Loss Payee",
    keywords: ["lender named as loss payee"],
  },
  {
    id: "deb-default-nonpayment",
    title: "Events of Default - Non-Payment",
    keywords: ["non-payment", "non payment"],
  },
  {
    id: "deb-default-insolvency",
    title: "Events of Default - Insolvency",
    keywords: ["insolvency"],
  },
  {
    id: "deb-default-covenant",
    title: "Events of Default - Breach of Covenants",
    keywords: ["breach of covenants"],
  },
  {
    id: "deb-default-cross",
    title: "Events of Default - Cross-Default",
    keywords: ["cross-default"],
  },
  {
    id: "deb-default-misrepresentation",
    title: "Events of Default - Misrepresentation",
    keywords: ["misrepresentation"],
  },
  {
    id: "deb-enforcement-receiver",
    title: "Enforcement - Appointment of Receiver",
    keywords: ["appointment of receiver"],
  },
  {
    id: "deb-enforcement-possession",
    title: "Enforcement - Take Possession",
    keywords: ["right to take possession"],
  },
  {
    id: "deb-enforcement-sale",
    title: "Enforcement - Sale of Assets",
    keywords: ["sale of assets"],
  },
  {
    id: "deb-enforcement-proceeds",
    title: "Enforcement - Application of Proceeds",
    keywords: ["application of proceeds"],
  },
  {
    id: "deb-enforcement-land-act",
    title: "Enforcement - Land Act Statutory Notices for Land",
    keywords: ["land act statutory notice requirements"],
  },
  {
    id: "deb-receiver-power",
    title: "Receiver Clause - Power to Appoint",
    keywords: ["power to appoint receiver"],
  },
  {
    id: "deb-receiver-powers",
    title: "Receiver Clause - Receiver Powers",
    keywords: ["receiver s powers"],
  },
  {
    id: "deb-receiver-agent",
    title: "Receiver Clause - Receiver as Agent of Company",
    keywords: ["receiver acts as agent of company"],
  },
  {
    id: "deb-crys-automatic-default",
    title: "Crystallisation - Automatic on Default",
    keywords: ["automatic crystallisation on default"],
  },
  {
    id: "deb-crys-insolvency",
    title: "Crystallisation - Upon Insolvency",
    keywords: ["crystallisation upon insolvency"],
  },
  {
    id: "deb-crys-notice",
    title: "Crystallisation - Lender Notice",
    keywords: ["lender notice crystallisation"],
  },
  {
    id: "deb-continuing-security",
    title: "Continuing Security - Until Full Repayment",
    keywords: ["remains in force until full repayment"],
  },
  { id: "deb-costs-legal", title: "Costs and Expenses - Legal Fees", keywords: ["legal fees"] },
  {
    id: "deb-costs-enforcement",
    title: "Costs and Expenses - Enforcement Costs",
    keywords: ["enforcement costs"],
  },
  {
    id: "deb-costs-recovery",
    title: "Costs and Expenses - Recovery Costs",
    keywords: ["recovery costs"],
  },
  {
    id: "deb-assignment-lender",
    title: "Assignment - Lender May Assign",
    keywords: ["lender may assign"],
  },
  {
    id: "deb-assignment-borrower",
    title: "Assignment - Borrower Restrictions",
    keywords: ["borrower restrictions"],
  },
  {
    id: "deb-release-conditions",
    title: "Release and Discharge - Conditions for Discharge",
    keywords: ["conditions for discharge"],
  },
  {
    id: "deb-release-filing",
    title: "Release and Discharge - Registry Filing",
    keywords: ["filing release at registries"],
  },
  { id: "deb-indemnity", title: "Indemnity", keywords: ["indemnity"] },
  {
    id: "deb-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "deb-dispute-courts",
    title: "Dispute Resolution - Kenyan Courts",
    keywords: ["kenyan courts"],
  },
  {
    id: "deb-boilerplate-entire",
    title: "Boilerplate - Entire Agreement",
    keywords: ["entire agreement"],
  },
  { id: "deb-boilerplate-amendment", title: "Boilerplate - Amendment", keywords: ["amendment"] },
  {
    id: "deb-boilerplate-severability",
    title: "Boilerplate - Severability",
    keywords: ["severability"],
  },
  { id: "deb-boilerplate-waiver", title: "Boilerplate - Waiver", keywords: ["waiver"] },
  {
    id: "deb-boilerplate-notices",
    title: "Boilerplate - Notices",
    keywords: ["notices", "notice"],
  },
];

const ITEMS: ChecklistTemplateItem[] = [...DEBENTURE_ITEMS];

const template = createKenyaTemplate("debenture", ITEMS);

export default template;
