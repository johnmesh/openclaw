import { createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const LEASE_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "lease-parties-legal",
    title: "Parties - Full Legal Names",
    keywords: ["full legal names"],
  },
  {
    id: "lease-parties-id-registration",
    title: "Parties - ID/Passport or Registration Number",
    keywords: ["id/passport", "registration number"],
  },
  { id: "lease-parties-kra", title: "Parties - KRA PIN", keywords: ["kra pin"] },
  { id: "lease-parties-addresses", title: "Parties - Addresses", keywords: ["addresses"] },
  { id: "lease-recit", title: "Recitals/Background", keywords: ["recitals", "background"] },
  {
    id: "lease-premises-title",
    title: "Description of Premises - Title Number",
    keywords: ["title number"],
  },
  {
    id: "lease-premises-description",
    title: "Description of Premises - Property Description",
    keywords: ["property description"],
  },
  {
    id: "lease-premises-unit",
    title: "Description of Premises - Unit Number",
    keywords: ["unit number"],
  },
  {
    id: "lease-premises-size",
    title: "Description of Premises - Size/Area",
    keywords: ["size", "area"],
  },
  {
    id: "lease-premises-lra-match",
    title: "Description of Premises - Match Land Registration Act Records",
    keywords: ["land registration act"],
  },
  {
    id: "lease-term-commencement",
    title: "Term - Commencement Date",
    keywords: ["commencement date"],
  },
  { id: "lease-term-duration", title: "Term - Duration", keywords: ["duration"] },
  { id: "lease-term-renewal", title: "Term - Renewal Option", keywords: ["renewal option"] },
  { id: "lease-term-break", title: "Term - Break Clause", keywords: ["break clause"] },
  {
    id: "lease-term-controlled-tenancy-risk",
    title: "Term - Controlled Tenancy Risk (<5 years without termination clause)",
    keywords: [
      "landlord and tenant shops hotels and catering establishments act",
      "controlled tenancy",
    ],
  },
  {
    id: "lease-rent-amount",
    title: "Rent - Monthly/Quarterly Rent",
    keywords: ["monthly rent", "quarterly rent"],
  },
  { id: "lease-rent-payment-date", title: "Rent - Payment Date", keywords: ["payment date"] },
  { id: "lease-rent-payment-mode", title: "Rent - Mode of Payment", keywords: ["mode of payment"] },
  {
    id: "lease-rent-escalation",
    title: "Rent - Escalation Clause",
    keywords: ["rent escalation clause"],
  },
  { id: "lease-deposit-amount", title: "Security Deposit - Amount", keywords: ["deposit amount"] },
  {
    id: "lease-deposit-holding",
    title: "Security Deposit - Holding Conditions",
    keywords: ["holding conditions"],
  },
  {
    id: "lease-deposit-refund",
    title: "Security Deposit - Refund Terms",
    keywords: ["refund terms"],
  },
  {
    id: "lease-deposit-deductions",
    title: "Security Deposit - Deductions Allowed",
    keywords: ["deductions allowed"],
  },
  {
    id: "lease-review-interval",
    title: "Rent Review - Review Interval",
    keywords: ["review interval"],
  },
  {
    id: "lease-review-market",
    title: "Rent Review - Market Rent Clause",
    keywords: ["market rent clause"],
  },
  {
    id: "lease-review-valuation",
    title: "Rent Review - Valuation Method",
    keywords: ["valuation method"],
  },
  {
    id: "lease-use-permitted",
    title: "Use of Premises - Permitted Use",
    keywords: ["permitted use"],
  },
  {
    id: "lease-use-prohibited",
    title: "Use of Premises - Prohibited Activities",
    keywords: ["prohibited activities"],
  },
  {
    id: "lease-use-zoning",
    title: "Use of Premises - Zoning Compliance",
    keywords: ["zoning laws"],
  },
  {
    id: "lease-outgoings-electricity",
    title: "Utilities and Outgoings - Electricity",
    keywords: ["electricity"],
  },
  { id: "lease-outgoings-water", title: "Utilities and Outgoings - Water", keywords: ["water"] },
  {
    id: "lease-outgoings-service-charge",
    title: "Utilities and Outgoings - Service Charge",
    keywords: ["service charge"],
  },
  { id: "lease-outgoings-rates", title: "Utilities and Outgoings - Rates", keywords: ["rates"] },
  {
    id: "lease-outgoings-insurance",
    title: "Utilities and Outgoings - Insurance Contributions",
    keywords: ["insurance contributions"],
  },
  {
    id: "lease-maint-landlord",
    title: "Maintenance and Repairs - Landlord Obligations",
    keywords: ["landlord obligations"],
  },
  {
    id: "lease-maint-tenant",
    title: "Maintenance and Repairs - Tenant Obligations",
    keywords: ["tenant obligations"],
  },
  {
    id: "lease-maint-structural-split",
    title: "Maintenance and Repairs - Structural vs Non-Structural",
    keywords: ["structural", "non-structural repairs"],
  },
  {
    id: "lease-alter-consent",
    title: "Alterations - Consent Requirements",
    keywords: ["consent requirements"],
  },
  {
    id: "lease-alter-restoration",
    title: "Alterations - Restoration Obligation",
    keywords: ["restoration obligation"],
  },
  {
    id: "lease-insurance-landlord",
    title: "Insurance - Landlord Insurance",
    keywords: ["landlord insurance"],
  },
  {
    id: "lease-insurance-tenant-contents",
    title: "Insurance - Tenant Contents Insurance",
    keywords: ["tenant contents insurance"],
  },
  {
    id: "lease-insurance-risk",
    title: "Insurance - Risk Allocation",
    keywords: ["risk allocation"],
  },
  {
    id: "lease-quiet-enjoyment",
    title: "Quiet Enjoyment",
    keywords: ["quiet enjoyment", "peaceful occupation"],
  },
  {
    id: "lease-assign-sublet-consent",
    title: "Assignment/Subletting - Consent Requirements",
    keywords: ["assignment", "subletting", "consent requirements"],
  },
  {
    id: "lease-assign-sublet-restrictions",
    title: "Assignment/Subletting - Restrictions",
    keywords: ["restrictions"],
  },
  {
    id: "lease-assign-sublet-post-liability",
    title: "Assignment/Subletting - Liability After Assignment",
    keywords: ["liability after assignment"],
  },
  {
    id: "lease-default-nonpayment",
    title: "Default - Non-Payment of Rent",
    keywords: ["non-payment of rent", "non payment"],
  },
  {
    id: "lease-default-breach",
    title: "Default - Breach of Covenant",
    keywords: ["breach of covenant"],
  },
  {
    id: "lease-default-notice",
    title: "Default - Notice Requirements",
    keywords: ["notice requirements"],
  },
  { id: "lease-default-cure", title: "Default - Cure Period", keywords: ["cure period"] },
  {
    id: "lease-remedy-distress",
    title: "Remedies - Distress for Rent Act",
    keywords: ["distress for rent act", "distress for rent"],
  },
  { id: "lease-remedy-reentry", title: "Remedies - Re-entry", keywords: ["re-entry", "re entry"] },
  { id: "lease-remedy-forfeiture", title: "Remedies - Forfeiture", keywords: ["forfeiture"] },
  { id: "lease-remedy-termination", title: "Remedies - Termination", keywords: ["termination"] },
  {
    id: "lease-remedy-controlled-tribunal",
    title: "Remedies - Controlled Tenancy Tribunal Procedure",
    keywords: [
      "controlled tenancies require tribunal procedures",
      "business premises rent tribunal",
    ],
  },
  {
    id: "lease-controlled-tenancy-act",
    title: "Controlled Tenancy - Landlord and Tenant Act Compliance",
    keywords: ["landlord and tenant shops hotels and catering establishments act"],
  },
  {
    id: "lease-controlled-tenancy-bprt",
    title: "Controlled Tenancy - BPRT Jurisdiction",
    keywords: ["business premises rent tribunal jurisdiction", "bprt"],
  },
  {
    id: "lease-surrender-voluntary",
    title: "Surrender - Voluntary Surrender Terms",
    keywords: ["voluntary surrender terms"],
  },
  {
    id: "lease-surrender-condition",
    title: "Surrender - Condition of Property",
    keywords: ["condition of property"],
  },
  { id: "lease-force-majeure", title: "Force Majeure (Optional)", keywords: ["force majeure"] },
  {
    id: "lease-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "lease-dispute-mediation",
    title: "Dispute Resolution - Mediation",
    keywords: ["mediation"],
  },
  {
    id: "lease-dispute-tribunal",
    title: "Dispute Resolution - Tribunal (Controlled Tenancy)",
    keywords: ["tribunal", "controlled tenancy"],
  },
  {
    id: "lease-dispute-forum",
    title: "Dispute Resolution - Arbitration or Courts",
    keywords: ["arbitration", "courts"],
  },
  { id: "lease-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "lease-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "lease-severability", title: "Severability", keywords: ["severability"] },
  { id: "lease-waiver", title: "Waiver", keywords: ["waiver"] },
  {
    id: "lease-notices-method",
    title: "Notices - Method of Service",
    keywords: ["method of service"],
  },
  {
    id: "lease-notices-addresses",
    title: "Notices - Addresses for Service",
    keywords: ["addresses for service"],
  },
];

const ITEMS: ChecklistTemplateItem[] = [...LEASE_ITEMS];

const template = createKenyaTemplate("lease", ITEMS);

export default template;
