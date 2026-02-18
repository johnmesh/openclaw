import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const GUARANTEE_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "guar-parties-lender",
    title: "Parties - Lender/Beneficiary",
    keywords: ["lender", "beneficiary"],
  },
  {
    id: "guar-parties-borrower",
    title: "Parties - Borrower/Principal Debtor",
    keywords: ["borrower", "principal debtor"],
  },
  { id: "guar-parties-guarantor", title: "Parties - Guarantor", keywords: ["guarantor"] },
  { id: "guar-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "guar-parties-id-reg",
    title: "Parties - ID/Company Registration",
    keywords: ["id", "company registration number"],
  },
  { id: "guar-parties-kra", title: "Parties - KRA PIN", keywords: ["kra pin"] },
  {
    id: "guar-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "guar-core-payment-performance",
    title: "Guarantee Clause - Payment and Performance",
    keywords: ["guarantee of payment and performance"],
  },
  {
    id: "guar-core-scope",
    title: "Guarantee Clause - Scope of Guaranteed Obligations",
    keywords: ["scope of guaranteed obligations"],
  },
  {
    id: "guar-core-underlying-reference",
    title: "Guarantee Clause - Reference to Underlying Facility",
    keywords: ["underlying loan", "underlying facility"],
  },
  {
    id: "guar-core-critical",
    title: "Guarantee Clause - Core Clause Confirmation",
    keywords: ["heart of the agreement"],
  },
  {
    id: "guar-indemnity-separate",
    title: "Indemnity - Separate Indemnity Obligation",
    keywords: ["separate indemnity obligation"],
  },
  {
    id: "guar-indemnity-primary-liability",
    title: "Indemnity - Primary Liability Wording",
    keywords: ["primary liability wording"],
  },
  {
    id: "guar-indemnity-pay-on-demand",
    title: "Indemnity - Pay on Demand",
    keywords: ["pay on demand"],
  },
  {
    id: "guar-indemnity-fallback",
    title: "Indemnity - Liability if Guarantee Fails Technically",
    keywords: ["liable even if guarantee fails technically"],
  },
  {
    id: "guar-continuing-valid",
    title: "Continuing Security - Valid Until Full Repayment",
    keywords: ["valid until full repayment"],
  },
  {
    id: "guar-continuing-future-advances",
    title: "Continuing Security - Covers Future Advances",
    keywords: ["covers future advances"],
  },
  {
    id: "guar-continuing-not-affected",
    title: "Continuing Security - Unaffected by Facility Changes",
    keywords: ["not affected by changes to facility"],
  },
  {
    id: "guar-liability-joint-several",
    title: "Nature of Liability - Joint and Several",
    keywords: ["joint and several liability"],
  },
  {
    id: "guar-liability-primary-secondary",
    title: "Nature of Liability - Primary vs Secondary",
    keywords: ["primary vs secondary liability"],
  },
  {
    id: "guar-liability-on-demand",
    title: "Nature of Liability - On Demand Clause",
    keywords: ["on demand clause"],
  },
  {
    id: "guar-waiver-first-pursue",
    title: "Waiver of Defences - No First Pursuit of Borrower",
    keywords: ["waiver of requirement to first pursue borrower"],
  },
  {
    id: "guar-waiver-notice",
    title: "Waiver of Defences - Notice Waiver",
    keywords: ["waiver of notice"],
  },
  {
    id: "guar-waiver-setoff",
    title: "Waiver of Defences - Set-Off Waiver",
    keywords: ["waiver of set-off", "waiver of set off"],
  },
  {
    id: "guar-waiver-discharge-variation",
    title: "Waiver of Defences - No Discharge by Variation",
    keywords: ["waiver of discharge by variation"],
  },
  {
    id: "guar-waiver-critical",
    title: "Waiver of Defences - Material Negotiation Area",
    keywords: ["commonly negotiated and highly important"],
  },
  {
    id: "guar-variation-not-affected",
    title: "Variations - Not Affected by Underlying Loan Amendments",
    keywords: ["not affected by amendment of underlying loan"],
  },
  {
    id: "guar-variation-no-consent",
    title: "Variations - Facility Variation Without Guarantor Consent",
    keywords: ["vary facility without guarantor consent"],
  },
  {
    id: "guar-warranty-authority",
    title: "Representations and Warranties - Authority",
    keywords: ["authority to enter guarantee"],
  },
  {
    id: "guar-warranty-solvency",
    title: "Representations and Warranties - Solvency",
    keywords: ["solvency"],
  },
  {
    id: "guar-warranty-no-conflict",
    title: "Representations and Warranties - No Conflicting Obligations",
    keywords: ["no conflicting obligations"],
  },
  {
    id: "guar-warranty-corporate-approval",
    title: "Representations and Warranties - Corporate Approvals",
    keywords: ["corporate approvals"],
  },
  {
    id: "guar-covenant-financial-standing",
    title: "Covenants - Maintain Financial Standing",
    keywords: ["maintain financial standing"],
  },
  {
    id: "guar-covenant-financial-statements",
    title: "Covenants - Provide Financial Statements",
    keywords: ["provide financial statements"],
  },
  {
    id: "guar-covenant-notify-insolvency",
    title: "Covenants - Notify Insolvency Events",
    keywords: ["notify of insolvency events"],
  },
  {
    id: "guar-default-loan",
    title: "Events of Default - Default under Loan Agreement",
    keywords: ["default under loan agreement"],
  },
  {
    id: "guar-default-borrower-insolvency",
    title: "Events of Default - Borrower Insolvency",
    keywords: ["insolvency of borrower"],
  },
  {
    id: "guar-default-guarantor-breach",
    title: "Events of Default - Guarantor Breach",
    keywords: ["breach by guarantor"],
  },
  {
    id: "guar-demand-written",
    title: "Demand Procedure - Written Demand Requirements",
    keywords: ["written demand requirements"],
  },
  {
    id: "guar-demand-time",
    title: "Demand Procedure - Time for Payment after Demand",
    keywords: ["time for payment after demand"],
  },
  { id: "guar-costs-legal", title: "Costs and Expenses - Legal Fees", keywords: ["legal fees"] },
  {
    id: "guar-costs-enforcement",
    title: "Costs and Expenses - Enforcement Costs",
    keywords: ["enforcement costs"],
  },
  {
    id: "guar-costs-recovery",
    title: "Costs and Expenses - Recovery Expenses",
    keywords: ["recovery expenses"],
  },
  {
    id: "guar-subrogation-rights",
    title: "Subrogation - Guarantor Rights after Payment",
    keywords: ["guarantor rights after payment"],
  },
  {
    id: "guar-subrogation-postponement",
    title: "Subrogation - Postponed Recovery until Lender Paid",
    keywords: ["postponement of guarantor recovery"],
  },
  {
    id: "guar-assignment-lender",
    title: "Assignment - Lender Right to Assign",
    keywords: ["lender s right to assign"],
  },
  {
    id: "guar-assignment-guarantor-restrictions",
    title: "Assignment - Restrictions on Guarantor",
    keywords: ["restrictions on guarantor"],
  },
  {
    id: "guar-tax-stamp-duty",
    title: "Taxes - Stamp Duty Act Compliance",
    keywords: ["stamp duty act"],
  },
  { id: "guar-tax-withholding", title: "Taxes - Withholding Tax", keywords: ["withholding tax"] },
  { id: "guar-setoff", title: "Set-Off", keywords: ["set-off", "set off"] },
  { id: "guar-confidentiality", title: "Confidentiality", keywords: ["confidentiality"] },
  {
    id: "guar-liability-max",
    title: "Limitation of Liability - Maximum Liability Amount",
    keywords: ["maximum liability amount"],
  },
  {
    id: "guar-liability-cap-interest-costs",
    title: "Limitation of Liability - Cap on Interest and Costs",
    keywords: ["cap on interest and costs"],
  },
  {
    id: "guar-release-conditions",
    title: "Release - Conditions for Discharge",
    keywords: ["conditions for discharge"],
  },
  {
    id: "guar-release-full-repayment",
    title: "Release - Full Repayment Requirement",
    keywords: ["full repayment requirement"],
  },
  {
    id: "guar-dispute-governing-law",
    title: "Governing Law and Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "guar-dispute-courts",
    title: "Governing Law and Dispute Resolution - Courts of Kenya",
    keywords: ["courts of kenya"],
  },
  {
    id: "guar-dispute-arbitration",
    title: "Governing Law and Dispute Resolution - Arbitration (if agreed)",
    keywords: ["arbitration"],
  },
  { id: "guar-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "guar-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "guar-severability", title: "Severability", keywords: ["severability"] },
  { id: "guar-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "guar-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...GUARANTEE_ITEMS];

const template = createKenyaTemplate("guarantee_agreement", ITEMS);

export default template;
