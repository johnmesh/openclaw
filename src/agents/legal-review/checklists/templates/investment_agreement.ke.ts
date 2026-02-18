import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const INVESTMENT_ITEMS: ChecklistTemplateItem[] = [
  { id: "inv-parties-company", title: "Parties - Company", keywords: ["company"] },
  { id: "inv-parties-investors", title: "Parties - Investor(s)", keywords: ["investor"] },
  { id: "inv-parties-founders", title: "Parties - Founders", keywords: ["founders"] },
  { id: "inv-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "inv-parties-registration",
    title: "Parties - Registration Numbers",
    keywords: ["registration numbers"],
  },
  {
    id: "inv-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "inv-structure-type",
    title: "Investment Structure - Type",
    keywords: ["equity", "convertible note", "preference shares"],
  },
  {
    id: "inv-structure-subscription-amount",
    title: "Investment Structure - Subscription Amount",
    keywords: ["subscription amount"],
  },
  {
    id: "inv-structure-valuation",
    title: "Investment Structure - Valuation",
    keywords: ["pre-money", "post-money"],
  },
  {
    id: "inv-structure-share-class",
    title: "Investment Structure - Share Class",
    keywords: ["share class"],
  },
  {
    id: "inv-cp-board",
    title: "Conditions Precedent - Board Resolutions",
    keywords: ["board resolutions"],
  },
  {
    id: "inv-cp-shareholders",
    title: "Conditions Precedent - Shareholder Approvals",
    keywords: ["shareholder approvals"],
  },
  {
    id: "inv-cp-regulatory",
    title: "Conditions Precedent - Regulatory Approvals",
    keywords: ["regulatory approvals"],
  },
  {
    id: "inv-cp-dd",
    title: "Conditions Precedent - Due Diligence Completion",
    keywords: ["due diligence completion"],
  },
  {
    id: "inv-cp-articles",
    title: "Conditions Precedent - Amendment of Articles",
    keywords: ["amendment of articles"],
  },
  {
    id: "inv-subscription-shares",
    title: "Subscription and Issuance - Number of Shares",
    keywords: ["number of shares issued"],
  },
  {
    id: "inv-subscription-price",
    title: "Subscription and Issuance - Share Price",
    keywords: ["share price"],
  },
  {
    id: "inv-subscription-payment",
    title: "Subscription and Issuance - Payment Mechanics",
    keywords: ["payment mechanics"],
  },
  {
    id: "inv-subscription-closing",
    title: "Subscription and Issuance - Closing Process",
    keywords: ["closing process"],
  },
  {
    id: "inv-rep-company-authority",
    title: "Representations - Company Incorporation and Authority",
    keywords: ["incorporation", "authority"],
  },
  {
    id: "inv-rep-company-litigation",
    title: "Representations - Company No Litigation",
    keywords: ["no litigation"],
  },
  {
    id: "inv-rep-company-financials",
    title: "Representations - Company Financial Statements Accuracy",
    keywords: ["financial statements accuracy"],
  },
  {
    id: "inv-rep-company-ip",
    title: "Representations - Company IP Ownership",
    keywords: ["ownership of ip"],
  },
  {
    id: "inv-rep-founder-shares",
    title: "Representations - Founder Ownership of Shares",
    keywords: ["ownership of shares"],
  },
  {
    id: "inv-rep-founder-encumbrances",
    title: "Representations - Founder No Encumbrances",
    keywords: ["no encumbrances"],
  },
  {
    id: "inv-rep-founder-no-competing",
    title: "Representations - Founder No Competing Business",
    keywords: ["no competing business"],
  },
  {
    id: "inv-cov-positive-reports",
    title: "Covenants - Positive - Financial Reports",
    keywords: ["provide financial reports"],
  },
  {
    id: "inv-cov-positive-insurance",
    title: "Covenants - Positive - Maintain Insurance",
    keywords: ["maintain insurance"],
  },
  {
    id: "inv-cov-positive-law",
    title: "Covenants - Positive - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "inv-cov-negative-shares",
    title: "Covenants - Negative - No New Shares Without Consent",
    keywords: ["no issuance of new shares without consent"],
  },
  {
    id: "inv-cov-negative-borrowing",
    title: "Covenants - Negative - No Major Borrowing",
    keywords: ["no major borrowing"],
  },
  {
    id: "inv-cov-negative-assets",
    title: "Covenants - Negative - No Asset Disposal",
    keywords: ["no asset disposal"],
  },
  {
    id: "inv-governance-board",
    title: "Governance Rights - Board Seats",
    keywords: ["board seats"],
  },
  {
    id: "inv-governance-observer",
    title: "Governance Rights - Observer Rights",
    keywords: ["observer rights"],
  },
  {
    id: "inv-governance-voting",
    title: "Governance Rights - Voting Rights",
    keywords: ["voting rights"],
  },
  {
    id: "inv-governance-reserved",
    title: "Governance Rights - Reserved Matters",
    keywords: ["reserved matters"],
  },
  {
    id: "inv-info-financials",
    title: "Information Rights - Financial Statements",
    keywords: ["financial statements"],
  },
  {
    id: "inv-info-budgets",
    title: "Information Rights - Annual Budgets",
    keywords: ["annual budgets"],
  },
  { id: "inv-info-audit", title: "Information Rights - Audit Rights", keywords: ["audit rights"] },
  {
    id: "inv-antidilution-weighted",
    title: "Anti-Dilution - Weighted Average",
    keywords: ["weighted average formula"],
  },
  {
    id: "inv-antidilution-ratchet",
    title: "Anti-Dilution - Full Ratchet",
    keywords: ["full ratchet"],
  },
  {
    id: "inv-preemption",
    title: "Pre-Emption Rights",
    keywords: ["participate in future share issues"],
  },
  {
    id: "inv-tag-along",
    title: "Tag-Along Rights",
    keywords: ["tag-along", "minority protection"],
  },
  {
    id: "inv-drag-along",
    title: "Drag-Along Rights",
    keywords: ["drag-along", "majority exit mechanism"],
  },
  { id: "inv-dividend-policy", title: "Dividend Policy", keywords: ["dividend policy"] },
  { id: "inv-exit-ipo", title: "Exit Rights - IPO", keywords: ["ipo"] },
  { id: "inv-exit-trade-sale", title: "Exit Rights - Trade Sale", keywords: ["trade sale"] },
  { id: "inv-exit-buyback", title: "Exit Rights - Buyback", keywords: ["buyback"] },
  {
    id: "inv-exit-put-call",
    title: "Exit Rights - Put and Call Options",
    keywords: ["put and call options"],
  },
  {
    id: "inv-founder-vesting-schedule",
    title: "Founder Vesting - Vesting Schedule",
    keywords: ["vesting schedule"],
  },
  {
    id: "inv-founder-vesting-clawback",
    title: "Founder Vesting - Clawback Mechanism",
    keywords: ["clawback mechanism"],
  },
  {
    id: "inv-founder-vesting-leaver",
    title: "Founder Vesting - Good/Bad Leaver",
    keywords: ["good leaver", "bad leaver"],
  },
  { id: "inv-confidentiality", title: "Confidentiality", keywords: ["confidentiality"] },
  {
    id: "inv-restrictive-during",
    title: "Non-Compete/Non-Solicitation - During Investment",
    keywords: ["during investment period"],
  },
  {
    id: "inv-restrictive-post",
    title: "Non-Compete/Non-Solicitation - Post Exit",
    keywords: ["post-exit restrictions"],
  },
  {
    id: "inv-restrictive-reasonable",
    title: "Non-Compete/Non-Solicitation - Reasonableness",
    keywords: ["reasonableness requirement"],
  },
  {
    id: "inv-indemnity-warranty",
    title: "Indemnities - Breach of Warranties",
    keywords: ["breach of warranties"],
  },
  { id: "inv-indemnity-tax", title: "Indemnities - Tax Indemnity", keywords: ["tax indemnity"] },
  {
    id: "inv-indemnity-specific",
    title: "Indemnities - Specific Risk Indemnities",
    keywords: ["specific risk indemnities"],
  },
  {
    id: "inv-liability-cap",
    title: "Limitation of Liability - Liability Caps",
    keywords: ["liability caps"],
  },
  {
    id: "inv-liability-time",
    title: "Limitation of Liability - Time Limits for Claims",
    keywords: ["time limits for claims"],
  },
  {
    id: "inv-liability-de-minimis",
    title: "Limitation of Liability - De Minimis Thresholds",
    keywords: ["de minimis thresholds"],
  },
  {
    id: "inv-completion-mechanics",
    title: "Completion/Closing - Mechanics",
    keywords: ["completion mechanics"],
  },
  {
    id: "inv-completion-deliverables",
    title: "Completion/Closing - Deliverables",
    keywords: ["deliverables"],
  },
  {
    id: "inv-completion-certificates",
    title: "Completion/Closing - Share Certificates",
    keywords: ["share certificates"],
  },
  {
    id: "inv-completion-register-updates",
    title: "Completion/Closing - Register Updates",
    keywords: ["register updates"],
  },
  {
    id: "inv-reg-companies-act",
    title: "Regulatory Compliance - Companies Act",
    keywords: ["companies act"],
  },
  {
    id: "inv-reg-competition",
    title: "Regulatory Compliance - Competition Clearance",
    keywords: ["competition act"],
  },
  {
    id: "inv-reg-capital-markets",
    title: "Regulatory Compliance - Capital Markets",
    keywords: ["capital markets compliance"],
  },
  { id: "inv-tax-withholding", title: "Taxes - Withholding Tax", keywords: ["withholding tax"] },
  { id: "inv-tax-stamp-duty", title: "Taxes - Stamp Duty", keywords: ["stamp duty"] },
  { id: "inv-tax-cgt", title: "Taxes - Capital Gains Tax", keywords: ["capital gains tax"] },
  {
    id: "inv-assignment",
    title: "Assignment - Restrictions on Transfer",
    keywords: ["restrictions on transfer"],
  },
  {
    id: "inv-term-precompletion",
    title: "Termination - Before Completion",
    keywords: ["termination before completion"],
  },
  { id: "inv-term-longstop", title: "Termination - Long-Stop Date", keywords: ["long-stop date"] },
  {
    id: "inv-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "inv-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  { id: "inv-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "inv-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "inv-severability", title: "Severability", keywords: ["severability"] },
  { id: "inv-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "inv-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...INVESTMENT_ITEMS];

const template = createKenyaTemplate("investment_agreement", ITEMS);

export default template;
