import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const MERGER_ITEMS: ChecklistTemplateItem[] = [
  { id: "merg-parties-a", title: "Parties - Merging Company A", keywords: ["merging company a"] },
  { id: "merg-parties-b", title: "Parties - Merging Company B", keywords: ["merging company b"] },
  {
    id: "merg-parties-surviving",
    title: "Parties - Surviving/Resulting Company",
    keywords: ["surviving company", "resulting company"],
  },
  { id: "merg-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "merg-parties-registration",
    title: "Parties - Registration Numbers",
    keywords: ["registration numbers"],
  },
  {
    id: "merg-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "merg-structure-type",
    title: "Structure - Type of Merger",
    keywords: ["amalgamation", "absorption"],
  },
  {
    id: "merg-structure-surviving",
    title: "Structure - Surviving Entity",
    keywords: ["surviving entity"],
  },
  {
    id: "merg-structure-effective-date",
    title: "Structure - Effective Date",
    keywords: ["effective date"],
  },
  {
    id: "merg-structure-legal-effect",
    title: "Structure - Legal Effect",
    keywords: ["legal effect of merger"],
  },
  {
    id: "merg-structure-companies-act",
    title: "Structure - Companies Act Compliance",
    keywords: ["companies act"],
  },
  {
    id: "merg-consideration-ratio",
    title: "Consideration - Share Exchange Ratio",
    keywords: ["share exchange ratio"],
  },
  {
    id: "merg-consideration-cash",
    title: "Consideration - Cash Component",
    keywords: ["cash component"],
  },
  {
    id: "merg-consideration-fractional",
    title: "Consideration - Fractional Shares",
    keywords: ["fractional shares"],
  },
  {
    id: "merg-cp-shareholder",
    title: "Conditions Precedent - Shareholder Approvals",
    keywords: ["shareholder approvals"],
  },
  {
    id: "merg-cp-board",
    title: "Conditions Precedent - Board Approvals",
    keywords: ["board approvals"],
  },
  {
    id: "merg-cp-regulatory",
    title: "Conditions Precedent - Regulatory Approvals",
    keywords: ["regulatory approvals"],
  },
  {
    id: "merg-cp-cak",
    title: "Conditions Precedent - Competition Authority Approval",
    keywords: ["competition act", "competition authority"],
  },
  {
    id: "merg-cp-third-party",
    title: "Conditions Precedent - Third-Party Consents",
    keywords: ["third-party consents", "third party consents"],
  },
  {
    id: "merg-pre-ordinary",
    title: "Pre-Completion Covenants - Ordinary Course",
    keywords: ["conduct business in ordinary course"],
  },
  {
    id: "merg-pre-no-assets",
    title: "Pre-Completion Covenants - No Asset Disposal",
    keywords: ["no material asset disposal"],
  },
  {
    id: "merg-pre-no-liabilities",
    title: "Pre-Completion Covenants - No New Liabilities",
    keywords: ["no new liabilities"],
  },
  {
    id: "merg-pre-no-dividend",
    title: "Pre-Completion Covenants - No Dividend Declaration",
    keywords: ["no dividend declaration"],
  },
  {
    id: "merg-warranty-incorporation",
    title: "Representations - Incorporation and Authority",
    keywords: ["incorporation", "authority"],
  },
  {
    id: "merg-warranty-litigation",
    title: "Representations - No Litigation",
    keywords: ["no litigation"],
  },
  {
    id: "merg-warranty-financials",
    title: "Representations - Financial Statements Accuracy",
    keywords: ["financial statements accuracy"],
  },
  {
    id: "merg-warranty-compliance",
    title: "Representations - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "merg-warranty-assets",
    title: "Representations - Ownership of Assets",
    keywords: ["ownership of assets"],
  },
  {
    id: "merg-warranty-negotiated",
    title: "Representations - Warranty Scope Negotiation",
    keywords: ["warranty scope is heavily negotiated"],
  },
  {
    id: "merg-indemnity-warranty",
    title: "Indemnities - Breach of Warranties",
    keywords: ["breach of warranties"],
  },
  { id: "merg-indemnity-tax", title: "Indemnities - Tax Indemnity", keywords: ["tax indemnity"] },
  {
    id: "merg-indemnity-specific",
    title: "Indemnities - Specific Risk",
    keywords: ["specific risk indemnities"],
  },
  {
    id: "merg-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "merg-liability-time",
    title: "Limitation of Liability - Time Limits",
    keywords: ["time limits for claims"],
  },
  {
    id: "merg-liability-de-minimis",
    title: "Limitation of Liability - De Minimis Threshold",
    keywords: ["de minimis threshold"],
  },
  {
    id: "merg-liability-basket",
    title: "Limitation of Liability - Basket Threshold",
    keywords: ["basket threshold"],
  },
  {
    id: "merg-liability-fraud",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  {
    id: "merg-employee-transfer",
    title: "Employee Matters - Transfer of Employees",
    keywords: ["transfer of employees"],
  },
  {
    id: "merg-employee-benefits",
    title: "Employee Matters - Treatment of Benefits",
    keywords: ["treatment of benefits"],
  },
  {
    id: "merg-employee-labour",
    title: "Employee Matters - Labour Law Compliance",
    keywords: ["compliance with labour laws"],
  },
  {
    id: "merg-ip-transfer",
    title: "Intellectual Property - Transfer of IP Rights",
    keywords: ["transfer of ip rights"],
  },
  {
    id: "merg-ip-assignment",
    title: "Intellectual Property - Assignment Mechanics",
    keywords: ["assignment mechanics"],
  },
  {
    id: "merg-ip-registration",
    title: "Intellectual Property - Registration Updates",
    keywords: ["registration updates"],
  },
  {
    id: "merg-financing-refinancing",
    title: "Financing - Debt Refinancing",
    keywords: ["debt refinancing"],
  },
  {
    id: "merg-financing-bridge",
    title: "Financing - Bridge Financing",
    keywords: ["bridge financing"],
  },
  {
    id: "merg-financing-commitments",
    title: "Financing - Funding Commitments",
    keywords: ["funding commitments"],
  },
  {
    id: "merg-term-precompletion",
    title: "Termination - Before Completion",
    keywords: ["termination rights before completion"],
  },
  { id: "merg-term-longstop", title: "Termination - Long-Stop Date", keywords: ["long-stop date"] },
  { id: "merg-term-break-fees", title: "Termination - Break Fees", keywords: ["break fees"] },
  {
    id: "merg-term-consequences",
    title: "Termination - Consequences",
    keywords: ["consequences of termination"],
  },
  { id: "merg-confidentiality", title: "Confidentiality", keywords: ["confidentiality"] },
  {
    id: "merg-announcement-public",
    title: "Announcements - Public Communication",
    keywords: ["public communication"],
  },
  {
    id: "merg-announcement-regulatory",
    title: "Announcements - Regulatory Disclosures",
    keywords: ["regulatory disclosures"],
  },
  {
    id: "merg-tax-cgt",
    title: "Tax Matters - Capital Gains Tax",
    keywords: ["capital gains tax", "income tax act"],
  },
  {
    id: "merg-tax-stamp-duty",
    title: "Tax Matters - Stamp Duty Compliance",
    keywords: ["stamp duty"],
  },
  {
    id: "merg-tax-structuring",
    title: "Tax Matters - Tax Structuring",
    keywords: ["tax structuring"],
  },
  {
    id: "merg-reg-notification",
    title: "Competition and Regulatory - Merger Notification",
    keywords: ["merger notification"],
  },
  {
    id: "merg-reg-cak-conditions",
    title: "Competition and Regulatory - CAK Conditions",
    keywords: ["conditions imposed by cak"],
  },
  {
    id: "merg-reg-cooperation",
    title: "Competition and Regulatory - Regulatory Cooperation",
    keywords: ["regulatory cooperation"],
  },
  {
    id: "merg-post-board",
    title: "Post-Merger Governance - Board Structure",
    keywords: ["board structure"],
  },
  {
    id: "merg-post-management",
    title: "Post-Merger Governance - Management Appointments",
    keywords: ["management appointments"],
  },
  {
    id: "merg-post-shareholding",
    title: "Post-Merger Governance - Shareholding Structure",
    keywords: ["shareholding structure"],
  },
  {
    id: "merg-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "merg-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  { id: "merg-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "merg-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "merg-severability", title: "Severability", keywords: ["severability"] },
  { id: "merg-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "merg-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...MERGER_ITEMS];

const template = createKenyaTemplate("merger_agreement", ITEMS);

export default template;
