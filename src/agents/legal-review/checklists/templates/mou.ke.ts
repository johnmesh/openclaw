import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const MOU_ITEMS: ChecklistTemplateItem[] = [
  { id: "mou-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "mou-parties-registration",
    title: "Parties - Registration Numbers",
    keywords: ["registration numbers"],
  },
  {
    id: "mou-parties-addresses",
    title: "Parties - Addresses",
    keywords: ["addresses", "registered address"],
  },
  {
    id: "mou-parties-authorized",
    title: "Parties - Authorized Representatives",
    keywords: ["authorized representatives"],
  },
  {
    id: "mou-background-purpose",
    title: "Background/Recitals - Purpose of Collaboration",
    keywords: ["purpose of collaboration"],
  },
  {
    id: "mou-background-context",
    title: "Background/Recitals - Relationship Context",
    keywords: ["context of relationship"],
  },
  {
    id: "mou-objectives-purpose",
    title: "Objectives - Purpose of the MOU",
    keywords: ["purpose of the mou"],
  },
  {
    id: "mou-objectives-scope",
    title: "Objectives - Scope of Intended Cooperation",
    keywords: ["scope of intended cooperation"],
  },
  {
    id: "mou-scope-activities",
    title: "Scope of Activities - Proposed Activities",
    keywords: ["description of proposed activities"],
  },
  {
    id: "mou-scope-responsibilities",
    title: "Scope of Activities - Responsibilities",
    keywords: ["responsibilities of each party"],
  },
  {
    id: "mou-scope-deliverables",
    title: "Scope of Activities - Deliverables",
    keywords: ["project deliverables"],
  },
  {
    id: "mou-roles-allocation",
    title: "Roles and Responsibilities - Task Allocation",
    keywords: ["allocation of tasks"],
  },
  {
    id: "mou-roles-lead-party",
    title: "Roles and Responsibilities - Lead Party",
    keywords: ["lead party designation"],
  },
  {
    id: "mou-roles-coordination",
    title: "Roles and Responsibilities - Coordination Structure",
    keywords: ["coordination structure"],
  },
  {
    id: "mou-financial-cost-sharing",
    title: "Financial Arrangements - Cost Sharing",
    keywords: ["cost-sharing arrangements", "cost sharing"],
  },
  {
    id: "mou-financial-funding",
    title: "Financial Arrangements - Funding Sources",
    keywords: ["funding sources"],
  },
  {
    id: "mou-financial-payment",
    title: "Financial Arrangements - Payment Terms",
    keywords: ["payment terms"],
  },
  {
    id: "mou-financial-budget",
    title: "Financial Arrangements - Budget Management",
    keywords: ["budget management"],
  },
  {
    id: "mou-financial-intent",
    title: "Financial Arrangements - Intent vs Binding Obligation",
    keywords: ["non-binding mou", "intent", "enforceable payment obligations"],
  },
  {
    id: "mou-governance-steering",
    title: "Governance and Management - Steering Committee",
    keywords: ["steering committee"],
  },
  {
    id: "mou-governance-reporting",
    title: "Governance and Management - Reporting",
    keywords: ["reporting obligations"],
  },
  {
    id: "mou-governance-decision",
    title: "Governance and Management - Decision-Making",
    keywords: ["decision-making process", "decision making process"],
  },
  {
    id: "mou-conf-definition",
    title: "Confidentiality - Definition",
    keywords: ["definition of confidential information"],
  },
  {
    id: "mou-conf-restrictions",
    title: "Confidentiality - Use Restrictions",
    keywords: ["use restrictions"],
  },
  { id: "mou-conf-duration", title: "Confidentiality - Duration", keywords: ["duration"] },
  {
    id: "mou-conf-binding",
    title: "Confidentiality - Binding Nature",
    keywords: ["often binding", "binding even if mou non-binding"],
  },
  {
    id: "mou-data-dpa",
    title: "Data Protection - Data Protection Act Compliance",
    keywords: ["data protection act"],
  },
  {
    id: "mou-data-handling",
    title: "Data Protection - Data Handling Responsibilities",
    keywords: ["data handling responsibilities"],
  },
  {
    id: "mou-data-security",
    title: "Data Protection - Security Obligations",
    keywords: ["security obligations"],
  },
  {
    id: "mou-ip-preexisting",
    title: "Intellectual Property - Pre-Existing IP Ownership",
    keywords: ["ownership of pre-existing ip", "pre existing ip"],
  },
  {
    id: "mou-ip-joint",
    title: "Intellectual Property - Jointly Developed IP",
    keywords: ["ownership of jointly developed ip"],
  },
  {
    id: "mou-ip-licensing",
    title: "Intellectual Property - Licensing Intentions",
    keywords: ["licensing intentions"],
  },
  {
    id: "mou-nonexclusive",
    title: "Non-Exclusivity",
    keywords: ["freedom to work with third parties", "non-exclusivity", "non exclusivity"],
  },
  {
    id: "mou-nonbinding-express",
    title: "Non-Binding Clause - Express Non-Binding Statement",
    keywords: ["not legally binding", "non-binding clause", "non binding clause"],
  },
  {
    id: "mou-nonbinding-binding-clauses",
    title: "Non-Binding Clause - Binding Clauses Carve-Out",
    keywords: ["which clauses are binding", "confidentiality", "dispute resolution"],
  },
  {
    id: "mou-nonbinding-law-of-contract-act",
    title: "Non-Binding Clause - Law of Contract Act Risk",
    keywords: ["law of contract act", "accidental enforceability"],
  },
  {
    id: "mou-term-effective-date",
    title: "Term and Termination - Effective Date",
    keywords: ["effective date"],
  },
  { id: "mou-term-duration", title: "Term and Termination - Duration", keywords: ["duration"] },
  {
    id: "mou-term-notice",
    title: "Term and Termination - Termination by Notice",
    keywords: ["termination by notice"],
  },
  {
    id: "mou-term-convenience",
    title: "Term and Termination - Convenience Termination",
    keywords: ["termination for convenience"],
  },
  {
    id: "mou-publicity-media",
    title: "Publicity and Announcements - Media Statements",
    keywords: ["media statements"],
  },
  {
    id: "mou-publicity-logos",
    title: "Publicity and Announcements - Use of Logos",
    keywords: ["use of logos"],
  },
  {
    id: "mou-dispute-escalation",
    title: "Dispute Resolution - Escalation",
    keywords: ["escalation mechanism"],
  },
  { id: "mou-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "mou-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  {
    id: "mou-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "mou-laws-regulatory",
    title: "Compliance with Laws - Regulatory Compliance",
    keywords: ["regulatory compliance"],
  },
  {
    id: "mou-laws-procurement",
    title: "Compliance with Laws - Public Procurement Compliance",
    keywords: ["public procurement compliance"],
  },
  { id: "mou-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  {
    id: "mou-assignment-restrictions",
    title: "Assignment - Restriction on Transfer",
    keywords: ["restriction on transfer"],
  },
  {
    id: "mou-entire-understanding",
    title: "Entire Understanding",
    keywords: ["document reflects mutual understanding", "entire understanding"],
  },
  {
    id: "mou-amendment-written",
    title: "Amendment - Written Amendments Only",
    keywords: ["written amendments only"],
  },
  { id: "mou-severability", title: "Severability", keywords: ["severability"] },
  { id: "mou-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "mou-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...MOU_ITEMS];

const template = createKenyaTemplate("mou", ITEMS);

export default template;
