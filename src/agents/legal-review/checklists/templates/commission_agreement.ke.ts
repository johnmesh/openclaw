import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const COMMISSION_ITEMS: ChecklistTemplateItem[] = [
  { id: "com-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "com-parties-id",
    title: "Parties - ID/Passport or Company Registration",
    keywords: ["id", "passport", "company registration number"],
  },
  { id: "com-parties-kra", title: "Parties - KRA PIN", keywords: ["kra pin"] },
  {
    id: "com-parties-addresses",
    title: "Parties - Addresses",
    keywords: ["addresses", "registered address"],
  },
  {
    id: "com-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "com-appointment-agent",
    title: "Appointment - Commission Agent Appointment",
    keywords: ["appointment of commission agent"],
  },
  {
    id: "com-appointment-scope",
    title: "Appointment - Scope of Services",
    keywords: ["scope of services"],
  },
  { id: "com-appointment-territory", title: "Appointment - Territory", keywords: ["territory"] },
  {
    id: "com-appointment-products",
    title: "Appointment - Products/Services Covered",
    keywords: ["products/services covered", "products covered", "services covered"],
  },
  {
    id: "com-appointment-exclusive",
    title: "Appointment - Exclusivity",
    keywords: ["exclusive", "non-exclusive appointment"],
  },
  {
    id: "com-appointment-competition",
    title: "Appointment - Competition Act Compliance",
    keywords: ["competition act"],
  },
  {
    id: "com-relationship-independent",
    title: "Nature of Relationship - Independent Contractor",
    keywords: ["independent contractor status"],
  },
  {
    id: "com-relationship-no-employment",
    title: "Nature of Relationship - No Employment Relationship",
    keywords: ["no employment relationship"],
  },
  {
    id: "com-relationship-no-bind",
    title: "Nature of Relationship - No Authority to Bind Principal",
    keywords: ["no authority to bind principal"],
  },
  {
    id: "com-relationship-employment-risk",
    title: "Nature of Relationship - Employment Act Misclassification Risk",
    keywords: ["employment act"],
  },
  {
    id: "com-duty-promotion",
    title: "Duties of Agent - Promotion",
    keywords: ["promotion of products/services"],
  },
  {
    id: "com-duty-best-efforts",
    title: "Duties of Agent - Best Efforts",
    keywords: ["best efforts obligation"],
  },
  {
    id: "com-duty-compliance",
    title: "Duties of Agent - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "com-duty-reporting",
    title: "Duties of Agent - Reporting",
    keywords: ["reporting obligations"],
  },
  {
    id: "com-duty-conflict",
    title: "Duties of Agent - Conflict Disclosure",
    keywords: ["conflict of interest disclosure"],
  },
  {
    id: "com-principal-info",
    title: "Duties of Principal - Provide Information/Materials",
    keywords: ["provide information", "materials"],
  },
  {
    id: "com-principal-marketing",
    title: "Duties of Principal - Marketing Support",
    keywords: ["support marketing efforts"],
  },
  {
    id: "com-principal-pay",
    title: "Duties of Principal - Pay Commission",
    keywords: ["pay commission"],
  },
  {
    id: "com-commission-rate",
    title: "Commission Structure - Commission Rate",
    keywords: ["commission rate", "percentage", "fixed"],
  },
  {
    id: "com-commission-basis",
    title: "Commission Structure - Basis of Calculation",
    keywords: ["gross revenue", "net revenue", "profit", "basis of calculation"],
  },
  {
    id: "com-commission-earned",
    title: "Commission Structure - When Earned",
    keywords: ["when commission is earned", "payment received"],
  },
  {
    id: "com-commission-repeat",
    title: "Commission Structure - Repeat Sales",
    keywords: ["commission on repeat sales"],
  },
  {
    id: "com-commission-renewals",
    title: "Commission Structure - Renewals",
    keywords: ["commission on renewals"],
  },
  {
    id: "com-commission-targets",
    title: "Commission Structure - Minimum Targets",
    keywords: ["minimum performance targets"],
  },
  {
    id: "com-commission-definition-critical",
    title: "Commission Structure - Clear Commission Definition",
    keywords: ["most litigated clause", "commission definition"],
  },
  {
    id: "com-payment-invoicing",
    title: "Payment Terms - Invoicing Process",
    keywords: ["invoicing process"],
  },
  { id: "com-payment-timeline", title: "Payment Terms - Timeline", keywords: ["payment timeline"] },
  {
    id: "com-payment-late-interest",
    title: "Payment Terms - Late Interest",
    keywords: ["late payment interest"],
  },
  {
    id: "com-payment-withholding-tax",
    title: "Payment Terms - Withholding Tax",
    keywords: ["withholding tax", "income tax act"],
  },
  {
    id: "com-expenses-reimbursable",
    title: "Expenses - Reimbursable Expenses",
    keywords: ["reimbursable expenses"],
  },
  {
    id: "com-expenses-approval",
    title: "Expenses - Approval Requirements",
    keywords: ["approval requirements"],
  },
  {
    id: "com-conf-customer-data",
    title: "Confidentiality - Customer Data",
    keywords: ["customer data"],
  },
  {
    id: "com-conf-trade-secrets",
    title: "Confidentiality - Trade Secrets",
    keywords: ["trade secrets"],
  },
  { id: "com-conf-duration", title: "Confidentiality - Duration", keywords: ["duration"] },
  {
    id: "com-data-dpa",
    title: "Data Protection - Data Protection Act Compliance",
    keywords: ["data protection act"],
  },
  {
    id: "com-data-handling",
    title: "Data Protection - Handling Customer Information",
    keywords: ["handling of customer information"],
  },
  {
    id: "com-data-security",
    title: "Data Protection - Security Obligations",
    keywords: ["security obligations"],
  },
  {
    id: "com-ip-trademark-use",
    title: "Intellectual Property - Use of Trademarks",
    keywords: ["use of trademarks"],
  },
  {
    id: "com-ip-no-transfer",
    title: "Intellectual Property - No Ownership Transfer",
    keywords: ["no ownership transfer"],
  },
  {
    id: "com-ip-branding",
    title: "Intellectual Property - Branding Restrictions",
    keywords: ["branding restrictions"],
  },
  {
    id: "com-restrictive-during",
    title: "Non-Compete/Non-Solicitation - During Term",
    keywords: ["during term"],
  },
  {
    id: "com-restrictive-post",
    title: "Non-Compete/Non-Solicitation - Post-Termination",
    keywords: ["post-termination restrictions", "post termination"],
  },
  {
    id: "com-restrictive-reasonable",
    title: "Non-Compete/Non-Solicitation - Reasonableness",
    keywords: ["reasonable in scope", "reasonable in duration"],
  },
  {
    id: "com-warranty-authority",
    title: "Warranties - Authority to Enter",
    keywords: ["authority to enter agreement"],
  },
  {
    id: "com-warranty-compliance",
    title: "Warranties - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "com-warranty-no-conflict",
    title: "Warranties - No Conflicting Obligations",
    keywords: ["no conflicting obligations"],
  },
  {
    id: "com-indemnity-third-party",
    title: "Indemnity - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  { id: "com-indemnity-breach", title: "Indemnity - Breach", keywords: ["breach indemnity"] },
  {
    id: "com-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "com-liability-indirect",
    title: "Limitation of Liability - Indirect Loss Exclusion",
    keywords: ["exclusion of indirect losses", "indirect losses"],
  },
  {
    id: "com-liability-fraud",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  { id: "com-term-start", title: "Term - Start Date", keywords: ["start date"] },
  { id: "com-term-duration", title: "Term - Duration", keywords: ["duration"] },
  { id: "com-term-renewal", title: "Term - Renewal", keywords: ["renewal"] },
  {
    id: "com-termination-breach",
    title: "Termination - Breach",
    keywords: ["termination for breach"],
  },
  { id: "com-termination-cure", title: "Termination - Cure Period", keywords: ["cure period"] },
  {
    id: "com-termination-convenience",
    title: "Termination - Convenience",
    keywords: ["termination for convenience"],
  },
  { id: "com-termination-insolvency", title: "Termination - Insolvency", keywords: ["insolvency"] },
  {
    id: "com-consequence-outstanding-commission",
    title: "Consequences of Termination - Outstanding Commission",
    keywords: ["outstanding commission payments"],
  },
  {
    id: "com-consequence-pending-transactions",
    title: "Consequences of Termination - Pending Transactions Commission",
    keywords: ["commission on pending transactions"],
  },
  {
    id: "com-consequence-return-materials",
    title: "Consequences of Termination - Return of Materials",
    keywords: ["return of materials"],
  },
  {
    id: "com-consequence-cease-trademarks",
    title: "Consequences of Termination - Cease Trademark Use",
    keywords: ["cease use of trademarks"],
  },
  {
    id: "com-consequence-post-term-commission",
    title: "Consequences of Termination - Post-Term Commission Clarity",
    keywords: ["payable after termination", "deals introduced earlier"],
  },
  {
    id: "com-assignment-restrictions",
    title: "Assignment - Restrictions on Transfer",
    keywords: ["restrictions on transfer"],
  },
  { id: "com-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  {
    id: "com-dispute-escalation",
    title: "Dispute Resolution - Escalation",
    keywords: ["escalation"],
  },
  { id: "com-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "com-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  {
    id: "com-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  { id: "com-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "com-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "com-severability", title: "Severability", keywords: ["severability"] },
  { id: "com-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "com-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...COMMISSION_ITEMS];

const template = createKenyaTemplate("commission_agreement", ITEMS);

export default template;
