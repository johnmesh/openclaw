import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const CONSULTANCY_ITEMS: ChecklistTemplateItem[] = [
  { id: "cons-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "cons-parties-id",
    title: "Parties - ID/Passport or Company Registration",
    keywords: ["id", "passport", "company registration number"],
  },
  { id: "cons-parties-kra", title: "Parties - KRA PIN", keywords: ["kra pin"] },
  {
    id: "cons-parties-addresses",
    title: "Parties - Addresses",
    keywords: ["addresses", "registered address"],
  },
  {
    id: "cons-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "cons-appointment",
    title: "Appointment - Appointment of Consultant",
    keywords: ["appointment of consultant"],
  },
  {
    id: "cons-scope-services",
    title: "Appointment - Scope of Services",
    keywords: ["scope of services"],
  },
  { id: "cons-deliverables", title: "Appointment - Deliverables", keywords: ["deliverables"] },
  {
    id: "cons-location",
    title: "Appointment - Location of Services",
    keywords: ["location of services"],
  },
  {
    id: "cons-nonexclusive",
    title: "Appointment - Non-Exclusivity",
    keywords: ["non-exclusivity", "non exclusivity"],
  },
  {
    id: "cons-term-commencement",
    title: "Term - Commencement Date",
    keywords: ["commencement date"],
  },
  { id: "cons-term-duration", title: "Term - Duration", keywords: ["duration"] },
  { id: "cons-term-renewal", title: "Term - Renewal", keywords: ["renewal"] },
  {
    id: "cons-fees-structure",
    title: "Fees - Structure",
    keywords: ["hourly", "milestone", "fixed fee", "fee structure"],
  },
  { id: "cons-fees-retainer", title: "Fees - Retainer", keywords: ["retainer"] },
  { id: "cons-fees-vat", title: "Fees - VAT Treatment", keywords: ["vat treatment"] },
  { id: "cons-fees-currency", title: "Fees - Currency", keywords: ["currency"] },
  {
    id: "cons-payment-invoicing",
    title: "Payment Terms - Invoicing Procedure",
    keywords: ["invoicing procedure"],
  },
  {
    id: "cons-payment-timeline",
    title: "Payment Terms - Timeline",
    keywords: ["payment timeline"],
  },
  {
    id: "cons-payment-late-interest",
    title: "Payment Terms - Late Payment Interest",
    keywords: ["late payment interest"],
  },
  {
    id: "cons-payment-withholding-tax",
    title: "Payment Terms - Withholding Tax",
    keywords: ["withholding tax", "income tax act"],
  },
  {
    id: "cons-obligation-standard-care",
    title: "Consultant Obligations - Standard of Care",
    keywords: ["standard of care"],
  },
  {
    id: "cons-obligation-skill-diligence",
    title: "Consultant Obligations - Professional Skill and Diligence",
    keywords: ["professional skill", "diligence"],
  },
  {
    id: "cons-obligation-legal-compliance",
    title: "Consultant Obligations - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "cons-obligation-reporting",
    title: "Consultant Obligations - Reporting",
    keywords: ["reporting obligations"],
  },
  {
    id: "cons-client-access",
    title: "Client Obligations - Access to Information",
    keywords: ["access to information"],
  },
  {
    id: "cons-client-cooperation",
    title: "Client Obligations - Cooperation",
    keywords: ["cooperation"],
  },
  {
    id: "cons-client-payment",
    title: "Client Obligations - Payment",
    keywords: ["payment obligations"],
  },
  {
    id: "cons-independent-no-employment",
    title: "Independent Contractor - No Employment Relationship",
    keywords: ["no employment relationship"],
  },
  {
    id: "cons-independent-no-benefits",
    title: "Independent Contractor - No Employee Benefits",
    keywords: ["no employee benefits"],
  },
  {
    id: "cons-independent-no-bind",
    title: "Independent Contractor - No Authority to Bind Client",
    keywords: ["no authority to bind client"],
  },
  {
    id: "cons-independent-employment-act-risk",
    title: "Independent Contractor - Employment Act Misclassification Risk",
    keywords: ["employment act"],
  },
  { id: "cons-conf-definition", title: "Confidentiality - Definition", keywords: ["definition"] },
  {
    id: "cons-conf-obligations",
    title: "Confidentiality - Obligations",
    keywords: ["confidentiality obligations"],
  },
  { id: "cons-conf-exceptions", title: "Confidentiality - Exceptions", keywords: ["exceptions"] },
  { id: "cons-conf-duration", title: "Confidentiality - Duration", keywords: ["duration"] },
  {
    id: "cons-ip-ownership",
    title: "Intellectual Property - Ownership of Deliverables",
    keywords: ["ownership of deliverables"],
  },
  {
    id: "cons-ip-assignment",
    title: "Intellectual Property - Assignment of IP",
    keywords: ["assignment of ip"],
  },
  {
    id: "cons-ip-preexisting",
    title: "Intellectual Property - Pre-Existing IP",
    keywords: ["pre-existing ip", "pre existing ip"],
  },
  {
    id: "cons-ip-moral-rights",
    title: "Intellectual Property - Moral Rights Waiver",
    keywords: ["moral rights waiver"],
  },
  {
    id: "cons-data-dpa",
    title: "Data Protection - Data Protection Act",
    keywords: ["data protection act"],
  },
  {
    id: "cons-data-handling",
    title: "Data Protection - Data Handling Obligations",
    keywords: ["data handling obligations"],
  },
  {
    id: "cons-data-security",
    title: "Data Protection - Security Measures",
    keywords: ["security measures"],
  },
  {
    id: "cons-conflict-disclosure",
    title: "Conflict of Interest - Disclosure",
    keywords: ["disclosure obligations"],
  },
  {
    id: "cons-conflict-restrictions",
    title: "Conflict of Interest - Restrictions",
    keywords: ["restrictions"],
  },
  {
    id: "cons-restrictive-during",
    title: "Non-Compete/Non-Solicitation - During Term",
    keywords: ["during term"],
  },
  {
    id: "cons-restrictive-post",
    title: "Non-Compete/Non-Solicitation - Post-Termination",
    keywords: ["post-termination restrictions", "post termination"],
  },
  {
    id: "cons-restrictive-reasonable",
    title: "Non-Compete/Non-Solicitation - Reasonable Scope",
    keywords: ["reasonable", "enforceable in kenya"],
  },
  {
    id: "cons-warranty-authority",
    title: "Warranties - Authority to Enter",
    keywords: ["authority to enter agreement"],
  },
  {
    id: "cons-warranty-qualifications",
    title: "Warranties - Professional Qualifications",
    keywords: ["professional qualifications"],
  },
  {
    id: "cons-warranty-noninfringement",
    title: "Warranties - No Third-Party Infringement",
    keywords: ["no infringement of third-party rights", "third party rights"],
  },
  {
    id: "cons-indemnity-third-party",
    title: "Indemnity - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  { id: "cons-indemnity-breach", title: "Indemnity - Breach", keywords: ["breach indemnity"] },
  {
    id: "cons-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "cons-liability-indirect",
    title: "Limitation of Liability - Indirect Loss Exclusion",
    keywords: ["exclusion of indirect loss", "indirect loss"],
  },
  {
    id: "cons-liability-fraud",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  {
    id: "cons-insurance-prof-indemnity",
    title: "Insurance - Professional Indemnity",
    keywords: ["professional indemnity insurance"],
  },
  {
    id: "cons-insurance-evidence",
    title: "Insurance - Evidence of Coverage",
    keywords: ["evidence of coverage", "proof of insurance"],
  },
  {
    id: "cons-termination-breach",
    title: "Termination - Breach",
    keywords: ["termination for breach"],
  },
  { id: "cons-termination-cure", title: "Termination - Cure Period", keywords: ["cure period"] },
  {
    id: "cons-termination-convenience",
    title: "Termination - Convenience",
    keywords: ["termination for convenience"],
  },
  {
    id: "cons-termination-insolvency",
    title: "Termination - Insolvency",
    keywords: ["insolvency termination"],
  },
  {
    id: "cons-consequence-final-payment",
    title: "Consequences of Termination - Final Payment",
    keywords: ["final payment"],
  },
  {
    id: "cons-consequence-return-confidential",
    title: "Consequences of Termination - Return of Confidential Materials",
    keywords: ["return of confidential materials"],
  },
  {
    id: "cons-consequence-ip-confirmation",
    title: "Consequences of Termination - IP Ownership Confirmation",
    keywords: ["ip ownership confirmation"],
  },
  { id: "cons-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  { id: "cons-assignment", title: "Assignment", keywords: ["assignment"] },
  {
    id: "cons-dispute-escalation",
    title: "Dispute Resolution - Escalation",
    keywords: ["escalation"],
  },
  {
    id: "cons-dispute-mediation",
    title: "Dispute Resolution - Mediation",
    keywords: ["mediation"],
  },
  {
    id: "cons-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  {
    id: "cons-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  { id: "cons-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "cons-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "cons-severability", title: "Severability", keywords: ["severability"] },
  { id: "cons-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "cons-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...CONSULTANCY_ITEMS];

const template = createKenyaTemplate("consultancy_agreement", ITEMS);

export default template;
