import { CORPORATE_ITEMS, createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const AGENCY_ITEMS: ChecklistTemplateItem[] = [
  { id: "agent-parties", title: "Parties", keywords: ["principal", "agent", "parties"] },
  {
    id: "agent-parties-legal",
    title: "Parties - Legal Names",
    keywords: ["full legal name", "legal name"],
  },
  {
    id: "agent-parties-id",
    title: "Parties - Registration/ID Details",
    keywords: ["registration details", "id details", "passport"],
  },
  { id: "agent-parties-kra", title: "Parties - KRA PIN", keywords: ["kra pin"] },
  {
    id: "agent-parties-address",
    title: "Parties - Addresses",
    keywords: ["address", "registered address"],
  },
  {
    id: "agent-parties-company",
    title: "Parties - Company Details",
    keywords: ["company details", "registration number"],
  },
  {
    id: "agent-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "agent-appointment",
    title: "Appointment of Agent",
    keywords: ["appointment of agent", "appoint agent"],
  },
  { id: "agent-territory", title: "Territory", keywords: ["territory"] },
  {
    id: "agent-products-services",
    title: "Products/Services Covered",
    keywords: ["products", "services covered"],
  },
  {
    id: "agent-exclusive",
    title: "Exclusive/Non-Exclusive Appointment",
    keywords: ["exclusive", "non-exclusive"],
  },
  {
    id: "agent-exclusive-competition-act",
    title: "Exclusivity - Competition Act Compliance",
    keywords: ["competition act"],
  },
  {
    id: "agent-authority-scope",
    title: "Authority - Scope",
    keywords: ["scope of authority", "authority"],
  },
  {
    id: "agent-authority-negotiate",
    title: "Authority to Negotiate Contracts",
    keywords: ["authority to negotiate contracts"],
  },
  {
    id: "agent-authority-conclude",
    title: "Authority to Conclude Contracts",
    keywords: ["authority to conclude contracts"],
  },
  {
    id: "agent-authority-limits",
    title: "Authority Limits",
    keywords: ["authority limits", "limit of authority"],
  },
  {
    id: "agent-no-vary-terms",
    title: "No Authority to Vary Principal Terms",
    keywords: ["no authority to vary", "cannot vary terms"],
  },
  {
    id: "agent-relationship-independent",
    title: "Nature of Relationship - Independent Contractor",
    keywords: ["independent contractor clause", "independent contractor"],
  },
  {
    id: "agent-relationship-no-employment",
    title: "Nature of Relationship - No Employment Relationship",
    keywords: ["no employment relationship"],
  },
  {
    id: "agent-relationship-no-partnership",
    title: "Nature of Relationship - No Partnership Created",
    keywords: ["no partnership created"],
  },
  {
    id: "agent-relationship-employment-act",
    title: "Nature of Relationship - Employment Act Misclassification Risk",
    keywords: ["employment act"],
  },
  {
    id: "agent-duty-best-efforts",
    title: "Agent Duties - Best Efforts",
    keywords: ["best efforts"],
  },
  {
    id: "agent-duty-promotion",
    title: "Agent Duties - Promotion",
    keywords: ["promotion of products", "promotion"],
  },
  {
    id: "agent-duty-comply-laws",
    title: "Agent Duties - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "agent-duty-reporting",
    title: "Agent Duties - Reporting",
    keywords: ["reporting obligations", "report"],
  },
  {
    id: "agent-duty-no-conflict",
    title: "Agent Duties - No Conflict of Interest",
    keywords: ["conflict of interest"],
  },
  {
    id: "agent-duty-non-compete",
    title: "Agent Duties - Non-Compete",
    keywords: ["non-compete", "non compete"],
  },
  {
    id: "principal-duty-info",
    title: "Principal Duties - Provide Information",
    keywords: ["provide information"],
  },
  {
    id: "principal-duty-supply",
    title: "Principal Duties - Supply Products/Services",
    keywords: ["supply products", "supply services"],
  },
  {
    id: "principal-duty-marketing",
    title: "Principal Duties - Marketing Support",
    keywords: ["support marketing", "marketing support"],
  },
  {
    id: "principal-duty-commission",
    title: "Principal Duties - Pay Commission",
    keywords: ["pay commission", "commission payment"],
  },
  {
    id: "principal-duty-honor-authorized",
    title: "Principal Duties - Honor Authorized Contracts",
    keywords: ["honor contracts concluded by agent", "if authorized"],
  },
  { id: "agent-commission-rate", title: "Commission Rate", keywords: ["commission rate"] },
  {
    id: "agent-commission-calc",
    title: "Commission Calculation Method",
    keywords: ["commission calculation"],
  },
  {
    id: "agent-commission-basis",
    title: "Commission Basis - Gross/Net Revenue",
    keywords: ["gross revenue", "net revenue"],
  },
  {
    id: "agent-commission-earned",
    title: "When Commission is Earned",
    keywords: ["commission is earned"],
  },
  {
    id: "agent-commission-trigger",
    title: "Commission Payment Trigger",
    keywords: ["upon customer payment", "commission payment trigger"],
  },
  {
    id: "agent-commission-payment",
    title: "Commission Payment Timeline",
    keywords: ["commission payment timeline", "payment timeline"],
  },
  {
    id: "agent-commission-repeat",
    title: "Commission on Repeat Sales",
    keywords: ["repeat sales"],
  },
  {
    id: "agent-commission-renewals",
    title: "Commission on Renewals",
    keywords: ["commission on renewals", "renewals"],
  },
  {
    id: "agent-commission-termination",
    title: "Commission on Termination",
    keywords: ["commission on termination"],
  },
  {
    id: "agent-commission-dispute-risk",
    title: "Commission Structure - Common Dispute Area",
    keywords: ["most common dispute area"],
  },
  {
    id: "agent-expenses",
    title: "Reimbursable Expenses",
    keywords: ["reimbursable expenses", "expenses"],
  },
  {
    id: "agent-expenses-approval",
    title: "Expenses - Prior Approval",
    keywords: ["prior approval"],
  },
  {
    id: "agent-payment-invoicing",
    title: "Payment Terms - Invoicing Process",
    keywords: ["invoicing process"],
  },
  {
    id: "agent-payment-withholding-tax",
    title: "Payment Terms - Withholding Tax Compliance",
    keywords: ["withholding tax", "income tax act"],
  },
  {
    id: "agent-conf-definition",
    title: "Confidentiality Definition",
    keywords: ["confidential information"],
  },
  {
    id: "agent-conf-duration",
    title: "Confidentiality Duration",
    keywords: ["confidentiality duration"],
  },
  {
    id: "agent-conf-exceptions",
    title: "Confidentiality Exceptions",
    keywords: ["confidentiality exceptions"],
  },
  { id: "agent-ip-trademark", title: "Use of Trademarks", keywords: ["trademark", "brand usage"] },
  { id: "agent-ip-materials", title: "Marketing Materials", keywords: ["marketing materials"] },
  {
    id: "agent-ip-ownership",
    title: "IP Ownership",
    keywords: ["ip ownership", "intellectual property"],
  },
  {
    id: "agent-comply-anti-bribery",
    title: "Compliance - Anti-Bribery/Corruption",
    keywords: ["anti-bribery", "anti-corruption"],
  },
  {
    id: "agent-comply-regulatory",
    title: "Compliance - Regulatory",
    keywords: ["regulatory compliance"],
  },
  {
    id: "agent-comply-data",
    title: "Compliance - Data Protection",
    keywords: ["data protection", "personal data"],
  },
  {
    id: "agent-data-protection-act",
    title: "Data Protection Act Compliance",
    keywords: ["data protection act"],
  },
  {
    id: "agent-data-customer-handling",
    title: "Data Protection - Customer Data Handling",
    keywords: ["handling of customer data"],
  },
  { id: "agent-indemnity-agent", title: "Agent Indemnity", keywords: ["agent indemnity"] },
  {
    id: "agent-indemnity-principal",
    title: "Principal Indemnity",
    keywords: ["principal indemnity"],
  },
  {
    id: "agent-indemnity-third-party",
    title: "Third-Party Claims Indemnity",
    keywords: ["third-party claims", "third party claims"],
  },
  { id: "agent-liability-cap", title: "Liability Cap", keywords: ["liability cap"] },
  {
    id: "agent-liability-indirect",
    title: "Exclusion of Indirect Losses",
    keywords: ["indirect loss", "consequential loss"],
  },
  {
    id: "agent-liability-fraud",
    title: "Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  {
    id: "agent-insurance",
    title: "Professional Indemnity Insurance",
    keywords: ["professional indemnity insurance"],
  },
  {
    id: "agent-subagents-allowed",
    title: "Sub-Agents Allowed?",
    keywords: ["sub-agent", "sub agents"],
  },
  {
    id: "agent-subagents-consent",
    title: "Sub-Agents - Principal Consent",
    keywords: ["principal consent"],
  },
  {
    id: "agent-subagents-responsibility",
    title: "Sub-Agents - Agent Responsibility",
    keywords: ["responsibility for sub-agents"],
  },
  {
    id: "agent-term-start",
    title: "Term - Start Date",
    keywords: ["start date", "commencement date"],
  },
  { id: "agent-term-duration", title: "Term - Duration", keywords: ["duration", "term"] },
  { id: "agent-term-renewal", title: "Term - Renewal", keywords: ["renewal"] },
  {
    id: "agent-term-cause",
    title: "Termination for Cause",
    keywords: ["termination for cause", "material breach"],
  },
  {
    id: "agent-term-convenience",
    title: "Termination for Convenience",
    keywords: ["termination for convenience"],
  },
  { id: "agent-term-notice", title: "Termination Notice Period", keywords: ["notice period"] },
  {
    id: "agent-term-immediate",
    title: "Immediate Termination Triggers",
    keywords: ["immediate termination"],
  },
  {
    id: "agent-post-return-materials",
    title: "Post-Termination - Return Materials",
    keywords: ["return of materials"],
  },
  {
    id: "agent-post-cease-trademark",
    title: "Post-Termination - Cease Trademark Use",
    keywords: ["cease use of trademarks"],
  },
  {
    id: "agent-post-outstanding-commission",
    title: "Post-Termination - Outstanding Commission",
    keywords: ["outstanding commission"],
  },
  {
    id: "agent-post-restrictive",
    title: "Post-Termination - Restrictive Covenants",
    keywords: ["restrictive covenants"],
  },
  {
    id: "agent-restrictive-noncompete",
    title: "Restrictive Covenants - Non-Compete",
    keywords: ["non-compete", "non compete"],
  },
  {
    id: "agent-restrictive-nonsolicit",
    title: "Restrictive Covenants - Non-Solicitation",
    keywords: ["non-solicitation", "non solicitation"],
  },
  {
    id: "agent-restrictive-nondealing",
    title: "Restrictive Covenants - Non-Dealing",
    keywords: ["non-dealing", "non dealing"],
  },
  {
    id: "agent-restrictive-reasonable",
    title: "Restrictive Covenants - Reasonableness in Time and Geography",
    keywords: ["reasonable in time", "reasonable in geography"],
  },
  {
    id: "agent-post-pending-deals",
    title: "Post-Termination - Commission on Pending Deals",
    keywords: ["commission on pending deals"],
  },
  {
    id: "agent-post-commission-clarity",
    title: "Post-Termination - Commission Entitlement Clarity",
    keywords: ["post-termination commission entitlement"],
  },
  { id: "agent-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  { id: "agent-assignment", title: "Assignment", keywords: ["assignment"] },
  {
    id: "agent-assignment-restrictions",
    title: "Assignment - Restrictions on Transfer",
    keywords: ["restrictions on transfer"],
  },
  { id: "agent-notices", title: "Notices", keywords: ["notices", "notice"] },
  { id: "agent-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "agent-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "agent-severability", title: "Severability", keywords: ["severability"] },
  { id: "agent-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "agent-governing-law", title: "Governing Law", keywords: ["governing law"] },
  { id: "agent-dispute-escalation", title: "Dispute Escalation", keywords: ["escalation"] },
  { id: "agent-dispute-mediation", title: "Dispute Mediation", keywords: ["mediation"] },
  {
    id: "agent-dispute-arb-court",
    title: "Arbitration or Courts",
    keywords: ["arbitration", "courts"],
  },
];

const ITEMS: ChecklistTemplateItem[] = [...CORPORATE_ITEMS, ...AGENCY_ITEMS];

const template = createKenyaTemplate("agency_agreement", ITEMS);

export default template;
