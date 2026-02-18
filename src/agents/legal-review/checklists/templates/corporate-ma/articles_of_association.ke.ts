import { createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const ARTICLES_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "aoa-interpretation-definitions",
    title: "Interpretation - Definitions",
    keywords: ["definitions"],
  },
  {
    id: "aoa-interpretation-construction",
    title: "Interpretation - Rules of Construction",
    keywords: ["rules of construction"],
  },
  {
    id: "aoa-interpretation-companies-act",
    title: "Interpretation - References to Companies Act",
    keywords: ["companies act"],
  },
  {
    id: "aoa-capital-authorised",
    title: "Share Capital - Authorised Share Capital",
    keywords: ["authorised share capital"],
  },
  {
    id: "aoa-capital-classes",
    title: "Share Capital - Share Classes",
    keywords: ["share classes"],
  },
  {
    id: "aoa-capital-class-rights",
    title: "Share Capital - Class Rights",
    keywords: ["rights attached to each class"],
  },
  {
    id: "aoa-capital-variation-rights",
    title: "Share Capital - Variation of Class Rights",
    keywords: ["variation of class rights"],
  },
  {
    id: "aoa-issue-authority",
    title: "Issue of Shares - Authority to Allot",
    keywords: ["authority to allot shares"],
  },
  {
    id: "aoa-issue-preemption",
    title: "Issue of Shares - Pre-Emption Rights",
    keywords: ["pre-emption rights", "preemption rights"],
  },
  {
    id: "aoa-issue-premium",
    title: "Issue of Shares - Issue at Premium",
    keywords: ["issue at premium"],
  },
  {
    id: "aoa-issue-payment",
    title: "Issue of Shares - Payment Terms",
    keywords: ["payment terms"],
  },
  {
    id: "aoa-issue-companies-act",
    title: "Issue of Shares - Companies Act Compliance",
    keywords: ["companies act"],
  },
  {
    id: "aoa-certs-timeline",
    title: "Share Certificates - Issuance Timeline",
    keywords: ["issuance timeline"],
  },
  {
    id: "aoa-certs-replacement",
    title: "Share Certificates - Replacement of Lost Certificates",
    keywords: ["replacement of lost certificates"],
  },
  {
    id: "aoa-transfer-instrument",
    title: "Transfer of Shares - Instrument of Transfer",
    keywords: ["instrument of transfer"],
  },
  {
    id: "aoa-transfer-board-approval",
    title: "Transfer of Shares - Board Approval Requirements",
    keywords: ["board approval requirements"],
  },
  {
    id: "aoa-transfer-preemption",
    title: "Transfer of Shares - Pre-Emption Provisions",
    keywords: ["pre-emption provisions", "preemption provisions"],
  },
  {
    id: "aoa-transfer-refusal",
    title: "Transfer of Shares - Refusal of Registration",
    keywords: ["refusal of registration"],
  },
  {
    id: "aoa-transfer-customized",
    title: "Transfer of Shares - Private Company Customization",
    keywords: ["heavily customized in private companies"],
  },
  {
    id: "aoa-transmission-death",
    title: "Transmission of Shares - Death of Member",
    keywords: ["death of member"],
  },
  {
    id: "aoa-transmission-bankruptcy",
    title: "Transmission of Shares - Bankruptcy",
    keywords: ["bankruptcy"],
  },
  {
    id: "aoa-transmission-legal-reps",
    title: "Transmission of Shares - Legal Representatives",
    keywords: ["legal representatives"],
  },
  {
    id: "aoa-lien-unpaid",
    title: "Lien on Shares - Lien for Unpaid Amounts",
    keywords: ["company lien for unpaid amounts"],
  },
  {
    id: "aoa-lien-enforcement",
    title: "Lien on Shares - Enforcement",
    keywords: ["enforcement of lien"],
  },
  {
    id: "aoa-calls-unpaid-capital",
    title: "Calls on Shares - Payment of Unpaid Capital",
    keywords: ["payment of unpaid capital"],
  },
  {
    id: "aoa-calls-notice",
    title: "Calls on Shares - Notice Requirements",
    keywords: ["notice requirements"],
  },
  {
    id: "aoa-calls-forfeiture",
    title: "Calls on Shares - Forfeiture for Non-Payment",
    keywords: ["forfeiture for non-payment", "forfeiture for non payment"],
  },
  {
    id: "aoa-alteration-increase",
    title: "Alteration of Share Capital - Increase",
    keywords: ["increase of capital"],
  },
  {
    id: "aoa-alteration-consolidation",
    title: "Alteration of Share Capital - Consolidation",
    keywords: ["consolidation"],
  },
  {
    id: "aoa-alteration-subdivision",
    title: "Alteration of Share Capital - Subdivision",
    keywords: ["subdivision"],
  },
  {
    id: "aoa-alteration-reduction",
    title: "Alteration of Share Capital - Reduction",
    keywords: ["reduction of capital"],
  },
  { id: "aoa-meetings-agm", title: "General Meetings - AGM", keywords: ["annual general meeting"] },
  {
    id: "aoa-meetings-notice",
    title: "General Meetings - Notice Periods",
    keywords: ["notice periods"],
  },
  { id: "aoa-meetings-quorum", title: "General Meetings - Quorum", keywords: ["quorum"] },
  {
    id: "aoa-meetings-voting-procedure",
    title: "General Meetings - Voting Procedures",
    keywords: ["voting procedures"],
  },
  {
    id: "aoa-voting-show-hands",
    title: "Voting Rights - Show of Hands",
    keywords: ["show of hands"],
  },
  { id: "aoa-voting-poll", title: "Voting Rights - Poll", keywords: ["poll"] },
  { id: "aoa-voting-proxy", title: "Voting Rights - Proxy Voting", keywords: ["proxy voting"] },
  { id: "aoa-voting-casting", title: "Voting Rights - Casting Vote", keywords: ["casting vote"] },
  {
    id: "aoa-directors-appointment",
    title: "Directors - Appointment",
    keywords: ["appointment of directors"],
  },
  { id: "aoa-directors-removal", title: "Directors - Removal", keywords: ["removal of directors"] },
  { id: "aoa-directors-rotation", title: "Directors - Rotation", keywords: ["rotation"] },
  {
    id: "aoa-directors-alternate",
    title: "Directors - Alternate Directors",
    keywords: ["alternate directors"],
  },
  {
    id: "aoa-powers-management",
    title: "Powers of Directors - Management Authority",
    keywords: ["management authority"],
  },
  {
    id: "aoa-powers-borrowing",
    title: "Powers of Directors - Borrowing Powers",
    keywords: ["borrowing powers"],
  },
  {
    id: "aoa-powers-delegation",
    title: "Powers of Directors - Delegation",
    keywords: ["delegation of authority"],
  },
  {
    id: "aoa-proceedings-meetings",
    title: "Proceedings of Directors - Board Meetings",
    keywords: ["board meetings"],
  },
  {
    id: "aoa-proceedings-quorum",
    title: "Proceedings of Directors - Quorum",
    keywords: ["quorum"],
  },
  {
    id: "aoa-proceedings-written",
    title: "Proceedings of Directors - Written Resolutions",
    keywords: ["resolutions in writing"],
  },
  {
    id: "aoa-conflict-disclosure",
    title: "Conflict of Interest - Disclosure",
    keywords: ["disclosure obligations"],
  },
  {
    id: "aoa-conflict-voting-restrictions",
    title: "Conflict of Interest - Voting Restrictions",
    keywords: ["voting restrictions"],
  },
  {
    id: "aoa-dividends-declaration",
    title: "Dividends and Reserves - Declaration",
    keywords: ["declaration of dividends"],
  },
  {
    id: "aoa-dividends-interim",
    title: "Dividends and Reserves - Interim Dividends",
    keywords: ["interim dividends"],
  },
  {
    id: "aoa-dividends-reserves",
    title: "Dividends and Reserves - Creation of Reserves",
    keywords: ["creation of reserves"],
  },
  {
    id: "aoa-accounts-financials",
    title: "Accounts and Audit - Financial Statements",
    keywords: ["financial statements"],
  },
  {
    id: "aoa-accounts-audit",
    title: "Accounts and Audit - Audit Requirements",
    keywords: ["audit requirements"],
  },
  {
    id: "aoa-accounts-records",
    title: "Accounts and Audit - Access to Records",
    keywords: ["access to records"],
  },
  {
    id: "aoa-notices-service",
    title: "Notices - Method of Service",
    keywords: ["method of service"],
  },
  {
    id: "aoa-notices-electronic",
    title: "Notices - Electronic Communication",
    keywords: ["electronic communication"],
  },
  {
    id: "aoa-indemnity-directors",
    title: "Indemnity of Directors - Indemnification",
    keywords: ["indemnification"],
  },
  {
    id: "aoa-indemnity-directors-insurance",
    title: "Indemnity of Directors - Directors Insurance",
    keywords: ["insurance for directors"],
  },
  { id: "aoa-seal", title: "Company Seal (If Applicable)", keywords: ["company seal"] },
  {
    id: "aoa-winding-up-distribution",
    title: "Winding Up - Distribution of Assets",
    keywords: ["distribution of assets"],
  },
  {
    id: "aoa-winding-up-priority",
    title: "Winding Up - Priority Rules",
    keywords: ["priority rules"],
  },
  {
    id: "aoa-variation-special-resolution",
    title: "Variation of Articles - Special Resolution",
    keywords: ["special resolution requirement"],
  },
  {
    id: "aoa-variation-companies-act",
    title: "Variation of Articles - Companies Act Amendment Compliance",
    keywords: ["amendment procedures under the companies act"],
  },
];

const ITEMS: ChecklistTemplateItem[] = [...ARTICLES_ITEMS];

const template = createKenyaTemplate("articles_of_association", ITEMS);

export default template;
