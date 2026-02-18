import { createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const JOINT_VENTURE_ITEMS: ChecklistTemplateItem[] = [
  { id: "jv-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "jv-parties-registration",
    title: "Parties - Registration Numbers",
    keywords: ["registration numbers"],
  },
  {
    id: "jv-parties-address",
    title: "Parties - Addresses",
    keywords: ["addresses", "registered address"],
  },
  {
    id: "jv-parties-authorized",
    title: "Parties - Authorized Representatives",
    keywords: ["authorized representatives"],
  },
  {
    id: "jv-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  { id: "jv-purpose-scope", title: "Purpose - Scope of Project", keywords: ["scope of project"] },
  {
    id: "jv-purpose-objectives",
    title: "Purpose - Business Objectives",
    keywords: ["business objectives"],
  },
  {
    id: "jv-purpose-specific-project",
    title: "Purpose - Specific Project",
    keywords: ["specific project", "infrastructure", "real estate", "tender"],
  },
  {
    id: "jv-structure-type",
    title: "Structure - Contractual vs Incorporated JV",
    keywords: ["contractual jv", "incorporated jv"],
  },
  {
    id: "jv-structure-spv",
    title: "Structure - SPV Formation",
    keywords: ["special purpose vehicle", "spv"],
  },
  {
    id: "jv-structure-shareholding",
    title: "Structure - Shareholding",
    keywords: ["shareholding structure"],
  },
  {
    id: "jv-structure-companies-act",
    title: "Structure - Companies Act Compliance",
    keywords: ["companies act"],
  },
  {
    id: "jv-capital-initial",
    title: "Capital Contributions - Initial",
    keywords: ["initial contributions", "cash", "assets", "services"],
  },
  {
    id: "jv-capital-timing",
    title: "Capital Contributions - Timing",
    keywords: ["timing of contributions"],
  },
  {
    id: "jv-capital-additional",
    title: "Capital Contributions - Additional Funding",
    keywords: ["additional funding obligations"],
  },
  {
    id: "jv-capital-default",
    title: "Capital Contributions - Default in Funding",
    keywords: ["default in funding"],
  },
  {
    id: "jv-ownership-equity",
    title: "Ownership and Profit Sharing - Equity Split",
    keywords: ["equity split"],
  },
  {
    id: "jv-ownership-profit-ratio",
    title: "Ownership and Profit Sharing - Profit Ratio",
    keywords: ["profit-sharing ratio", "profit sharing ratio"],
  },
  {
    id: "jv-ownership-loss-allocation",
    title: "Ownership and Profit Sharing - Loss Allocation",
    keywords: ["loss allocation"],
  },
  {
    id: "jv-ownership-partnership-default",
    title: "Ownership and Profit Sharing - Partnership Act Default Rule",
    keywords: ["partnership", "equal sharing", "partnership act"],
  },
  {
    id: "jv-governance-board",
    title: "Governance and Management - Board Composition",
    keywords: ["board composition"],
  },
  {
    id: "jv-governance-committee",
    title: "Governance and Management - Management Committee",
    keywords: ["management committee"],
  },
  {
    id: "jv-governance-voting",
    title: "Governance and Management - Voting Rights",
    keywords: ["voting rights"],
  },
  {
    id: "jv-governance-reserved",
    title: "Governance and Management - Reserved Matters",
    keywords: ["reserved matters"],
  },
  {
    id: "jv-governance-quorum",
    title: "Governance and Management - Quorum",
    keywords: ["quorum requirements"],
  },
  {
    id: "jv-roles-division",
    title: "Roles and Responsibilities - Division",
    keywords: ["division of responsibilities"],
  },
  {
    id: "jv-roles-lead",
    title: "Roles and Responsibilities - Lead Partner",
    keywords: ["lead partner designation"],
  },
  {
    id: "jv-roles-technical",
    title: "Roles and Responsibilities - Technical Obligations",
    keywords: ["technical obligations"],
  },
  {
    id: "jv-roles-operational",
    title: "Roles and Responsibilities - Operational Duties",
    keywords: ["operational duties"],
  },
  {
    id: "jv-decision-ordinary",
    title: "Decision-Making - Ordinary Decisions",
    keywords: ["ordinary decisions"],
  },
  {
    id: "jv-decision-reserved-unanimous",
    title: "Decision-Making - Reserved Matters (Unanimous)",
    keywords: ["reserved matters", "unanimous consent"],
  },
  {
    id: "jv-decision-deadlock",
    title: "Decision-Making - Deadlock Resolution",
    keywords: ["deadlock resolution"],
  },
  {
    id: "jv-deadlock-escalation",
    title: "Deadlock Mechanism - Escalation",
    keywords: ["escalation"],
  },
  { id: "jv-deadlock-mediation", title: "Deadlock Mechanism - Mediation", keywords: ["mediation"] },
  {
    id: "jv-deadlock-buysell",
    title: "Deadlock Mechanism - Buy-Sell",
    keywords: ["buy-sell mechanism", "buy sell"],
  },
  {
    id: "jv-deadlock-shotgun",
    title: "Deadlock Mechanism - Shotgun",
    keywords: ["shotgun clause"],
  },
  {
    id: "jv-deadlock-arbitration",
    title: "Deadlock Mechanism - Arbitration",
    keywords: ["arbitration"],
  },
  {
    id: "jv-banking-account",
    title: "Funding and Banking - JV Bank Account",
    keywords: ["jv bank account", "bank account"],
  },
  {
    id: "jv-banking-signatories",
    title: "Funding and Banking - Authorized Signatories",
    keywords: ["authorized signatories"],
  },
  {
    id: "jv-banking-borrowing",
    title: "Funding and Banking - Borrowing Authority",
    keywords: ["borrowing authority"],
  },
  {
    id: "jv-banking-controls",
    title: "Funding and Banking - Financial Controls",
    keywords: ["financial controls"],
  },
  {
    id: "jv-ip-preexisting",
    title: "Intellectual Property - Pre-Existing IP",
    keywords: ["pre-existing ip ownership", "pre existing ip"],
  },
  {
    id: "jv-ip-developed",
    title: "Intellectual Property - JV-Developed IP",
    keywords: ["ip developed during jv"],
  },
  {
    id: "jv-ip-licensing",
    title: "Intellectual Property - Licensing Rights",
    keywords: ["licensing rights"],
  },
  { id: "jv-confidentiality", title: "Confidentiality", keywords: ["confidentiality"] },
  {
    id: "jv-restrictive-during",
    title: "Non-Compete and Non-Solicitation - During JV",
    keywords: ["restrictions during jv", "non-compete"],
  },
  {
    id: "jv-restrictive-post",
    title: "Non-Compete and Non-Solicitation - Post-Termination",
    keywords: ["post-termination restrictions", "post termination"],
  },
  {
    id: "jv-restrictive-reasonable",
    title: "Non-Compete and Non-Solicitation - Reasonableness",
    keywords: ["reasonable in scope", "enforceable"],
  },
  {
    id: "jv-warranty-authority",
    title: "Representations and Warranties - Authority",
    keywords: ["authority to enter agreement"],
  },
  {
    id: "jv-warranty-financial",
    title: "Representations and Warranties - Financial Capacity",
    keywords: ["financial capacity"],
  },
  {
    id: "jv-warranty-compliance",
    title: "Representations and Warranties - Regulatory Compliance",
    keywords: ["regulatory compliance"],
  },
  {
    id: "jv-compliance-approvals",
    title: "Compliance with Laws - Regulatory Approvals",
    keywords: ["regulatory approvals"],
  },
  {
    id: "jv-compliance-environment",
    title: "Compliance with Laws - Environmental",
    keywords: ["environmental compliance"],
  },
  { id: "jv-compliance-tax", title: "Compliance with Laws - Tax", keywords: ["tax compliance"] },
  {
    id: "jv-compliance-competition",
    title: "Compliance with Laws - Competition Clearance",
    keywords: ["competition clearance", "competition act"],
  },
  {
    id: "jv-procurement-tender",
    title: "Public Procurement Compliance - Tender",
    keywords: ["tender compliance"],
  },
  {
    id: "jv-procurement-anticorruption",
    title: "Public Procurement Compliance - Anti-Corruption",
    keywords: ["anti-corruption representations", "anti corruption"],
  },
  {
    id: "jv-procurement-conflict",
    title: "Public Procurement Compliance - Conflict of Interest",
    keywords: ["conflict of interest disclosures"],
  },
  {
    id: "jv-procurement-ppada",
    title: "Public Procurement Compliance - PPADA",
    keywords: ["public procurement and asset disposal act"],
  },
  { id: "jv-indemnity-breach", title: "Indemnities - Breach", keywords: ["breach indemnity"] },
  {
    id: "jv-indemnity-third-party",
    title: "Indemnities - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  {
    id: "jv-indemnity-regulatory",
    title: "Indemnities - Regulatory Fines",
    keywords: ["regulatory fines"],
  },
  {
    id: "jv-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "jv-liability-indirect-loss",
    title: "Limitation of Liability - Indirect Loss Exclusion",
    keywords: ["exclusion of indirect loss", "indirect loss"],
  },
  {
    id: "jv-liability-fraud-carveout",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  { id: "jv-term-duration", title: "Term - Duration", keywords: ["duration"] },
  {
    id: "jv-term-project-completion",
    title: "Term - Project Completion Trigger",
    keywords: ["project completion trigger"],
  },
  {
    id: "jv-termination-breach",
    title: "Termination - Breach",
    keywords: ["termination for breach"],
  },
  { id: "jv-termination-insolvency", title: "Termination - Insolvency", keywords: ["insolvency"] },
  {
    id: "jv-termination-completion",
    title: "Termination - Completion of Project",
    keywords: ["completion of project"],
  },
  { id: "jv-termination-mutual", title: "Termination - Mutual", keywords: ["mutual termination"] },
  {
    id: "jv-exit-transfer",
    title: "Exit and Transfer - Transfer of JV Interest",
    keywords: ["transfer of jv interest"],
  },
  {
    id: "jv-exit-preemption",
    title: "Exit and Transfer - Pre-Emption Rights",
    keywords: ["pre-emption rights", "preemption rights"],
  },
  {
    id: "jv-exit-valuation",
    title: "Exit and Transfer - Valuation Method",
    keywords: ["valuation method"],
  },
  {
    id: "jv-exit-buyout",
    title: "Exit and Transfer - Buy-Out Mechanism",
    keywords: ["buy-out mechanism", "buyout mechanism"],
  },
  {
    id: "jv-dissolution-trigger",
    title: "Dissolution and Winding Up - Trigger Events",
    keywords: ["trigger events"],
  },
  {
    id: "jv-dissolution-assets",
    title: "Dissolution and Winding Up - Asset Distribution",
    keywords: ["asset distribution"],
  },
  {
    id: "jv-dissolution-liability",
    title: "Dissolution and Winding Up - Liability Settlement",
    keywords: ["liability settlement"],
  },
  {
    id: "jv-dispute-escalation",
    title: "Dispute Resolution - Escalation",
    keywords: ["escalation mechanism"],
  },
  { id: "jv-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "jv-dispute-arbitration",
    title: "Dispute Resolution - Arbitration",
    keywords: ["arbitration", "commercial jvs"],
  },
  {
    id: "jv-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  { id: "jv-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  { id: "jv-assignment", title: "Assignment", keywords: ["assignment"] },
  { id: "jv-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "jv-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "jv-severability", title: "Severability", keywords: ["severability"] },
  { id: "jv-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "jv-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...JOINT_VENTURE_ITEMS];

const template = createKenyaTemplate("joint_venture_agreement", ITEMS);

export default template;
