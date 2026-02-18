import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const LOAN_ITEMS: ChecklistTemplateItem[] = [
  { id: "loan-parties-lender", title: "Parties - Lender", keywords: ["lender"] },
  { id: "loan-parties-borrower", title: "Parties - Borrower", keywords: ["borrower"] },
  { id: "loan-parties-guarantor", title: "Parties - Guarantor", keywords: ["guarantor"] },
  { id: "loan-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "loan-parties-id-reg",
    title: "Parties - Registration/ID",
    keywords: ["registration numbers", "id"],
  },
  { id: "loan-parties-kra", title: "Parties - KRA PIN", keywords: ["kra pin"] },
  {
    id: "loan-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "loan-amount-principal",
    title: "Loan Amount - Principal Amount",
    keywords: ["principal amount"],
  },
  { id: "loan-amount-purpose", title: "Loan Amount - Purpose", keywords: ["purpose of loan"] },
  {
    id: "loan-amount-disbursement",
    title: "Loan Amount - Disbursement Conditions",
    keywords: ["disbursement conditions"],
  },
  {
    id: "loan-amount-drawdown",
    title: "Loan Amount - Drawdown Mechanics",
    keywords: ["drawdown mechanics"],
  },
  {
    id: "loan-interest-rate",
    title: "Interest - Rate (Fixed/Variable)",
    keywords: ["interest rate", "fixed", "variable"],
  },
  {
    id: "loan-interest-default-rate",
    title: "Interest - Default Interest Rate",
    keywords: ["default interest rate"],
  },
  {
    id: "loan-interest-calculation",
    title: "Interest - Calculation Method",
    keywords: ["interest calculation method"],
  },
  {
    id: "loan-interest-review",
    title: "Interest - Review Mechanism",
    keywords: ["interest review mechanism"],
  },
  {
    id: "loan-repay-schedule",
    title: "Repayment Terms - Schedule",
    keywords: ["repayment schedule"],
  },
  {
    id: "loan-repay-instalments",
    title: "Repayment Terms - Instalments",
    keywords: ["instalments"],
  },
  {
    id: "loan-repay-maturity",
    title: "Repayment Terms - Maturity Date",
    keywords: ["maturity date"],
  },
  {
    id: "loan-repay-prepayment",
    title: "Repayment Terms - Prepayment Rights",
    keywords: ["prepayment rights"],
  },
  {
    id: "loan-repay-early-penalty",
    title: "Repayment Terms - Early Repayment Penalties",
    keywords: ["early repayment penalties"],
  },
  {
    id: "loan-security-description",
    title: "Security - Description",
    keywords: ["description of security"],
  },
  {
    id: "loan-security-charge-land",
    title: "Security - Charge over Land",
    keywords: ["charge over land"],
  },
  { id: "loan-security-debenture", title: "Security - Debenture", keywords: ["debenture"] },
  {
    id: "loan-security-personal-guarantee",
    title: "Security - Personal Guarantee",
    keywords: ["personal guarantee"],
  },
  {
    id: "loan-security-assignment-receivables",
    title: "Security - Assignment of Receivables",
    keywords: ["assignment of receivables"],
  },
  {
    id: "loan-security-land-compliance",
    title: "Security - Land Act/Land Registration Act Compliance",
    keywords: ["land act", "land registration act"],
  },
  {
    id: "loan-cp-security-docs",
    title: "Conditions Precedent - Security Documents",
    keywords: ["execution of security documents"],
  },
  {
    id: "loan-cp-board-resolutions",
    title: "Conditions Precedent - Board Resolutions",
    keywords: ["board resolutions"],
  },
  {
    id: "loan-cp-regulatory",
    title: "Conditions Precedent - Regulatory Approvals",
    keywords: ["regulatory approvals"],
  },
  {
    id: "loan-cp-insurance",
    title: "Conditions Precedent - Insurance Arrangements",
    keywords: ["insurance arrangements"],
  },
  {
    id: "loan-warranty-authority",
    title: "Representations and Warranties - Authority to Borrow",
    keywords: ["authority to borrow"],
  },
  {
    id: "loan-warranty-no-litigation",
    title: "Representations and Warranties - No Litigation",
    keywords: ["no litigation"],
  },
  {
    id: "loan-warranty-solvency",
    title: "Representations and Warranties - Financial Solvency",
    keywords: ["financial solvency"],
  },
  {
    id: "loan-warranty-no-law-breach",
    title: "Representations and Warranties - No Breach of Laws",
    keywords: ["no breach of laws"],
  },
  {
    id: "loan-covenant-positive-payment",
    title: "Covenants - Positive - Pay Instalments",
    keywords: ["pay instalments"],
  },
  {
    id: "loan-covenant-positive-insurance",
    title: "Covenants - Positive - Maintain Insurance",
    keywords: ["maintain insurance"],
  },
  {
    id: "loan-covenant-positive-records",
    title: "Covenants - Positive - Maintain Financial Records",
    keywords: ["maintain financial records"],
  },
  {
    id: "loan-covenant-negative-borrowing",
    title: "Covenants - Negative - No Additional Borrowing",
    keywords: ["no additional borrowing without consent"],
  },
  {
    id: "loan-covenant-negative-asset-disposal",
    title: "Covenants - Negative - No Asset Disposal",
    keywords: ["no asset disposal"],
  },
  {
    id: "loan-covenant-negative-change-control",
    title: "Covenants - Negative - No Change of Control",
    keywords: ["no change of control"],
  },
  {
    id: "loan-default-nonpayment",
    title: "Events of Default - Non-Payment",
    keywords: ["non-payment", "non payment"],
  },
  {
    id: "loan-default-covenant-breach",
    title: "Events of Default - Breach of Covenant",
    keywords: ["breach of covenant"],
  },
  {
    id: "loan-default-insolvency",
    title: "Events of Default - Insolvency",
    keywords: ["insolvency"],
  },
  {
    id: "loan-default-misrepresentation",
    title: "Events of Default - Misrepresentation",
    keywords: ["misrepresentation"],
  },
  {
    id: "loan-default-cross-default",
    title: "Events of Default - Cross-Default",
    keywords: ["cross-default"],
  },
  {
    id: "loan-remedy-acceleration",
    title: "Remedies on Default - Acceleration",
    keywords: ["acceleration of loan"],
  },
  {
    id: "loan-remedy-enforcement-security",
    title: "Remedies on Default - Enforcement of Security",
    keywords: ["enforcement of security"],
  },
  {
    id: "loan-remedy-receiver",
    title: "Remedies on Default - Appointment of Receiver",
    keywords: ["appointment of receiver"],
  },
  {
    id: "loan-remedy-legal-action",
    title: "Remedies on Default - Legal Action",
    keywords: ["legal action"],
  },
  {
    id: "loan-guarantee-obligations",
    title: "Guarantees - Guarantor Obligations",
    keywords: ["guarantor obligations"],
  },
  {
    id: "loan-guarantee-continuing",
    title: "Guarantees - Continuing Security",
    keywords: ["continuing security"],
  },
  {
    id: "loan-guarantee-waiver-defences",
    title: "Guarantees - Waiver of Defences",
    keywords: ["waiver of defences"],
  },
  { id: "loan-costs-legal", title: "Costs and Expenses - Legal Fees", keywords: ["legal fees"] },
  {
    id: "loan-costs-valuation",
    title: "Costs and Expenses - Valuation Fees",
    keywords: ["valuation fees"],
  },
  {
    id: "loan-costs-enforcement",
    title: "Costs and Expenses - Enforcement Costs",
    keywords: ["enforcement costs"],
  },
  {
    id: "loan-assignment-lender",
    title: "Assignment - Lender Right to Assign",
    keywords: ["lender s right to assign"],
  },
  {
    id: "loan-assignment-borrower",
    title: "Assignment - Borrower Restrictions",
    keywords: ["borrower restrictions"],
  },
  { id: "loan-taxes-withholding", title: "Taxes - Withholding Tax", keywords: ["withholding tax"] },
  {
    id: "loan-taxes-stamp-duty",
    title: "Taxes - Stamp Duty Act Compliance",
    keywords: ["stamp duty act"],
  },
  {
    id: "loan-taxes-gross-up",
    title: "Taxes - Gross-Up Clause",
    keywords: ["gross-up clause", "gross up clause"],
  },
  { id: "loan-setoff", title: "Set-Off", keywords: ["set-off", "set off"] },
  { id: "loan-indemnity", title: "Indemnity", keywords: ["indemnity"] },
  {
    id: "loan-liability-limitation",
    title: "Limitation of Liability (If Applicable)",
    keywords: ["limitation of liability"],
  },
  {
    id: "loan-discharge-repayment",
    title: "Termination/Discharge - Repayment in Full",
    keywords: ["repayment in full"],
  },
  {
    id: "loan-discharge-release-security",
    title: "Termination/Discharge - Release of Security",
    keywords: ["release of security"],
  },
  { id: "loan-notices", title: "Notices", keywords: ["notices", "notice"] },
  { id: "loan-force-majeure", title: "Force Majeure (Optional)", keywords: ["force majeure"] },
  {
    id: "loan-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "loan-dispute-courts",
    title: "Dispute Resolution - Courts of Kenya",
    keywords: ["courts of kenya"],
  },
  {
    id: "loan-dispute-arbitration",
    title: "Dispute Resolution - Arbitration (if agreed)",
    keywords: ["arbitration"],
  },
  { id: "loan-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "loan-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "loan-severability", title: "Severability", keywords: ["severability"] },
  { id: "loan-waiver", title: "Waiver", keywords: ["waiver"] },
];

const ITEMS: ChecklistTemplateItem[] = [...LOAN_ITEMS];

const template = createKenyaTemplate("loan_agreement", ITEMS);

export default template;
