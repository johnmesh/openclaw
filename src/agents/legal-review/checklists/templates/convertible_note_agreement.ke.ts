import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const CONVERTIBLE_NOTE_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "cn-parties-company",
    title: "Parties - Company (Issuer)",
    keywords: ["company", "issuer"],
  },
  {
    id: "cn-parties-investor",
    title: "Parties - Investor (Noteholder)",
    keywords: ["investor", "noteholder"],
  },
  { id: "cn-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "cn-parties-registration",
    title: "Parties - Registration Details",
    keywords: ["registration details"],
  },
  {
    id: "cn-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "cn-principal-amount",
    title: "Principal Amount - Investment Amount",
    keywords: ["investment amount"],
  },
  { id: "cn-principal-currency", title: "Principal Amount - Currency", keywords: ["currency"] },
  {
    id: "cn-principal-disbursement",
    title: "Principal Amount - Disbursement Mechanics",
    keywords: ["disbursement mechanics"],
  },
  {
    id: "cn-interest-rate",
    title: "Interest - Rate (Fixed/Simple)",
    keywords: ["interest rate", "fixed", "simple"],
  },
  { id: "cn-interest-accrual", title: "Interest - Accrual Method", keywords: ["accrual method"] },
  {
    id: "cn-interest-converts",
    title: "Interest - Whether Interest Converts",
    keywords: ["interest converts into equity"],
  },
  {
    id: "cn-interest-free-option",
    title: "Interest - Interest-Free Option",
    keywords: ["interest-free", "interest free"],
  },
  { id: "cn-maturity-date", title: "Maturity Date", keywords: ["maturity date"] },
  {
    id: "cn-maturity-repayment-date",
    title: "Maturity - Repayment Date if Not Converted",
    keywords: ["repayment date if not converted"],
  },
  {
    id: "cn-maturity-extension",
    title: "Maturity - Extension Rights",
    keywords: ["extension rights"],
  },
  {
    id: "cn-trigger-qualified",
    title: "Conversion Triggers - Qualified Financing",
    keywords: ["qualified financing round"],
  },
  {
    id: "cn-trigger-nonqualified",
    title: "Conversion Triggers - Non-Qualified Financing",
    keywords: ["non-qualified financing", "non qualified financing"],
  },
  {
    id: "cn-trigger-maturity",
    title: "Conversion Triggers - Maturity Conversion",
    keywords: ["maturity conversion"],
  },
  {
    id: "cn-trigger-change-control",
    title: "Conversion Triggers - Change of Control",
    keywords: ["change of control"],
  },
  { id: "cn-trigger-ipo", title: "Conversion Triggers - IPO", keywords: ["ipo"] },
  {
    id: "cn-trigger-core-risk",
    title: "Conversion Triggers - Core Risk Clause",
    keywords: ["core risk clause"],
  },
  {
    id: "cn-mechanics-price",
    title: "Conversion Mechanics - Conversion Price",
    keywords: ["conversion price"],
  },
  {
    id: "cn-mechanics-cap",
    title: "Conversion Mechanics - Valuation Cap",
    keywords: ["valuation cap"],
  },
  {
    id: "cn-mechanics-discount",
    title: "Conversion Mechanics - Discount Rate",
    keywords: ["discount rate"],
  },
  {
    id: "cn-mechanics-share-class",
    title: "Conversion Mechanics - Share Class",
    keywords: ["share class upon conversion"],
  },
  {
    id: "cn-mechanics-automatic-optional",
    title: "Conversion Mechanics - Automatic vs Optional",
    keywords: ["automatic vs optional conversion"],
  },
  {
    id: "cn-cap-maximum",
    title: "Valuation Cap - Maximum Company Valuation",
    keywords: ["maximum company valuation for conversion"],
  },
  {
    id: "cn-discount-percentage",
    title: "Discount Rate - Percentage at Next Round",
    keywords: ["discount applied at next funding round"],
  },
  {
    id: "cn-repay-principal",
    title: "Repayment (If No Conversion) - Principal",
    keywords: ["repayment of principal"],
  },
  {
    id: "cn-repay-interest",
    title: "Repayment (If No Conversion) - Accrued Interest",
    keywords: ["payment of accrued interest"],
  },
  {
    id: "cn-repay-liquidation-pref",
    title: "Repayment (If No Conversion) - Liquidation Preference",
    keywords: ["liquidation preference"],
  },
  {
    id: "cn-ranking-seniority",
    title: "Ranking - Seniority vs Other Debts",
    keywords: ["seniority vs other debts"],
  },
  {
    id: "cn-ranking-subordination",
    title: "Ranking - Subordination Clause",
    keywords: ["subordination clause"],
  },
  {
    id: "cn-rep-company-incorporation",
    title: "Representations (Company) - Valid Incorporation",
    keywords: ["valid incorporation"],
  },
  {
    id: "cn-rep-company-authority",
    title: "Representations (Company) - Authority to Issue",
    keywords: ["authority to issue note"],
  },
  {
    id: "cn-rep-company-litigation",
    title: "Representations (Company) - No Litigation",
    keywords: ["no litigation"],
  },
  {
    id: "cn-rep-company-no-conflict",
    title: "Representations (Company) - No Conflicting Agreements",
    keywords: ["no conflicting agreements"],
  },
  {
    id: "cn-rep-investor-authority",
    title: "Representations (Investor) - Authority to Invest",
    keywords: ["authority to invest"],
  },
  {
    id: "cn-rep-investor-sophisticated",
    title: "Representations (Investor) - Sophisticated Investor Status",
    keywords: ["sophisticated investor status"],
  },
  { id: "cn-covenant-use-of-funds", title: "Covenants - Use of Funds", keywords: ["use of funds"] },
  {
    id: "cn-covenant-reporting",
    title: "Covenants - Financial Reporting",
    keywords: ["financial reporting"],
  },
  {
    id: "cn-covenant-no-debt",
    title: "Covenants - No Additional Debt Without Consent",
    keywords: ["no additional debt without consent"],
  },
  {
    id: "cn-covenant-law",
    title: "Covenants - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "cn-preemption",
    title: "Pre-Emption Rights (Optional)",
    keywords: ["pre-emption rights", "preemption rights"],
  },
  { id: "cn-information-rights", title: "Information Rights", keywords: ["information rights"] },
  {
    id: "cn-default-nonpayment",
    title: "Events of Default - Non-Payment",
    keywords: ["non-payment", "non payment"],
  },
  {
    id: "cn-default-insolvency",
    title: "Events of Default - Insolvency",
    keywords: ["insolvency"],
  },
  {
    id: "cn-default-covenant",
    title: "Events of Default - Breach of Covenants",
    keywords: ["breach of covenants"],
  },
  {
    id: "cn-default-cross",
    title: "Events of Default - Cross-Default",
    keywords: ["cross-default"],
  },
  { id: "cn-indemnity", title: "Indemnity", keywords: ["indemnity"] },
  {
    id: "cn-liability-limitation",
    title: "Limitation of Liability",
    keywords: ["limitation of liability"],
  },
  {
    id: "cn-assignment-transferability",
    title: "Assignment - Transferability of Note",
    keywords: ["transferability of note"],
  },
  {
    id: "cn-tax-withholding",
    title: "Tax Matters - Withholding Tax",
    keywords: ["withholding tax", "income tax act"],
  },
  { id: "cn-tax-stamp-duty", title: "Tax Matters - Stamp Duty", keywords: ["stamp duty act"] },
  {
    id: "cn-amendment-consent",
    title: "Amendments - Investor Consent Thresholds",
    keywords: ["investor consent thresholds"],
  },
  { id: "cn-confidentiality", title: "Confidentiality", keywords: ["confidentiality"] },
  {
    id: "cn-dispute-governing-law",
    title: "Governing Law and Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "cn-dispute-forum",
    title: "Governing Law and Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  { id: "cn-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "cn-severability", title: "Severability", keywords: ["severability"] },
  { id: "cn-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "cn-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...CONVERTIBLE_NOTE_ITEMS];

const template = createKenyaTemplate("convertible_note_agreement", ITEMS);

export default template;
