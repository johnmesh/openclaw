import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const CREDIT_FACILITY_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "cfa-parties-lender",
    title: "Parties - Lender",
    keywords: ["lender", "bank", "financial institution"],
  },
  { id: "cfa-parties-borrower", title: "Parties - Borrower", keywords: ["borrower"] },
  { id: "cfa-parties-guarantor", title: "Parties - Guarantor", keywords: ["guarantor"] },
  {
    id: "cfa-parties-security-provider",
    title: "Parties - Security Provider",
    keywords: ["security provider"],
  },
  {
    id: "cfa-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "cfa-facility-type",
    title: "Facility Details - Type",
    keywords: ["term loan", "overdraft", "revolving credit", "lc"],
  },
  { id: "cfa-facility-limit", title: "Facility Details - Limit", keywords: ["facility limit"] },
  {
    id: "cfa-facility-availability",
    title: "Facility Details - Availability Period",
    keywords: ["availability period"],
  },
  {
    id: "cfa-facility-purpose",
    title: "Facility Details - Purpose",
    keywords: ["purpose of facility"],
  },
  {
    id: "cfa-drawdown-cp",
    title: "Drawdown - Conditions Precedent",
    keywords: ["conditions precedent"],
  },
  {
    id: "cfa-drawdown-notice",
    title: "Drawdown - Notice of Drawdown",
    keywords: ["notice of drawdown"],
  },
  {
    id: "cfa-drawdown-docs",
    title: "Drawdown - Supporting Documentation",
    keywords: ["supporting documentation"],
  },
  {
    id: "cfa-drawdown-compliance",
    title: "Drawdown - Compliance Confirmations",
    keywords: ["compliance confirmations"],
  },
  {
    id: "cfa-interest-rate",
    title: "Interest - Base Rate + Margin",
    keywords: ["base rate", "margin"],
  },
  {
    id: "cfa-interest-default",
    title: "Interest - Default Interest",
    keywords: ["default interest"],
  },
  {
    id: "cfa-interest-review",
    title: "Interest - Review Mechanism",
    keywords: ["interest review mechanism"],
  },
  {
    id: "cfa-interest-calculation",
    title: "Interest - Calculation Method",
    keywords: ["interest calculation method"],
  },
  { id: "cfa-fee-arrangement", title: "Fees - Arrangement Fee", keywords: ["arrangement fee"] },
  { id: "cfa-fee-commitment", title: "Fees - Commitment Fee", keywords: ["commitment fee"] },
  { id: "cfa-fee-facility", title: "Fees - Facility Fee", keywords: ["facility fee"] },
  {
    id: "cfa-fee-legal-valuation",
    title: "Fees - Legal/Valuation Fees",
    keywords: ["legal fees", "valuation fees"],
  },
  { id: "cfa-fee-agency", title: "Fees - Agency Fee", keywords: ["agency fee"] },
  { id: "cfa-repay-schedule", title: "Repayment - Schedule", keywords: ["repayment schedule"] },
  {
    id: "cfa-repay-bullet-amortised",
    title: "Repayment - Bullet/Amortised",
    keywords: ["bullet", "amortised"],
  },
  {
    id: "cfa-repay-revolving",
    title: "Repayment - Revolving Mechanics",
    keywords: ["revolving facility repayment mechanics"],
  },
  {
    id: "cfa-repay-prepayment",
    title: "Repayment - Prepayment Terms",
    keywords: ["prepayment terms"],
  },
  {
    id: "cfa-repay-early-penalty",
    title: "Repayment - Early Repayment Penalties",
    keywords: ["early repayment penalties"],
  },
  {
    id: "cfa-security-land-charge",
    title: "Security - Charges over Land",
    keywords: ["charges over land"],
  },
  { id: "cfa-security-debenture", title: "Security - Debenture", keywords: ["debenture"] },
  {
    id: "cfa-security-receivables",
    title: "Security - Assignment of Receivables",
    keywords: ["assignment of receivables"],
  },
  {
    id: "cfa-security-personal-guarantee",
    title: "Security - Personal Guarantees",
    keywords: ["personal guarantees"],
  },
  {
    id: "cfa-security-corporate-guarantee",
    title: "Security - Corporate Guarantees",
    keywords: ["corporate guarantees"],
  },
  {
    id: "cfa-security-land-compliance",
    title: "Security - Land Act/Land Registration Act Compliance",
    keywords: ["land act", "land registration act"],
  },
  {
    id: "cfa-warranty-corporate-authority",
    title: "Representations - Corporate Authority",
    keywords: ["corporate authority"],
  },
  {
    id: "cfa-warranty-incorporation",
    title: "Representations - Valid Incorporation",
    keywords: ["valid incorporation"],
  },
  {
    id: "cfa-warranty-no-litigation",
    title: "Representations - No Litigation",
    keywords: ["no litigation"],
  },
  {
    id: "cfa-warranty-financials",
    title: "Representations - Financial Statements Accuracy",
    keywords: ["financial statements accuracy"],
  },
  {
    id: "cfa-warranty-law-compliance",
    title: "Representations - No Breach of Laws",
    keywords: ["no breach of laws"],
  },
  {
    id: "cfa-covenant-positive-insurance",
    title: "Covenants - Positive - Maintain Insurance",
    keywords: ["maintain insurance"],
  },
  {
    id: "cfa-covenant-positive-financials",
    title: "Covenants - Positive - Provide Financial Statements",
    keywords: ["provide financial statements"],
  },
  {
    id: "cfa-covenant-positive-ratios",
    title: "Covenants - Positive - Maintain Financial Ratios",
    keywords: ["maintain financial ratios"],
  },
  {
    id: "cfa-covenant-positive-taxes",
    title: "Covenants - Positive - Pay Taxes",
    keywords: ["pay taxes"],
  },
  {
    id: "cfa-covenant-negative-borrowing",
    title: "Covenants - Negative - No Additional Borrowing",
    keywords: ["no additional borrowing without consent"],
  },
  {
    id: "cfa-covenant-negative-asset-disposal",
    title: "Covenants - Negative - No Asset Disposal",
    keywords: ["no asset disposal"],
  },
  {
    id: "cfa-covenant-negative-change-control",
    title: "Covenants - Negative - No Change of Control",
    keywords: ["no change of control"],
  },
  {
    id: "cfa-covenant-negative-additional-security",
    title: "Covenants - Negative - No Additional Security to Others",
    keywords: ["no additional security to others"],
  },
  {
    id: "cfa-financial-dscr",
    title: "Financial Covenants - DSCR",
    keywords: ["debt service coverage ratio"],
  },
  {
    id: "cfa-financial-leverage",
    title: "Financial Covenants - Leverage Ratio",
    keywords: ["leverage ratio"],
  },
  {
    id: "cfa-financial-net-worth",
    title: "Financial Covenants - Minimum Net Worth",
    keywords: ["minimum net worth"],
  },
  {
    id: "cfa-financial-liquidity",
    title: "Financial Covenants - Liquidity Requirements",
    keywords: ["liquidity requirements"],
  },
  {
    id: "cfa-default-nonpayment",
    title: "Events of Default - Non-Payment",
    keywords: ["non-payment", "non payment"],
  },
  {
    id: "cfa-default-covenant",
    title: "Events of Default - Breach of Covenant",
    keywords: ["breach of covenant"],
  },
  {
    id: "cfa-default-insolvency",
    title: "Events of Default - Insolvency",
    keywords: ["insolvency"],
  },
  {
    id: "cfa-default-cross",
    title: "Events of Default - Cross-Default",
    keywords: ["cross-default"],
  },
  {
    id: "cfa-default-misrep",
    title: "Events of Default - Misrepresentation",
    keywords: ["misrepresentation"],
  },
  {
    id: "cfa-default-mac",
    title: "Events of Default - Material Adverse Change",
    keywords: ["material adverse change", "mac"],
  },
  { id: "cfa-remedy-acceleration", title: "Remedies - Acceleration", keywords: ["acceleration"] },
  {
    id: "cfa-remedy-demand",
    title: "Remedies - Demand for Repayment",
    keywords: ["demand for repayment"],
  },
  {
    id: "cfa-remedy-enforcement",
    title: "Remedies - Enforcement of Security",
    keywords: ["enforcement of security"],
  },
  {
    id: "cfa-remedy-receiver",
    title: "Remedies - Appointment of Receiver",
    keywords: ["appointment of receiver"],
  },
  {
    id: "cfa-remedy-setoff",
    title: "Remedies - Set-Off Rights",
    keywords: ["set-off rights", "set off rights"],
  },
  {
    id: "cfa-guarantee-continuing",
    title: "Guarantees - Continuing Guarantee",
    keywords: ["continuing guarantee"],
  },
  { id: "cfa-guarantee-indemnity", title: "Guarantees - Indemnity", keywords: ["indemnity"] },
  {
    id: "cfa-guarantee-waiver-defences",
    title: "Guarantees - Waiver of Defences",
    keywords: ["waiver of defences"],
  },
  {
    id: "cfa-assignment-lender",
    title: "Assignment and Transfer - Lender Right to Assign",
    keywords: ["lender s right to assign"],
  },
  {
    id: "cfa-assignment-borrower-consent",
    title: "Assignment and Transfer - Borrower Consent",
    keywords: ["borrower consent"],
  },
  { id: "cfa-costs-legal", title: "Costs and Expenses - Legal Fees", keywords: ["legal fees"] },
  {
    id: "cfa-costs-enforcement",
    title: "Costs and Expenses - Enforcement Costs",
    keywords: ["enforcement costs"],
  },
  {
    id: "cfa-costs-recovery",
    title: "Costs and Expenses - Recovery Expenses",
    keywords: ["recovery expenses"],
  },
  { id: "cfa-tax-withholding", title: "Taxes - Withholding Tax", keywords: ["withholding tax"] },
  {
    id: "cfa-tax-stamp-duty",
    title: "Taxes - Stamp Duty Act Compliance",
    keywords: ["stamp duty act"],
  },
  {
    id: "cfa-tax-gross-up",
    title: "Taxes - Gross-Up Clause",
    keywords: ["gross-up clause", "gross up clause"],
  },
  { id: "cfa-setoff", title: "Set-Off", keywords: ["set-off", "set off"] },
  {
    id: "cfa-variation-amendment",
    title: "Variation - Amendment Process",
    keywords: ["amendment process"],
  },
  {
    id: "cfa-variation-interest",
    title: "Variation - Interest Rate Variation",
    keywords: ["interest rate variation"],
  },
  { id: "cfa-notices", title: "Notices", keywords: ["notices", "notice"] },
  { id: "cfa-confidentiality", title: "Confidentiality", keywords: ["confidentiality"] },
  {
    id: "cfa-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "cfa-dispute-courts",
    title: "Dispute Resolution - Courts of Kenya",
    keywords: ["courts of kenya"],
  },
  {
    id: "cfa-dispute-arbitration",
    title: "Dispute Resolution - Arbitration (if agreed)",
    keywords: ["arbitration"],
  },
  { id: "cfa-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "cfa-severability", title: "Severability", keywords: ["severability"] },
  { id: "cfa-waiver", title: "Waiver", keywords: ["waiver"] },
];

const ITEMS: ChecklistTemplateItem[] = [...CREDIT_FACILITY_ITEMS];

const template = createKenyaTemplate("credit_facility_agreement", ITEMS);

export default template;
