import { createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const MORTGAGE_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "mtg-parties-chargee",
    title: "Parties - Lender (Chargee)",
    keywords: ["lender", "chargee"],
  },
  {
    id: "mtg-parties-chargor",
    title: "Parties - Borrower (Chargor)",
    keywords: ["borrower", "chargor"],
  },
  { id: "mtg-parties-guarantor", title: "Parties - Guarantor", keywords: ["guarantor"] },
  { id: "mtg-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "mtg-parties-id-reg",
    title: "Parties - ID/Company Registration",
    keywords: ["id", "company registration details"],
  },
  { id: "mtg-parties-kra", title: "Parties - KRA PIN", keywords: ["kra pin"] },
  {
    id: "mtg-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "mtg-loan-principal",
    title: "Loan Details - Principal Amount",
    keywords: ["principal amount"],
  },
  { id: "mtg-loan-purpose", title: "Loan Details - Purpose", keywords: ["purpose of loan"] },
  {
    id: "mtg-loan-disbursement",
    title: "Loan Details - Disbursement Terms",
    keywords: ["disbursement terms"],
  },
  {
    id: "mtg-loan-account",
    title: "Loan Details - Account Details",
    keywords: ["loan account details"],
  },
  {
    id: "mtg-interest-rate",
    title: "Interest - Rate (Fixed/Variable)",
    keywords: ["interest rate", "fixed", "variable"],
  },
  {
    id: "mtg-interest-default",
    title: "Interest - Default Interest",
    keywords: ["default interest"],
  },
  {
    id: "mtg-interest-calculation",
    title: "Interest - Calculation Method",
    keywords: ["interest calculation method"],
  },
  {
    id: "mtg-interest-review",
    title: "Interest - Review Clause",
    keywords: ["interest review clause"],
  },
  {
    id: "mtg-repay-schedule",
    title: "Repayment Terms - Schedule",
    keywords: ["repayment schedule"],
  },
  {
    id: "mtg-repay-instalments",
    title: "Repayment Terms - Instalment Amounts",
    keywords: ["instalment amounts"],
  },
  {
    id: "mtg-repay-prepayment",
    title: "Repayment Terms - Prepayment Rights",
    keywords: ["prepayment rights"],
  },
  {
    id: "mtg-repay-early-penalty",
    title: "Repayment Terms - Early Repayment Penalties",
    keywords: ["early repayment penalties"],
  },
  {
    id: "mtg-security-property",
    title: "Security - Charged Property Description",
    keywords: ["charged property", "title number"],
  },
  {
    id: "mtg-security-nature",
    title: "Security - Nature of Security (Legal Charge)",
    keywords: ["legal charge"],
  },
  {
    id: "mtg-security-registration",
    title: "Security - Registration Details",
    keywords: ["registration details"],
  },
  {
    id: "mtg-security-lra",
    title: "Security - Land Registration Act Compliance",
    keywords: ["land registration act"],
  },
  {
    id: "mtg-warranty-title",
    title: "Representations and Warranties - Good Title",
    keywords: ["good title"],
  },
  {
    id: "mtg-warranty-encumbrances",
    title: "Representations and Warranties - No Encumbrances",
    keywords: ["no encumbrances"],
  },
  {
    id: "mtg-warranty-authority",
    title: "Representations and Warranties - Authority",
    keywords: ["authority to enter agreement"],
  },
  {
    id: "mtg-warranty-litigation",
    title: "Representations and Warranties - No Pending Litigation",
    keywords: ["no pending litigation"],
  },
  {
    id: "mtg-covenant-payment",
    title: "Covenants by Borrower - Payment Covenant",
    keywords: ["payment covenant"],
  },
  {
    id: "mtg-covenant-maintenance",
    title: "Covenants by Borrower - Property Maintenance",
    keywords: ["maintenance of property"],
  },
  {
    id: "mtg-covenant-insurance",
    title: "Covenants by Borrower - Insurance of Property",
    keywords: ["insurance of property"],
  },
  {
    id: "mtg-covenant-compliance",
    title: "Covenants by Borrower - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "mtg-covenant-rates-rent",
    title: "Covenants by Borrower - Rates and Rent",
    keywords: ["payment of land rates and rent"],
  },
  {
    id: "mtg-insurance-mandatory",
    title: "Insurance - Mandatory Property Insurance",
    keywords: ["mandatory property insurance"],
  },
  {
    id: "mtg-insurance-insurer-approval",
    title: "Insurance - Insurer Approval",
    keywords: ["insurer approval"],
  },
  {
    id: "mtg-insurance-proceeds-assignment",
    title: "Insurance - Assignment of Proceeds",
    keywords: ["assignment of insurance proceeds"],
  },
  {
    id: "mtg-default-nonpayment",
    title: "Events of Default - Non-Payment",
    keywords: ["non-payment"],
  },
  {
    id: "mtg-default-breach",
    title: "Events of Default - Breach of Covenants",
    keywords: ["breach of covenants"],
  },
  {
    id: "mtg-default-insolvency",
    title: "Events of Default - Insolvency",
    keywords: ["insolvency"],
  },
  {
    id: "mtg-default-misrepresentation",
    title: "Events of Default - Misrepresentation",
    keywords: ["misrepresentation"],
  },
  {
    id: "mtg-default-security-deterioration",
    title: "Events of Default - Deterioration of Security",
    keywords: ["deterioration of security"],
  },
  {
    id: "mtg-remedy-90day-notice",
    title: "Remedies on Default - 90-Day Statutory Notice (Land Act)",
    keywords: ["90-day notice", "land act"],
  },
  {
    id: "mtg-remedy-sale",
    title: "Remedies on Default - Right of Sale",
    keywords: ["right of sale"],
  },
  {
    id: "mtg-remedy-receiver",
    title: "Remedies on Default - Appointment of Receiver",
    keywords: ["appointment of receiver"],
  },
  {
    id: "mtg-remedy-foreclosure",
    title: "Remedies on Default - Foreclosure",
    keywords: ["foreclosure"],
  },
  {
    id: "mtg-remedy-possession",
    title: "Remedies on Default - Entry into Possession",
    keywords: ["entry into possession"],
  },
  {
    id: "mtg-remedy-strict-notice",
    title: "Remedies on Default - Strict Statutory Notice Compliance",
    keywords: ["strict compliance with statutory notice requirements"],
  },
  {
    id: "mtg-notice-90day",
    title: "Statutory Notices - 90-Day Default Notice",
    keywords: ["90-day default notice"],
  },
  {
    id: "mtg-notice-40day",
    title: "Statutory Notices - 40-Day Intention to Sell",
    keywords: ["40-day notice of intention to sell"],
  },
  {
    id: "mtg-notice-auction",
    title: "Statutory Notices - Auction Procedures",
    keywords: ["auction procedures"],
  },
  {
    id: "mtg-notice-land-act",
    title: "Statutory Notices - Land Act Requirement",
    keywords: ["required under the land act"],
  },
  {
    id: "mtg-receiver-appointment",
    title: "Receiver Clause - Appointment",
    keywords: ["appointment of receiver"],
  },
  { id: "mtg-receiver-powers", title: "Receiver Clause - Powers", keywords: ["receiver powers"] },
  {
    id: "mtg-further-assurance",
    title: "Further Assurance - Execute Additional Documents",
    keywords: ["execute additional documents"],
  },
  { id: "mtg-costs-legal", title: "Costs and Expenses - Legal Fees", keywords: ["legal fees"] },
  {
    id: "mtg-costs-valuation",
    title: "Costs and Expenses - Valuation Fees",
    keywords: ["valuation fees"],
  },
  {
    id: "mtg-costs-enforcement",
    title: "Costs and Expenses - Enforcement Costs",
    keywords: ["enforcement costs"],
  },
  {
    id: "mtg-assignment-lender",
    title: "Assignment - Lender Right to Assign",
    keywords: ["lender right to assign loan"],
  },
  {
    id: "mtg-assignment-borrower",
    title: "Assignment - Borrower Restrictions",
    keywords: ["borrower restrictions"],
  },
  {
    id: "mtg-guarantee-obligations",
    title: "Guarantee - Guarantor Obligations",
    keywords: ["guarantor obligations"],
  },
  { id: "mtg-guarantee-indemnity", title: "Guarantee - Indemnity", keywords: ["indemnity"] },
  {
    id: "mtg-guarantee-continuing",
    title: "Guarantee - Continuing Security",
    keywords: ["continuing security"],
  },
  {
    id: "mtg-stamp-duty-payment",
    title: "Stamp Duty - Payment Responsibility",
    keywords: ["payment responsibility"],
  },
  {
    id: "mtg-stamp-duty-act",
    title: "Stamp Duty - Stamp Duty Act Compliance",
    keywords: ["stamp duty act"],
  },
  {
    id: "mtg-registration-charge",
    title: "Registration - Registration of Charge",
    keywords: ["registration of charge"],
  },
  {
    id: "mtg-registration-lands-registry",
    title: "Registration - Filing at Lands Registry",
    keywords: ["filing at lands registry"],
  },
  {
    id: "mtg-registration-companies-act",
    title: "Registration - Companies Act Charge Registration",
    keywords: ["companies act"],
  },
  {
    id: "mtg-variation-amendment",
    title: "Variation - Amendment Rights",
    keywords: ["amendment rights"],
  },
  {
    id: "mtg-variation-interest",
    title: "Variation - Interest Rate Changes",
    keywords: ["interest rate changes"],
  },
  {
    id: "mtg-discharge-conditions",
    title: "Discharge - Conditions for Release",
    keywords: ["conditions for release of charge"],
  },
  {
    id: "mtg-discharge-instrument",
    title: "Discharge - Discharge Instrument",
    keywords: ["discharge instrument"],
  },
  { id: "mtg-indemnity", title: "Indemnity", keywords: ["indemnity"] },
  {
    id: "mtg-liability-limitation",
    title: "Limitation of Liability (If Applicable)",
    keywords: ["limitation of liability"],
  },
  { id: "mtg-force-majeure", title: "Force Majeure (Optional)", keywords: ["force majeure"] },
  {
    id: "mtg-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "mtg-dispute-courts",
    title: "Dispute Resolution - Courts of Kenya",
    keywords: ["courts of kenya"],
  },
  { id: "mtg-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "mtg-severability", title: "Severability", keywords: ["severability"] },
  { id: "mtg-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "mtg-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...MORTGAGE_ITEMS];

const template = createKenyaTemplate("mortgage_agreement", ITEMS);

export default template;
