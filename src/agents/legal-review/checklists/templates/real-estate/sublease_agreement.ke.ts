import { createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const SUBLEASE_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "sub-parties-sublessor",
    title: "Parties - Head Tenant (Sublessor)",
    keywords: ["head tenant", "sublessor"],
  },
  {
    id: "sub-parties-sublessee",
    title: "Parties - Subtenant (Sublessee)",
    keywords: ["subtenant", "sublessee"],
  },
  {
    id: "sub-parties-landlord-consent",
    title: "Parties - Landlord Consent",
    keywords: ["landlord consent"],
  },
  { id: "sub-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "sub-parties-id-reg",
    title: "Parties - ID/Company Registration Numbers",
    keywords: ["id", "company registration numbers"],
  },
  { id: "sub-parties-kra", title: "Parties - KRA PIN", keywords: ["kra pin"] },
  { id: "sub-parties-addresses", title: "Parties - Addresses", keywords: ["addresses"] },
  {
    id: "sub-recitals-head-lease",
    title: "Recitals - Reference to Head Lease",
    keywords: ["reference to head lease"],
  },
  {
    id: "sub-recitals-consent",
    title: "Recitals - Landlord Consent Confirmation",
    keywords: ["confirmation of landlord consent"],
  },
  {
    id: "sub-premises-title",
    title: "Premises - Property Title Number",
    keywords: ["property title number"],
  },
  {
    id: "sub-premises-portion",
    title: "Premises - Portion Being Subleased",
    keywords: ["portion being subleased"],
  },
  { id: "sub-premises-unit", title: "Premises - Unit Number", keywords: ["unit number"] },
  { id: "sub-premises-floor", title: "Premises - Floor Area", keywords: ["floor area"] },
  {
    id: "sub-premises-shared",
    title: "Premises - Shared/Common Areas",
    keywords: ["shared", "common areas"],
  },
  {
    id: "sub-premises-lra",
    title: "Premises - Land Registration Act Alignment",
    keywords: ["land registration act"],
  },
  {
    id: "sub-term-commencement",
    title: "Term - Commencement Date",
    keywords: ["commencement date"],
  },
  { id: "sub-term-expiry", title: "Term - Expiry Date", keywords: ["expiry date"] },
  {
    id: "sub-term-not-exceed-head",
    title: "Term - Does Not Exceed Head Lease",
    keywords: ["does not exceed head lease term"],
  },
  {
    id: "sub-term-renewal",
    title: "Term - Renewal Rights Subject to Head Lease",
    keywords: ["renewal rights", "head lease"],
  },
  { id: "sub-rent-amount", title: "Rent - Sublease Rent", keywords: ["sublease rent"] },
  { id: "sub-rent-frequency", title: "Rent - Payment Frequency", keywords: ["payment frequency"] },
  { id: "sub-rent-due", title: "Rent - Due Date", keywords: ["due date"] },
  { id: "sub-rent-vat", title: "Rent - VAT Treatment", keywords: ["vat treatment"] },
  {
    id: "sub-rent-late-interest",
    title: "Rent - Late Payment Interest",
    keywords: ["late payment interest"],
  },
  { id: "sub-deposit-amount", title: "Security Deposit - Amount", keywords: ["amount"] },
  {
    id: "sub-deposit-holding",
    title: "Security Deposit - Holding Conditions",
    keywords: ["holding conditions"],
  },
  {
    id: "sub-deposit-refund",
    title: "Security Deposit - Refund Terms",
    keywords: ["refund terms"],
  },
  {
    id: "sub-deposit-deductions",
    title: "Security Deposit - Deductions",
    keywords: ["deductions"],
  },
  {
    id: "sub-use-permitted",
    title: "Use of Premises - Permitted Use",
    keywords: ["permitted use"],
  },
  { id: "sub-use-zoning", title: "Use of Premises - Zoning Compliance", keywords: ["zoning laws"] },
  {
    id: "sub-use-head-lease-restrictions",
    title: "Use of Premises - Head Lease Restrictions",
    keywords: ["head lease restrictions"],
  },
  {
    id: "sub-head-lease-compliance",
    title: "Compliance with Head Lease",
    keywords: ["comply with all terms of head lease"],
  },
  {
    id: "sub-head-lease-incorporation",
    title: "Head Lease - Incorporation Clause",
    keywords: ["incorporation clause"],
  },
  {
    id: "sub-head-lease-copy",
    title: "Head Lease - Copy Provision",
    keywords: ["provision of copy of head lease"],
  },
  {
    id: "sub-head-lease-critical",
    title: "Head Lease Compliance - Critical Clause",
    keywords: ["critical clause in kenya subleases"],
  },
  {
    id: "sub-maint-tenant",
    title: "Maintenance and Repairs - Subtenant Repairs",
    keywords: ["subtenant repair obligations"],
  },
  {
    id: "sub-maint-structural",
    title: "Maintenance and Repairs - Structural Repairs",
    keywords: ["structural repairs"],
  },
  {
    id: "sub-maint-shared",
    title: "Maintenance and Repairs - Shared Responsibilities",
    keywords: ["shared maintenance responsibilities"],
  },
  {
    id: "sub-outgoings-service-charge",
    title: "Utilities/Outgoings - Service Charge Allocation",
    keywords: ["service charge allocation"],
  },
  {
    id: "sub-outgoings-utilities",
    title: "Utilities/Outgoings - Electricity/Water",
    keywords: ["electricity", "water"],
  },
  { id: "sub-outgoings-rates", title: "Utilities/Outgoings - Rates", keywords: ["rates"] },
  {
    id: "sub-outgoings-shared-costs",
    title: "Utilities/Outgoings - Other Shared Costs",
    keywords: ["other shared costs"],
  },
  {
    id: "sub-alter-consent",
    title: "Alterations - Consent Requirements",
    keywords: ["consent requirements"],
  },
  {
    id: "sub-alter-restoration",
    title: "Alterations - Restoration Obligations",
    keywords: ["restoration obligations"],
  },
  {
    id: "sub-assignment-further-subletting",
    title: "Assignment/Further Subletting - Prohibition or Consent",
    keywords: ["further subletting", "prohibition", "consent requirement"],
  },
  {
    id: "sub-assignment-head-lease",
    title: "Assignment/Further Subletting - Head Lease Compliance",
    keywords: ["compliance with head lease"],
  },
  {
    id: "sub-insurance-obligations",
    title: "Insurance - Subtenant Insurance Obligations",
    keywords: ["subtenant insurance obligations"],
  },
  {
    id: "sub-insurance-public-liability",
    title: "Insurance - Public Liability Insurance",
    keywords: ["public liability insurance"],
  },
  {
    id: "sub-default-nonpayment",
    title: "Default - Non-Payment of Rent",
    keywords: ["non-payment of rent", "non payment"],
  },
  {
    id: "sub-default-breach",
    title: "Default - Breach of Covenants",
    keywords: ["breach of covenants"],
  },
  {
    id: "sub-default-notice",
    title: "Default - Notice Requirements",
    keywords: ["notice requirements"],
  },
  { id: "sub-default-cure", title: "Default - Cure Period", keywords: ["cure period"] },
  { id: "sub-remedy-termination", title: "Remedies - Termination", keywords: ["termination"] },
  {
    id: "sub-remedy-distress",
    title: "Remedies - Distress for Rent Act",
    keywords: ["distress for rent act", "distress for rent"],
  },
  {
    id: "sub-remedy-arrears",
    title: "Remedies - Recovery of Arrears",
    keywords: ["recovery of arrears"],
  },
  {
    id: "sub-remedy-controlled-tenancy-risk",
    title: "Remedies - Controlled Tenancy Rule Risk",
    keywords: ["controlled tenancy rules may apply"],
  },
  {
    id: "sub-controlled-tenancy-tribunal",
    title: "Controlled Tenancy - Tribunal Jurisdiction",
    keywords: [
      "tribunal jurisdiction",
      "landlord and tenant shops hotels and catering establishments act",
    ],
  },
  { id: "sub-quiet-enjoyment", title: "Quiet Enjoyment", keywords: ["quiet enjoyment"] },
  {
    id: "sub-indemnity-subtenant",
    title: "Indemnity - Subtenant Indemnifies Sublessor",
    keywords: ["subtenant indemnifies sublessor"],
  },
  {
    id: "sub-indemnity-damage",
    title: "Indemnity - Liability for Damage",
    keywords: ["liability for damage"],
  },
  {
    id: "sub-termination-head-lease-expiry",
    title: "Termination - On Expiry of Head Lease",
    keywords: ["termination upon expiry of head lease"],
  },
  {
    id: "sub-termination-breach",
    title: "Termination - Breach",
    keywords: ["termination for breach"],
  },
  { id: "sub-termination-insolvency", title: "Termination - Insolvency", keywords: ["insolvency"] },
  {
    id: "sub-consequence-vacant-possession",
    title: "Consequences - Vacant Possession",
    keywords: ["vacant possession"],
  },
  {
    id: "sub-consequence-fixtures",
    title: "Consequences - Removal of Fixtures",
    keywords: ["removal of fixtures"],
  },
  {
    id: "sub-consequence-restoration",
    title: "Consequences - Restoration of Premises",
    keywords: ["restoration of premises"],
  },
  { id: "sub-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  { id: "sub-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "sub-dispute-tribunal",
    title: "Dispute Resolution - Tribunal (Controlled Tenancy)",
    keywords: ["tribunal", "controlled tenancy"],
  },
  {
    id: "sub-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  {
    id: "sub-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  { id: "sub-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "sub-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "sub-severability", title: "Severability", keywords: ["severability"] },
  { id: "sub-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "sub-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...SUBLEASE_ITEMS];

const template = createKenyaTemplate("sublease_agreement", ITEMS);

export default template;
