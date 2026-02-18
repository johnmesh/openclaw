import { createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const PROPERTY_MANAGEMENT_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "pm-parties-owner",
    title: "Parties - Property Owner (Landlord)",
    keywords: ["property owner", "landlord"],
  },
  { id: "pm-parties-manager", title: "Parties - Property Manager", keywords: ["property manager"] },
  { id: "pm-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "pm-parties-reg",
    title: "Parties - Registration Numbers",
    keywords: ["registration numbers"],
  },
  { id: "pm-parties-kra", title: "Parties - KRA PIN", keywords: ["kra pin"] },
  { id: "pm-parties-addresses", title: "Parties - Addresses", keywords: ["addresses"] },
  {
    id: "pm-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "pm-appointment-manager",
    title: "Appointment - Manager Appointment",
    keywords: ["appointment of manager"],
  },
  {
    id: "pm-appointment-authority",
    title: "Appointment - Scope of Authority",
    keywords: ["scope of authority"],
  },
  {
    id: "pm-appointment-exclusive",
    title: "Appointment - Exclusive/Non-Exclusive",
    keywords: ["exclusive", "non-exclusive management"],
  },
  {
    id: "pm-appointment-properties",
    title: "Appointment - Properties Covered",
    keywords: ["title numbers", "units"],
  },
  {
    id: "pm-scope-tenant-sourcing",
    title: "Scope of Services - Tenant Sourcing",
    keywords: ["tenant sourcing"],
  },
  {
    id: "pm-scope-rent-collection",
    title: "Scope of Services - Rent Collection",
    keywords: ["rent collection"],
  },
  {
    id: "pm-scope-lease-admin",
    title: "Scope of Services - Lease Administration",
    keywords: ["lease administration"],
  },
  {
    id: "pm-scope-maintenance",
    title: "Scope of Services - Maintenance Coordination",
    keywords: ["maintenance coordination"],
  },
  {
    id: "pm-scope-contractors",
    title: "Scope of Services - Supervision of Contractors",
    keywords: ["supervision of contractors"],
  },
  {
    id: "pm-scope-service-charge",
    title: "Scope of Services - Service Charge Management",
    keywords: ["service charge management"],
  },
  {
    id: "pm-scope-utilities",
    title: "Scope of Services - Utilities Management",
    keywords: ["utilities management"],
  },
  {
    id: "pm-scope-security",
    title: "Scope of Services - Security Coordination",
    keywords: ["security coordination"],
  },
  {
    id: "pm-authority-leases",
    title: "Authority - Enter Leases",
    keywords: ["authority to enter leases"],
  },
  {
    id: "pm-authority-sign",
    title: "Authority - Sign Agreements",
    keywords: ["authority to sign agreements"],
  },
  {
    id: "pm-authority-collect-rent",
    title: "Authority - Collect Rent",
    keywords: ["authority to collect rent"],
  },
  {
    id: "pm-authority-spending-limit",
    title: "Authority - Spending Limits",
    keywords: ["spending authority limits"],
  },
  {
    id: "pm-authority-clear",
    title: "Authority - Clear Scope to Avoid Unauthorized Binding",
    keywords: ["unauthorized binding"],
  },
  {
    id: "pm-fees-management",
    title: "Fees and Commission - Management Fee Percentage",
    keywords: ["management fee percentage"],
  },
  {
    id: "pm-fees-letting",
    title: "Fees and Commission - Letting Commission",
    keywords: ["letting commission"],
  },
  {
    id: "pm-fees-renewal",
    title: "Fees and Commission - Renewal Commission",
    keywords: ["renewal commission"],
  },
  { id: "pm-fees-vat", title: "Fees and Commission - VAT Treatment", keywords: ["vat treatment"] },
  {
    id: "pm-fees-payment-timeline",
    title: "Fees and Commission - Payment Timelines",
    keywords: ["payment timelines"],
  },
  {
    id: "pm-rent-trust-account",
    title: "Rent Collection - Trust Account Requirements",
    keywords: ["trust account requirements"],
  },
  {
    id: "pm-rent-remittance",
    title: "Rent Collection - Remittance Schedule",
    keywords: ["remittance schedule"],
  },
  {
    id: "pm-rent-expense-deduction",
    title: "Rent Collection - Deduction of Expenses",
    keywords: ["deduction of expenses"],
  },
  {
    id: "pm-rent-reporting",
    title: "Rent Collection - Reporting Obligations",
    keywords: ["reporting obligations"],
  },
  {
    id: "pm-rent-estate-agents-act",
    title: "Rent Collection - Estate Agents Act Compliance",
    keywords: ["estate agents act"],
  },
  {
    id: "pm-service-charge-budget",
    title: "Service Charge - Budget Preparation",
    keywords: ["budget preparation"],
  },
  {
    id: "pm-service-charge-collection",
    title: "Service Charge - Collection Process",
    keywords: ["collection process"],
  },
  {
    id: "pm-service-charge-transparency",
    title: "Service Charge - Accounting Transparency",
    keywords: ["accounting transparency"],
  },
  {
    id: "pm-service-charge-audit",
    title: "Service Charge - Audit Rights",
    keywords: ["audit rights"],
  },
  {
    id: "pm-maint-routine",
    title: "Maintenance - Routine Maintenance",
    keywords: ["routine maintenance"],
  },
  {
    id: "pm-maint-emergency",
    title: "Maintenance - Emergency Repairs",
    keywords: ["emergency repairs"],
  },
  {
    id: "pm-maint-capex",
    title: "Maintenance - Capital Expenditure Approval",
    keywords: ["capital expenditure approval"],
  },
  {
    id: "pm-maint-contractor-selection",
    title: "Maintenance - Contractor Selection Process",
    keywords: ["contractor selection process"],
  },
  {
    id: "pm-ins-owner",
    title: "Insurance - Owner Property Insurance",
    keywords: ["owner property insurance"],
  },
  {
    id: "pm-ins-manager-pi",
    title: "Insurance - Manager Professional Indemnity",
    keywords: ["professional indemnity insurance"],
  },
  {
    id: "pm-ins-claims",
    title: "Insurance - Claims Handling Authority",
    keywords: ["claims handling authority"],
  },
  {
    id: "pm-accounting-monthly",
    title: "Accounting/Reporting - Monthly Statements",
    keywords: ["monthly statements"],
  },
  {
    id: "pm-accounting-format",
    title: "Accounting/Reporting - Financial Reporting Format",
    keywords: ["financial reporting format"],
  },
  {
    id: "pm-accounting-audit",
    title: "Accounting/Reporting - Audit Rights",
    keywords: ["audit rights"],
  },
  {
    id: "pm-accounting-retention",
    title: "Accounting/Reporting - Record Retention",
    keywords: ["record retention"],
  },
  {
    id: "pm-laws-landlord-tenant",
    title: "Compliance with Laws - Landlord/Tenant Law",
    keywords: ["landlord and tenant law compliance"],
  },
  {
    id: "pm-laws-controlled-tenancy",
    title: "Compliance with Laws - Controlled Tenancy Act",
    keywords: ["landlord and tenant shops hotels and catering establishments act"],
  },
  {
    id: "pm-laws-data-protection",
    title: "Compliance with Laws - Data Protection Act",
    keywords: ["data protection act"],
  },
  {
    id: "pm-laws-health-safety",
    title: "Compliance with Laws - Health and Safety",
    keywords: ["health and safety compliance"],
  },
  { id: "pm-conf-tenant-data", title: "Confidentiality - Tenant Data", keywords: ["tenant data"] },
  {
    id: "pm-conf-financial-records",
    title: "Confidentiality - Financial Records",
    keywords: ["financial records"],
  },
  {
    id: "pm-data-handling",
    title: "Data Protection - Handling Tenant Personal Data",
    keywords: ["tenant personal data"],
  },
  {
    id: "pm-data-security",
    title: "Data Protection - Security Obligations",
    keywords: ["security obligations"],
  },
  {
    id: "pm-data-breach",
    title: "Data Protection - Breach Notification",
    keywords: ["breach notification"],
  },
  {
    id: "pm-indemnity-manager",
    title: "Indemnity - Manager Indemnity",
    keywords: ["manager indemnity"],
  },
  { id: "pm-indemnity-owner", title: "Indemnity - Owner Indemnity", keywords: ["owner indemnity"] },
  {
    id: "pm-indemnity-third-party",
    title: "Indemnity - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  {
    id: "pm-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "pm-liability-indirect",
    title: "Limitation of Liability - Indirect Loss Exclusion",
    keywords: ["indirect loss"],
  },
  {
    id: "pm-liability-fraud",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  { id: "pm-term-initial", title: "Term - Initial Term", keywords: ["initial term"] },
  { id: "pm-term-renewal", title: "Term - Renewal", keywords: ["renewal"] },
  { id: "pm-term-review", title: "Term - Performance Review", keywords: ["performance review"] },
  {
    id: "pm-termination-breach",
    title: "Termination - Breach",
    keywords: ["termination for breach"],
  },
  { id: "pm-termination-cure", title: "Termination - Cure Period", keywords: ["cure period"] },
  {
    id: "pm-termination-convenience",
    title: "Termination - Convenience",
    keywords: ["termination for convenience"],
  },
  { id: "pm-termination-insolvency", title: "Termination - Insolvency", keywords: ["insolvency"] },
  {
    id: "pm-consequence-handover-records",
    title: "Consequences - Handover of Records",
    keywords: ["handover of records"],
  },
  {
    id: "pm-consequence-transfer-files",
    title: "Consequences - Transfer of Tenant Files",
    keywords: ["transfer of tenant files"],
  },
  {
    id: "pm-consequence-final-accounting",
    title: "Consequences - Final Accounting",
    keywords: ["final accounting"],
  },
  {
    id: "pm-consequence-outstanding-fees",
    title: "Consequences - Outstanding Fees",
    keywords: ["payment of outstanding fees"],
  },
  {
    id: "pm-conflict-disclosure",
    title: "Conflict of Interest - Disclosure",
    keywords: ["disclosure requirements"],
  },
  {
    id: "pm-conflict-related-party",
    title: "Conflict of Interest - Related-Party Transactions",
    keywords: ["related-party transactions"],
  },
  {
    id: "pm-assignment-restrictions",
    title: "Assignment - Restrictions on Transfer",
    keywords: ["restrictions on transfer"],
  },
  { id: "pm-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  { id: "pm-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "pm-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  {
    id: "pm-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  { id: "pm-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "pm-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "pm-severability", title: "Severability", keywords: ["severability"] },
  { id: "pm-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "pm-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...PROPERTY_MANAGEMENT_ITEMS];

const template = createKenyaTemplate("property_management_agreement", ITEMS);

export default template;
