import { createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const FOUNDERS_ITEMS: ChecklistTemplateItem[] = [
  { id: "fnd-parties-names", title: "Parties - Founder Names", keywords: ["names of founders"] },
  { id: "fnd-parties-id", title: "Parties - ID Numbers", keywords: ["id numbers"] },
  { id: "fnd-parties-addresses", title: "Parties - Addresses", keywords: ["addresses"] },
  {
    id: "fnd-parties-shareholding",
    title: "Parties - Shareholding Percentages",
    keywords: ["shareholding percentages"],
  },
  {
    id: "fnd-purpose-objectives",
    title: "Purpose of Company - Business Objectives",
    keywords: ["business objectives"],
  },
  {
    id: "fnd-purpose-vision",
    title: "Purpose of Company - Vision and Scope",
    keywords: ["vision", "scope"],
  },
  {
    id: "fnd-share-initial-allocation",
    title: "Share Ownership - Initial Allocation",
    keywords: ["initial share allocation"],
  },
  {
    id: "fnd-share-classes",
    title: "Share Ownership - Share Classes",
    keywords: ["share classes"],
  },
  {
    id: "fnd-share-capital-contribution",
    title: "Share Ownership - Capital Contributions",
    keywords: ["capital contribution", "cash", "ip", "services"],
  },
  {
    id: "fnd-share-companies-act",
    title: "Share Ownership - Companies Act Issuance Compliance",
    keywords: ["companies act"],
  },
  {
    id: "fnd-vesting-schedule",
    title: "Vesting - Vesting Schedule",
    keywords: ["vesting schedule", "4 years"],
  },
  { id: "fnd-vesting-cliff", title: "Vesting - Cliff Period", keywords: ["cliff period"] },
  {
    id: "fnd-vesting-acceleration",
    title: "Vesting - Acceleration on Exit",
    keywords: ["acceleration upon exit"],
  },
  {
    id: "fnd-vesting-clawback",
    title: "Vesting - Clawback Provisions",
    keywords: ["clawback provisions"],
  },
  {
    id: "fnd-vesting-critical",
    title: "Vesting - Startup Criticality",
    keywords: ["critical in startups"],
  },
  {
    id: "fnd-roles-founder-roles",
    title: "Roles and Responsibilities - Founder Roles",
    keywords: ["founder roles"],
  },
  {
    id: "fnd-roles-management",
    title: "Roles and Responsibilities - Management Structure",
    keywords: ["management structure"],
  },
  {
    id: "fnd-roles-time",
    title: "Roles and Responsibilities - Time Commitment",
    keywords: ["time commitment"],
  },
  {
    id: "fnd-decision-board",
    title: "Decision-Making - Board Composition",
    keywords: ["board composition"],
  },
  {
    id: "fnd-decision-voting",
    title: "Decision-Making - Voting Thresholds",
    keywords: ["voting thresholds"],
  },
  {
    id: "fnd-decision-reserved",
    title: "Decision-Making - Reserved Matters",
    keywords: ["reserved matters"],
  },
  {
    id: "fnd-capital-initial",
    title: "Capital Contributions - Initial Funding",
    keywords: ["initial funding"],
  },
  {
    id: "fnd-capital-future",
    title: "Capital Contributions - Future Funding Obligations",
    keywords: ["future funding obligations"],
  },
  {
    id: "fnd-capital-loans",
    title: "Capital Contributions - Shareholder Loans",
    keywords: ["shareholder loans"],
  },
  {
    id: "fnd-ip-assignment",
    title: "Intellectual Property - Assignment to Company",
    keywords: ["assignment of ip to company"],
  },
  {
    id: "fnd-ip-invention",
    title: "Intellectual Property - Invention Ownership",
    keywords: ["invention ownership"],
  },
  {
    id: "fnd-ip-moral-rights",
    title: "Intellectual Property - Moral Rights Waiver",
    keywords: ["moral rights waiver"],
  },
  {
    id: "fnd-ip-company-ownership",
    title: "Intellectual Property - Company Ownership Requirement",
    keywords: ["ip must belong to the company"],
  },
  { id: "fnd-confidentiality", title: "Confidentiality", keywords: ["confidentiality"] },
  {
    id: "fnd-restrictive-during",
    title: "Non-Compete/Non-Solicitation - During Involvement",
    keywords: ["during involvement"],
  },
  {
    id: "fnd-restrictive-post",
    title: "Non-Compete/Non-Solicitation - Post Departure",
    keywords: ["post-departure restrictions"],
  },
  {
    id: "fnd-restrictive-reasonable",
    title: "Non-Compete/Non-Solicitation - Reasonableness",
    keywords: ["reasonableness requirement"],
  },
  { id: "fnd-remuneration-salary", title: "Remuneration - Salary", keywords: ["salary"] },
  { id: "fnd-remuneration-dividends", title: "Remuneration - Dividends", keywords: ["dividends"] },
  {
    id: "fnd-remuneration-expenses",
    title: "Remuneration - Expense Reimbursement",
    keywords: ["expense reimbursement"],
  },
  {
    id: "fnd-remuneration-employment-act",
    title: "Remuneration - Employment Act Note",
    keywords: ["employment act"],
  },
  {
    id: "fnd-transfer-preemption",
    title: "Transfer of Shares - Pre-Emption Rights",
    keywords: ["pre-emption rights", "preemption rights"],
  },
  {
    id: "fnd-transfer-rofr",
    title: "Transfer of Shares - ROFR",
    keywords: ["right of first refusal", "rofr"],
  },
  {
    id: "fnd-transfer-tag",
    title: "Transfer of Shares - Tag-Along",
    keywords: ["tag-along rights", "tag along"],
  },
  {
    id: "fnd-transfer-drag",
    title: "Transfer of Shares - Drag-Along",
    keywords: ["drag-along rights", "drag along"],
  },
  {
    id: "fnd-leaver-good",
    title: "Good/Bad Leaver - Good Leaver Definition",
    keywords: ["good leaver"],
  },
  {
    id: "fnd-leaver-bad",
    title: "Good/Bad Leaver - Bad Leaver Definition",
    keywords: ["bad leaver"],
  },
  {
    id: "fnd-leaver-unvested",
    title: "Good/Bad Leaver - Unvested Shares Treatment",
    keywords: ["treatment of unvested shares"],
  },
  {
    id: "fnd-deadlock-escalation",
    title: "Deadlock Resolution - Escalation",
    keywords: ["escalation process"],
  },
  {
    id: "fnd-deadlock-mediation",
    title: "Deadlock Resolution - Mediation",
    keywords: ["mediation"],
  },
  {
    id: "fnd-deadlock-buysell",
    title: "Deadlock Resolution - Buy-Sell",
    keywords: ["buy-sell mechanism", "buy sell"],
  },
  { id: "fnd-exit-ipo", title: "Exit Strategy - IPO", keywords: ["ipo"] },
  { id: "fnd-exit-sale", title: "Exit Strategy - Sale of Company", keywords: ["sale of company"] },
  { id: "fnd-exit-buyback", title: "Exit Strategy - Buyback", keywords: ["buyback"] },
  { id: "fnd-indemnities", title: "Indemnities", keywords: ["indemnities"] },
  {
    id: "fnd-liability-limitation",
    title: "Limitation of Liability",
    keywords: ["limitation of liability"],
  },
  {
    id: "fnd-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "fnd-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  { id: "fnd-term-duration", title: "Term and Termination - Duration", keywords: ["duration"] },
  {
    id: "fnd-term-events",
    title: "Term and Termination - Events",
    keywords: ["termination events"],
  },
  {
    id: "fnd-term-survival",
    title: "Term and Termination - Survival Clauses",
    keywords: ["survival clauses"],
  },
  { id: "fnd-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "fnd-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "fnd-severability", title: "Severability", keywords: ["severability"] },
  { id: "fnd-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "fnd-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...FOUNDERS_ITEMS];

const template = createKenyaTemplate("founders_agreement", ITEMS);

export default template;
