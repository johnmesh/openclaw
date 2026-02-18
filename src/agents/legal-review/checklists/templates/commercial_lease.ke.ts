import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const COMMERCIAL_LEASE_ITEMS: ChecklistTemplateItem[] = [
  { id: "cl-parties-legal", title: "Parties - Full Legal Names", keywords: ["full legal names"] },
  {
    id: "cl-parties-reg",
    title: "Parties - Company Registration Numbers",
    keywords: ["company registration numbers"],
  },
  { id: "cl-parties-kra", title: "Parties - KRA PIN", keywords: ["kra pin"] },
  {
    id: "cl-parties-address",
    title: "Parties - Registered Addresses",
    keywords: ["registered addresses"],
  },
  { id: "cl-recitals", title: "Recitals/Background", keywords: ["recitals", "background"] },
  {
    id: "cl-premises-title",
    title: "Description of Premises - Title Number",
    keywords: ["title number"],
  },
  {
    id: "cl-premises-unit",
    title: "Description of Premises - Unit/Shop/Office Number",
    keywords: ["unit", "shop", "office number"],
  },
  {
    id: "cl-premises-floor-area",
    title: "Description of Premises - Floor Area",
    keywords: ["floor area"],
  },
  {
    id: "cl-premises-parking",
    title: "Description of Premises - Parking Allocation",
    keywords: ["parking allocation"],
  },
  {
    id: "cl-premises-common-areas",
    title: "Description of Premises - Common Areas",
    keywords: ["common areas"],
  },
  {
    id: "cl-premises-lra",
    title: "Description of Premises - Land Registration Act Alignment",
    keywords: ["land registration act"],
  },
  {
    id: "cl-term-commencement",
    title: "Term - Commencement Date",
    keywords: ["commencement date"],
  },
  {
    id: "cl-term-duration",
    title: "Term - Lease Duration",
    keywords: ["lease duration", "duration"],
  },
  { id: "cl-term-renewal", title: "Term - Renewal Option", keywords: ["renewal option"] },
  { id: "cl-term-break", title: "Term - Break Clause", keywords: ["break clause"] },
  {
    id: "cl-term-controlled-tenancy-risk",
    title: "Term - Controlled Tenancy Risk (<5 years without termination)",
    keywords: [
      "controlled tenancy",
      "landlord and tenant shops hotels and catering establishments act",
    ],
  },
  { id: "cl-rent-base", title: "Rent - Base Rent Amount", keywords: ["base rent amount"] },
  { id: "cl-rent-frequency", title: "Rent - Payment Frequency", keywords: ["payment frequency"] },
  { id: "cl-rent-due", title: "Rent - Due Date", keywords: ["due date"] },
  { id: "cl-rent-vat", title: "Rent - VAT Treatment", keywords: ["vat treatment"] },
  {
    id: "cl-rent-late-interest",
    title: "Rent - Late Payment Interest",
    keywords: ["interest on late payment", "late payment interest"],
  },
  { id: "cl-review-interval", title: "Rent Review - Interval", keywords: ["review interval"] },
  {
    id: "cl-review-market-formula",
    title: "Rent Review - Market Rent Formula",
    keywords: ["market rent formula"],
  },
  {
    id: "cl-review-valuation",
    title: "Rent Review - Valuation Mechanism",
    keywords: ["valuation mechanism"],
  },
  {
    id: "cl-review-cpi",
    title: "Rent Review - CPI Increase",
    keywords: ["cpi-based increase", "cpi"],
  },
  {
    id: "cl-deposit-amount",
    title: "Security Deposit - Amount",
    keywords: ["security deposit", "amount"],
  },
  {
    id: "cl-deposit-refund",
    title: "Security Deposit - Refund Conditions",
    keywords: ["conditions for refund"],
  },
  {
    id: "cl-deposit-deductions",
    title: "Security Deposit - Deductions Permitted",
    keywords: ["deductions permitted"],
  },
  {
    id: "cl-service-charge-scope",
    title: "Service Charge - Scope",
    keywords: ["scope of service charge"],
  },
  {
    id: "cl-service-charge-apportionment",
    title: "Service Charge - Apportionment Formula",
    keywords: ["apportionment formula"],
  },
  {
    id: "cl-service-charge-budget",
    title: "Service Charge - Budget Approval",
    keywords: ["budget approval"],
  },
  {
    id: "cl-service-charge-audit",
    title: "Service Charge - Audit Rights",
    keywords: ["audit rights"],
  },
  {
    id: "cl-use-permitted",
    title: "Use of Premises - Permitted Use",
    keywords: ["permitted use clause"],
  },
  {
    id: "cl-use-zoning",
    title: "Use of Premises - Zoning Compliance",
    keywords: ["zoning compliance"],
  },
  {
    id: "cl-use-prohibited",
    title: "Use of Premises - Prohibited Uses",
    keywords: ["prohibited uses"],
  },
  {
    id: "cl-maint-landlord-structural",
    title: "Maintenance - Landlord Structural Repairs",
    keywords: ["landlord structural repairs"],
  },
  {
    id: "cl-maint-tenant-internal",
    title: "Maintenance - Tenant Internal Repairs",
    keywords: ["tenant internal repairs"],
  },
  {
    id: "cl-maint-common-area",
    title: "Maintenance - Common Area Maintenance",
    keywords: ["common area maintenance"],
  },
  {
    id: "cl-maint-dilapidations",
    title: "Maintenance - Dilapidations Clause",
    keywords: ["dilapidations clause"],
  },
  {
    id: "cl-alter-consent",
    title: "Alterations/Fit-Out - Consent Requirement",
    keywords: ["consent requirement"],
  },
  {
    id: "cl-alter-approval",
    title: "Alterations/Fit-Out - Approval Process",
    keywords: ["approval process"],
  },
  {
    id: "cl-alter-reinstatement",
    title: "Alterations/Fit-Out - Reinstatement Obligation",
    keywords: ["reinstatement obligation"],
  },
  {
    id: "cl-insurance-landlord",
    title: "Insurance - Landlord Building Insurance",
    keywords: ["landlord building insurance"],
  },
  {
    id: "cl-insurance-tenant-public",
    title: "Insurance - Tenant Public Liability Insurance",
    keywords: ["tenant public liability insurance"],
  },
  {
    id: "cl-insurance-contributions",
    title: "Insurance - Insurance Contributions",
    keywords: ["insurance contributions"],
  },
  {
    id: "cl-outgoings-electricity",
    title: "Utilities/Outgoings - Electricity",
    keywords: ["electricity"],
  },
  { id: "cl-outgoings-water", title: "Utilities/Outgoings - Water", keywords: ["water"] },
  { id: "cl-outgoings-rates", title: "Utilities/Outgoings - Rates", keywords: ["rates"] },
  {
    id: "cl-outgoings-land-rent",
    title: "Utilities/Outgoings - Land Rent",
    keywords: ["land rent"],
  },
  {
    id: "cl-outgoings-waste",
    title: "Utilities/Outgoings - Waste Disposal",
    keywords: ["waste disposal"],
  },
  {
    id: "cl-assignment-consent",
    title: "Assignment/Subletting - Consent Requirements",
    keywords: ["consent requirements"],
  },
  {
    id: "cl-assignment-conditions",
    title: "Assignment/Subletting - Conditions",
    keywords: ["conditions for assignment"],
  },
  {
    id: "cl-assignment-liability",
    title: "Assignment/Subletting - Continuing Liability",
    keywords: ["continuing liability"],
  },
  {
    id: "cl-quiet-enjoyment",
    title: "Quiet Enjoyment",
    keywords: ["peaceful occupation", "quiet enjoyment"],
  },
  {
    id: "cl-default-nonpayment",
    title: "Default - Non-Payment of Rent",
    keywords: ["non-payment of rent", "non payment"],
  },
  {
    id: "cl-default-breach",
    title: "Default - Breach of Covenants",
    keywords: ["breach of covenants"],
  },
  {
    id: "cl-default-notice",
    title: "Default - Notice Requirements",
    keywords: ["notice requirements"],
  },
  { id: "cl-default-cure", title: "Default - Cure Period", keywords: ["cure period"] },
  {
    id: "cl-remedy-distress",
    title: "Remedies - Distress for Rent Act",
    keywords: ["distress for rent act", "distress for rent"],
  },
  {
    id: "cl-remedy-reentry-forfeiture",
    title: "Remedies - Re-entry and Forfeiture",
    keywords: ["re-entry", "forfeiture"],
  },
  { id: "cl-remedy-termination", title: "Remedies - Termination", keywords: ["termination"] },
  {
    id: "cl-remedy-arrears",
    title: "Remedies - Recovery of Arrears",
    keywords: ["recovery of arrears"],
  },
  {
    id: "cl-remedy-controlled-tribunal-approval",
    title: "Remedies - Tribunal Approval for Controlled Tenancy Termination",
    keywords: ["controlled tenancies require tribunal approval"],
  },
  {
    id: "cl-controlled-tribunal-jurisdiction",
    title: "Controlled Tenancy - Tribunal Jurisdiction",
    keywords: ["recognition of tribunal jurisdiction"],
  },
  {
    id: "cl-controlled-notice-procedure",
    title: "Controlled Tenancy - Notice Procedures",
    keywords: ["compliance with notice procedures"],
  },
  {
    id: "cl-controlled-act",
    title: "Controlled Tenancy - Landlord and Tenant Act Compliance",
    keywords: ["landlord and tenant shops hotels and catering establishments act"],
  },
  {
    id: "cl-laws-health-safety",
    title: "Compliance with Laws - Health and Safety",
    keywords: ["health and safety compliance"],
  },
  {
    id: "cl-laws-business-licensing",
    title: "Compliance with Laws - Business Licensing",
    keywords: ["business licensing"],
  },
  {
    id: "cl-laws-environment",
    title: "Compliance with Laws - Environmental",
    keywords: ["environmental compliance"],
  },
  { id: "cl-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  {
    id: "cl-surrender-early",
    title: "Surrender - Early Termination by Agreement",
    keywords: ["early termination by agreement"],
  },
  {
    id: "cl-surrender-condition",
    title: "Surrender - Condition of Premises",
    keywords: ["condition of premises"],
  },
  {
    id: "cl-indemnity-tenant-damage",
    title: "Indemnity - Tenant Damage",
    keywords: ["tenant indemnity for damage"],
  },
  {
    id: "cl-indemnity-third-party",
    title: "Indemnity - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  {
    id: "cl-liability-limitation",
    title: "Limitation of Liability",
    keywords: ["limitation of liability"],
  },
  { id: "cl-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "cl-dispute-tribunal",
    title: "Dispute Resolution - Tribunal (Controlled Tenancy)",
    keywords: ["tribunal", "controlled tenancy"],
  },
  {
    id: "cl-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  {
    id: "cl-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  { id: "cl-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "cl-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "cl-severability", title: "Severability", keywords: ["severability"] },
  { id: "cl-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "cl-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...COMMERCIAL_LEASE_ITEMS];

const template = createKenyaTemplate("commercial_lease", ITEMS);

export default template;
