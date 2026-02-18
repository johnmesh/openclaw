import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const SHAREHOLDERS_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "sh-parties",
    title: "Parties - Names of Shareholders",
    keywords: ["shareholders", "parties"],
  },
  { id: "sh-parties-company", title: "Parties - Company", keywords: ["company"] },
  {
    id: "sh-company-details",
    title: "Company Details (CR12/Registered Office)",
    keywords: ["cr12", "company details", "registered office"],
  },
  {
    id: "sh-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "sh-purpose",
    title: "Purpose of Agreement",
    keywords: ["business objectives", "relationship between shareholders", "governance framework"],
  },
  {
    id: "sh-purpose-company",
    title: "Purpose of the Company",
    keywords: ["purpose of the company"],
  },
  {
    id: "sh-capital-issued",
    title: "Share Capital - Issued Capital",
    keywords: ["issued share capital"],
  },
  {
    id: "sh-capital-classes",
    title: "Share Capital - Share Classes",
    keywords: ["ordinary shares", "preference shares", "share classes"],
  },
  {
    id: "sh-capital-percentages",
    title: "Share Capital - Shareholding Percentages",
    keywords: ["shareholding percentages"],
  },
  {
    id: "sh-capital-rights",
    title: "Share Capital - Rights Attached to Shares",
    keywords: ["rights attached to shares"],
  },
  {
    id: "sh-capital-articles-alignment",
    title: "Share Capital - Alignment with Articles/Companies Act",
    keywords: ["articles of association", "companies act"],
  },
  { id: "sh-governance-board-size", title: "Governance - Board Size", keywords: ["board size"] },
  {
    id: "sh-governance-directors",
    title: "Governance - Appointment/Removal of Directors",
    keywords: ["appointment of directors", "removal of directors"],
  },
  { id: "sh-governance-quorum", title: "Governance - Quorum", keywords: ["quorum requirements"] },
  {
    id: "sh-governance-chair",
    title: "Governance - Chairperson Role",
    keywords: ["chairperson role"],
  },
  {
    id: "sh-governance-voting",
    title: "Governance - Board Voting",
    keywords: ["board voting rules"],
  },
  {
    id: "sh-reserved-shares",
    title: "Reserved Matters - New Share Issuance",
    keywords: ["issuing new shares"],
  },
  {
    id: "sh-reserved-borrowing",
    title: "Reserved Matters - Borrowing Threshold",
    keywords: ["borrowing above"],
  },
  {
    id: "sh-reserved-assets",
    title: "Reserved Matters - Disposal of Major Assets",
    keywords: ["disposal of major assets"],
  },
  {
    id: "sh-reserved-business",
    title: "Reserved Matters - Change of Business",
    keywords: ["change of business"],
  },
  {
    id: "sh-reserved-articles",
    title: "Reserved Matters - Amendment to Articles",
    keywords: ["amendments to articles"],
  },
  {
    id: "sh-reserved-dividend",
    title: "Reserved Matters - Dividend Declaration",
    keywords: ["dividend declaration"],
  },
  {
    id: "sh-reserved-ma",
    title: "Reserved Matters - Mergers/Acquisitions",
    keywords: ["mergers", "acquisitions"],
  },
  {
    id: "sh-transfer-restrictions",
    title: "Share Transfers - Restrictions",
    keywords: ["restrictions on transfer"],
  },
  {
    id: "sh-transfer-preemption",
    title: "Share Transfers - Pre-emption Rights",
    keywords: ["pre-emption rights", "preemption rights"],
  },
  {
    id: "sh-transfer-rofr",
    title: "Share Transfers - ROFR",
    keywords: ["right of first refusal", "rofr"],
  },
  {
    id: "sh-transfer-tag",
    title: "Share Transfers - Tag-Along",
    keywords: ["tag-along", "tag along"],
  },
  {
    id: "sh-transfer-drag",
    title: "Share Transfers - Drag-Along",
    keywords: ["drag-along", "drag along"],
  },
  {
    id: "sh-transfer-permitted",
    title: "Share Transfers - Permitted Transfers",
    keywords: ["permitted transfers"],
  },
  {
    id: "sh-transfer-companies-act",
    title: "Share Transfers - Companies Act Compliance",
    keywords: ["companies act", "share transfer rules"],
  },
  {
    id: "sh-funding-future",
    title: "Capital/Funding - Future Capital Requirements",
    keywords: ["future capital requirements"],
  },
  {
    id: "sh-funding-loans",
    title: "Capital/Funding - Shareholder Loans",
    keywords: ["shareholder loans"],
  },
  {
    id: "sh-funding-preemption",
    title: "Capital/Funding - Pre-Emption on New Issues",
    keywords: ["pre-emption rights", "preemption rights"],
  },
  {
    id: "sh-funding-obligations",
    title: "Capital/Funding - Funding Obligations",
    keywords: ["funding obligations"],
  },
  {
    id: "sh-funding-dilution",
    title: "Capital/Funding - Dilution Provisions",
    keywords: ["dilution provisions"],
  },
  {
    id: "sh-dividends-policy",
    title: "Dividend Policy",
    keywords: ["dividend declaration", "dividend policy"],
  },
  {
    id: "sh-dividends-retained",
    title: "Dividends - Retained Earnings",
    keywords: ["retained earnings"],
  },
  {
    id: "sh-dividends-timing",
    title: "Dividends - Distribution Timing",
    keywords: ["distribution timing"],
  },
  {
    id: "sh-ops-ceo",
    title: "Management/Operations - CEO Appointment",
    keywords: ["ceo appointment"],
  },
  {
    id: "sh-ops-key-management",
    title: "Management/Operations - Key Roles",
    keywords: ["key management roles"],
  },
  {
    id: "sh-ops-authority-limits",
    title: "Management/Operations - Authority Limits",
    keywords: ["authority limits"],
  },
  {
    id: "sh-ops-business-plan",
    title: "Management/Operations - Business Plan Approval",
    keywords: ["business plans approval"],
  },
  {
    id: "sh-info-financial",
    title: "Information Rights - Financial Reporting",
    keywords: ["financial reporting"],
  },
  {
    id: "sh-info-budgets",
    title: "Information Rights - Annual Budgets",
    keywords: ["annual budgets"],
  },
  {
    id: "sh-info-audit",
    title: "Information Rights - Audit Requirements",
    keywords: ["audit requirements"],
  },
  {
    id: "sh-info-records",
    title: "Information Rights - Access to Records",
    keywords: ["access to records"],
  },
  {
    id: "sh-deadlock-escalation",
    title: "Deadlock Resolution - Escalation",
    keywords: ["deadlock", "escalation mechanism"],
  },
  {
    id: "sh-deadlock-mediation",
    title: "Deadlock Resolution - Mediation",
    keywords: ["mediation"],
  },
  {
    id: "sh-deadlock-buysell",
    title: "Deadlock Resolution - Buy-Sell",
    keywords: ["buy-sell mechanism", "buy sell"],
  },
  {
    id: "sh-deadlock-shotgun",
    title: "Deadlock Resolution - Shotgun",
    keywords: ["shotgun clause"],
  },
  {
    id: "sh-deadlock-russian",
    title: "Deadlock Resolution - Russian Roulette/Texas Shoot-Out",
    keywords: ["russian roulette", "texas shoot-out", "texas shoot out"],
  },
  { id: "sh-deadlock-arb", title: "Deadlock Resolution - Arbitration", keywords: ["arbitration"] },
  { id: "sh-exit-ipo", title: "Exit - IPO", keywords: ["ipo"] },
  { id: "sh-exit-trade-sale", title: "Exit - Trade Sale", keywords: ["trade sale"] },
  { id: "sh-exit-buyback", title: "Exit - Buyback", keywords: ["buyback"] },
  { id: "sh-exit-buyout", title: "Exit - Buyout", keywords: ["buyout"] },
  {
    id: "sh-exit-putcall",
    title: "Exit - Put/Call Options",
    keywords: ["put option", "call option"],
  },
  { id: "sh-exit-liquidation", title: "Exit - Liquidation", keywords: ["liquidation"] },
  { id: "sh-valuation-formula", title: "Valuation - Formula", keywords: ["valuation formula"] },
  {
    id: "sh-valuation-valuer",
    title: "Valuation - Independent Valuer",
    keywords: ["independent valuer"],
  },
  {
    id: "sh-valuation-fmv",
    title: "Valuation - Fair Market Value",
    keywords: ["fair market value"],
  },
  {
    id: "sh-restrictive-during",
    title: "Non-Compete/Non-Solicit - During Shareholding",
    keywords: ["during shareholding"],
  },
  {
    id: "sh-restrictive-post",
    title: "Non-Compete/Non-Solicit - Post Exit",
    keywords: ["post-exit restrictions", "post exit"],
  },
  {
    id: "sh-restrictive-reasonable",
    title: "Non-Compete/Non-Solicit - Reasonableness",
    keywords: ["reasonable in scope", "reasonable in duration"],
  },
  { id: "sh-confidentiality", title: "Confidentiality", keywords: ["confidentiality"] },
  {
    id: "sh-founder-vesting",
    title: "Founder Provisions - Vesting Schedule",
    keywords: ["vesting schedule"],
  },
  {
    id: "sh-founder-leaver",
    title: "Founder Provisions - Good/Bad Leaver",
    keywords: ["good leaver", "bad leaver"],
  },
  {
    id: "sh-founder-clawback",
    title: "Founder Provisions - Clawback",
    keywords: ["clawback mechanism"],
  },
  {
    id: "sh-ip-ownership",
    title: "Intellectual Property - Ownership",
    keywords: ["ownership of ip", "ip ownership"],
  },
  {
    id: "sh-ip-founder-assignment",
    title: "Intellectual Property - Founder Assignment",
    keywords: ["assignment of ip by founders"],
  },
  {
    id: "sh-warranty-authority",
    title: "Warranties - Authority to Enter",
    keywords: ["authority to enter agreement"],
  },
  {
    id: "sh-warranty-share-ownership",
    title: "Warranties - Ownership of Shares",
    keywords: ["ownership of shares"],
  },
  {
    id: "sh-warranty-no-encumbrance",
    title: "Warranties - No Encumbrances",
    keywords: ["no encumbrances"],
  },
  { id: "sh-indemnity-breach", title: "Indemnities - Breach", keywords: ["breach indemnities"] },
  {
    id: "sh-indemnity-risk",
    title: "Indemnities - Specific Risk Allocation",
    keywords: ["specific risk allocation"],
  },
  {
    id: "sh-dispute-governing-law",
    title: "Dispute Resolution - Governing Law Kenya",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "sh-dispute-arbitration",
    title: "Dispute Resolution - Arbitration",
    keywords: ["arbitration clause"],
  },
  {
    id: "sh-dispute-jurisdiction",
    title: "Dispute Resolution - Jurisdiction",
    keywords: ["jurisdiction"],
  },
  { id: "sh-term-duration", title: "Term and Termination - Duration", keywords: ["duration"] },
  {
    id: "sh-term-events",
    title: "Term and Termination - Events",
    keywords: ["events of termination"],
  },
  {
    id: "sh-term-effect",
    title: "Term and Termination - Effect",
    keywords: ["effect of termination"],
  },
  {
    id: "sh-term-survival",
    title: "Term and Termination - Survival Clauses",
    keywords: ["survival clauses"],
  },
  {
    id: "sh-amendment-threshold",
    title: "Amendment - Consent Threshold",
    keywords: ["required consent threshold"],
  },
  {
    id: "sh-amendment-written",
    title: "Amendment - Written Only",
    keywords: ["written amendments only", "written amendment"],
  },
  { id: "sh-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "sh-assignment", title: "Assignment", keywords: ["assignment"] },
  { id: "sh-severability", title: "Severability", keywords: ["severability"] },
  { id: "sh-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "sh-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...SHAREHOLDERS_ITEMS];

const template = createKenyaTemplate("shareholders_agreement", ITEMS);

export default template;
