import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const SHARE_SUBSCRIPTION_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "ssa-parties-company",
    title: "Parties - Company (Issuer)",
    keywords: ["company", "issuer"],
  },
  {
    id: "ssa-parties-subscriber",
    title: "Parties - Subscriber/Investor",
    keywords: ["subscriber", "investor"],
  },
  { id: "ssa-parties-founders", title: "Parties - Founders", keywords: ["founders"] },
  { id: "ssa-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "ssa-parties-registration",
    title: "Parties - Registration Numbers",
    keywords: ["registration numbers"],
  },
  {
    id: "ssa-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "ssa-subscription-number",
    title: "Subscription of Shares - Number of Shares",
    keywords: ["number of shares to be issued"],
  },
  {
    id: "ssa-subscription-class",
    title: "Subscription of Shares - Share Class",
    keywords: ["share class"],
  },
  {
    id: "ssa-subscription-nominal",
    title: "Subscription of Shares - Nominal Value",
    keywords: ["nominal value"],
  },
  {
    id: "ssa-subscription-premium",
    title: "Subscription of Shares - Premium",
    keywords: ["premium"],
  },
  {
    id: "ssa-subscription-total",
    title: "Subscription of Shares - Total Subscription Amount",
    keywords: ["total subscription amount"],
  },
  {
    id: "ssa-price-per-share",
    title: "Subscription Price - Price per Share",
    keywords: ["price per share"],
  },
  {
    id: "ssa-price-payment-method",
    title: "Subscription Price - Payment Method",
    keywords: ["payment method"],
  },
  { id: "ssa-price-currency", title: "Subscription Price - Currency", keywords: ["currency"] },
  {
    id: "ssa-cp-board",
    title: "Conditions Precedent - Board Approval",
    keywords: ["board approval of allotment"],
  },
  {
    id: "ssa-cp-shareholder",
    title: "Conditions Precedent - Shareholder Approval",
    keywords: ["shareholder approval"],
  },
  {
    id: "ssa-cp-articles",
    title: "Conditions Precedent - Amendment of Articles",
    keywords: ["amendment of articles"],
  },
  {
    id: "ssa-cp-regulatory",
    title: "Conditions Precedent - Regulatory Approvals",
    keywords: ["regulatory approvals"],
  },
  {
    id: "ssa-cp-dd",
    title: "Conditions Precedent - Due Diligence Completion",
    keywords: ["due diligence completion"],
  },
  {
    id: "ssa-cp-companies-act",
    title: "Conditions Precedent - Companies Act Issuance Compliance",
    keywords: ["companies act"],
  },
  { id: "ssa-closing-date", title: "Completion - Completion Date", keywords: ["completion date"] },
  {
    id: "ssa-closing-payment",
    title: "Completion - Payment Mechanics",
    keywords: ["payment mechanics"],
  },
  {
    id: "ssa-closing-allotment",
    title: "Completion - Allotment of Shares",
    keywords: ["allotment of shares"],
  },
  {
    id: "ssa-closing-register",
    title: "Completion - Register of Members Update",
    keywords: ["update of register of members"],
  },
  {
    id: "ssa-closing-certificates",
    title: "Completion - Share Certificates",
    keywords: ["issuance of share certificates"],
  },
  {
    id: "ssa-rep-company-incorporation",
    title: "Representations (Company) - Valid Incorporation",
    keywords: ["valid incorporation"],
  },
  {
    id: "ssa-rep-company-authority",
    title: "Representations (Company) - Authority to Issue Shares",
    keywords: ["authority to issue shares"],
  },
  {
    id: "ssa-rep-company-liabilities",
    title: "Representations (Company) - No Undisclosed Liabilities",
    keywords: ["no undisclosed liabilities"],
  },
  {
    id: "ssa-rep-company-law",
    title: "Representations (Company) - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "ssa-rep-company-financials",
    title: "Representations (Company) - Financial Statements Accuracy",
    keywords: ["accuracy of financial statements"],
  },
  {
    id: "ssa-rep-subscriber-authority",
    title: "Representations (Subscriber) - Authority to Invest",
    keywords: ["authority to invest"],
  },
  {
    id: "ssa-rep-subscriber-funds",
    title: "Representations (Subscriber) - Funds Legality",
    keywords: ["funds legality"],
  },
  {
    id: "ssa-rep-subscriber-sophisticated",
    title: "Representations (Subscriber) - Sophisticated Investor",
    keywords: ["sophisticated investor status"],
  },
  {
    id: "ssa-cov-pre-ordinary",
    title: "Covenants Pre-Completion - Ordinary Course",
    keywords: ["conduct business in ordinary course"],
  },
  {
    id: "ssa-cov-pre-no-new-shares",
    title: "Covenants Pre-Completion - No New Share Issuance",
    keywords: ["no new share issuance"],
  },
  {
    id: "ssa-cov-post-info",
    title: "Covenants Post-Completion - Financial Information",
    keywords: ["provide financial information"],
  },
  {
    id: "ssa-cov-post-governance",
    title: "Covenants Post-Completion - Maintain Governance Structure",
    keywords: ["maintain governance structure"],
  },
  {
    id: "ssa-proceeds-expansion",
    title: "Use of Proceeds - Business Expansion",
    keywords: ["business expansion"],
  },
  {
    id: "ssa-proceeds-working-capital",
    title: "Use of Proceeds - Working Capital",
    keywords: ["working capital"],
  },
  {
    id: "ssa-proceeds-project",
    title: "Use of Proceeds - Specific Project Funding",
    keywords: ["specific project funding"],
  },
  {
    id: "ssa-preemption",
    title: "Pre-Emption Rights - Future Issuances",
    keywords: ["future share issuances", "pre-emption rights"],
  },
  {
    id: "ssa-preemption-antidilution",
    title: "Pre-Emption Rights - Anti-Dilution Protections",
    keywords: ["anti-dilution protections", "anti dilution"],
  },
  {
    id: "ssa-antidilution-weighted",
    title: "Anti-Dilution - Weighted Average",
    keywords: ["weighted average formula"],
  },
  {
    id: "ssa-antidilution-ratchet",
    title: "Anti-Dilution - Full Ratchet",
    keywords: ["full ratchet"],
  },
  {
    id: "ssa-governance-board",
    title: "Governance Rights - Board Appointment Rights",
    keywords: ["board appointment rights"],
  },
  {
    id: "ssa-governance-observer",
    title: "Governance Rights - Observer Rights",
    keywords: ["observer rights"],
  },
  {
    id: "ssa-governance-reserved",
    title: "Governance Rights - Reserved Matters",
    keywords: ["reserved matters"],
  },
  {
    id: "ssa-info-financials",
    title: "Information Rights - Financial Statements",
    keywords: ["financial statements"],
  },
  { id: "ssa-info-budgets", title: "Information Rights - Budgets", keywords: ["budgets"] },
  { id: "ssa-info-audit", title: "Information Rights - Audit Access", keywords: ["audit access"] },
  {
    id: "ssa-lockup-transfer",
    title: "Lock-Up/Transfer Restrictions - Sale Restrictions",
    keywords: ["restrictions on selling shares"],
  },
  {
    id: "ssa-lockup-tag",
    title: "Lock-Up/Transfer Restrictions - Tag-Along",
    keywords: ["tag-along rights", "tag along"],
  },
  {
    id: "ssa-lockup-drag",
    title: "Lock-Up/Transfer Restrictions - Drag-Along",
    keywords: ["drag-along rights", "drag along"],
  },
  {
    id: "ssa-indemnity-warranty",
    title: "Indemnities - Breach of Warranties",
    keywords: ["breach of warranties"],
  },
  { id: "ssa-indemnity-tax", title: "Indemnities - Tax Indemnity", keywords: ["tax indemnity"] },
  {
    id: "ssa-indemnity-specific",
    title: "Indemnities - Specific Risk",
    keywords: ["specific risk indemnities"],
  },
  {
    id: "ssa-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "ssa-liability-time",
    title: "Limitation of Liability - Time Limits",
    keywords: ["time limits for claims"],
  },
  {
    id: "ssa-liability-de-minimis",
    title: "Limitation of Liability - De Minimis Threshold",
    keywords: ["de minimis threshold"],
  },
  {
    id: "ssa-liability-fraud",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  { id: "ssa-tax-cgt", title: "Tax Matters - Capital Gains", keywords: ["capital gains"] },
  { id: "ssa-tax-stamp-duty", title: "Tax Matters - Stamp Duty", keywords: ["stamp duty act"] },
  {
    id: "ssa-tax-withholding",
    title: "Tax Matters - Withholding Tax",
    keywords: ["withholding tax"],
  },
  {
    id: "ssa-reg-capital-markets",
    title: "Regulatory Compliance - Capital Markets",
    keywords: ["capital markets compliance"],
  },
  {
    id: "ssa-reg-competition",
    title: "Regulatory Compliance - Competition Clearance",
    keywords: ["competition clearance", "competition act"],
  },
  { id: "ssa-confidentiality", title: "Confidentiality", keywords: ["confidentiality"] },
  {
    id: "ssa-term-precompletion",
    title: "Termination - Before Completion",
    keywords: ["termination before completion"],
  },
  { id: "ssa-term-longstop", title: "Termination - Long-Stop Date", keywords: ["long-stop date"] },
  { id: "ssa-term-break-fee", title: "Termination - Break Fee", keywords: ["break fee"] },
  {
    id: "ssa-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "ssa-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  { id: "ssa-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "ssa-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "ssa-severability", title: "Severability", keywords: ["severability"] },
  { id: "ssa-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "ssa-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...SHARE_SUBSCRIPTION_ITEMS];

const template = createKenyaTemplate("share_subscription_agreement", ITEMS);

export default template;
