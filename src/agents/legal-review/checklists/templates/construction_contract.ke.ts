import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const CONSTRUCTION_CONTRACT_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "cc-parties-employer",
    title: "Parties - Employer/Developer",
    keywords: ["employer", "developer"],
  },
  { id: "cc-parties-contractor", title: "Parties - Contractor", keywords: ["contractor"] },
  {
    id: "cc-parties-consultant",
    title: "Parties - Consultant/Engineer",
    keywords: ["consultant", "engineer"],
  },
  {
    id: "cc-parties-legal-reg",
    title: "Parties - Legal Names and Registration Details",
    keywords: ["legal names", "registration details"],
  },
  {
    id: "cc-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "cc-scope-works",
    title: "Scope of Works - Description",
    keywords: ["description of works"],
  },
  { id: "cc-scope-specs", title: "Scope of Works - Specifications", keywords: ["specifications"] },
  { id: "cc-scope-drawings", title: "Scope of Works - Drawings", keywords: ["drawings"] },
  {
    id: "cc-scope-boq",
    title: "Scope of Works - Bills of Quantities",
    keywords: ["bills of quantities"],
  },
  {
    id: "cc-scope-workmanship",
    title: "Scope of Works - Workmanship Standards",
    keywords: ["standards of workmanship"],
  },
  {
    id: "cc-price-model",
    title: "Contract Price - Lump Sum or Remeasurement",
    keywords: ["lump sum", "remeasurement"],
  },
  {
    id: "cc-price-provisional",
    title: "Contract Price - Provisional Sums",
    keywords: ["provisional sums"],
  },
  { id: "cc-price-vat", title: "Contract Price - VAT Treatment", keywords: ["vat treatment"] },
  {
    id: "cc-price-adjustment",
    title: "Contract Price - Price Adjustment Mechanism",
    keywords: ["price adjustment mechanism"],
  },
  {
    id: "cc-payment-interim",
    title: "Payment Terms - Interim Payment Certificates",
    keywords: ["interim payment certificates"],
  },
  { id: "cc-payment-schedule", title: "Payment Terms - Schedule", keywords: ["payment schedule"] },
  {
    id: "cc-payment-retention",
    title: "Payment Terms - Retention Money",
    keywords: ["retention money"],
  },
  {
    id: "cc-payment-advance",
    title: "Payment Terms - Advance Payment",
    keywords: ["advance payment"],
  },
  {
    id: "cc-payment-final-account",
    title: "Payment Terms - Final Account",
    keywords: ["final account"],
  },
  {
    id: "cc-security-performance-bond",
    title: "Performance Security - Performance Bond",
    keywords: ["performance bond"],
  },
  {
    id: "cc-security-advance-guarantee",
    title: "Performance Security - Advance Payment Guarantee",
    keywords: ["advance payment guarantee"],
  },
  {
    id: "cc-security-parent-guarantee",
    title: "Performance Security - Parent Company Guarantee",
    keywords: ["parent company guarantee"],
  },
  {
    id: "cc-programme-commencement",
    title: "Programme/Time - Commencement Date",
    keywords: ["commencement date"],
  },
  {
    id: "cc-programme-completion",
    title: "Programme/Time - Completion Date",
    keywords: ["completion date"],
  },
  { id: "cc-programme-milestones", title: "Programme/Time - Milestones", keywords: ["milestones"] },
  {
    id: "cc-programme-eot",
    title: "Programme/Time - Extension of Time (EOT)",
    keywords: ["extension of time", "eot"],
  },
  {
    id: "cc-variation-procedure",
    title: "Variations - Procedure",
    keywords: ["variation procedure"],
  },
  {
    id: "cc-variation-valuation",
    title: "Variations - Valuation",
    keywords: ["valuation of variations"],
  },
  {
    id: "cc-variation-change-orders",
    title: "Variations - Change Orders",
    keywords: ["change orders"],
  },
  {
    id: "cc-delay-events",
    title: "Delay and Liquidated Damages - Delay Events",
    keywords: ["delay events"],
  },
  {
    id: "cc-delay-ld-rate",
    title: "Delay and Liquidated Damages - LD Rate",
    keywords: ["liquidated damages rate"],
  },
  {
    id: "cc-delay-ld-cap",
    title: "Delay and Liquidated Damages - LD Cap",
    keywords: ["cap on damages"],
  },
  {
    id: "cc-quality-standards",
    title: "Quality and Standards - Kenyan Standards Compliance",
    keywords: ["compliance with kenyan standards"],
  },
  {
    id: "cc-quality-nca",
    title: "Quality and Standards - NCA Registration Compliance",
    keywords: ["nca registration", "national construction authority act"],
  },
  {
    id: "cc-quality-inspection",
    title: "Quality and Standards - Inspection Rights",
    keywords: ["inspection rights"],
  },
  {
    id: "cc-quality-testing",
    title: "Quality and Standards - Testing and Commissioning",
    keywords: ["testing", "commissioning"],
  },
  {
    id: "cc-hs-osha",
    title: "Health and Safety - OSHA Compliance",
    keywords: ["occupational safety and health act"],
  },
  { id: "cc-hs-plans", title: "Health and Safety - Safety Plans", keywords: ["safety plans"] },
  {
    id: "cc-hs-accident-reporting",
    title: "Health and Safety - Accident Reporting",
    keywords: ["accident reporting"],
  },
  {
    id: "cc-reg-building",
    title: "Regulatory Approvals - Building Approvals",
    keywords: ["building approvals"],
  },
  {
    id: "cc-reg-environment",
    title: "Regulatory Approvals - Environmental Approvals",
    keywords: ["environmental approvals"],
  },
  {
    id: "cc-reg-planning-act",
    title: "Regulatory Approvals - Physical and Land Use Planning Act",
    keywords: ["physical and land use planning act"],
  },
  {
    id: "cc-ins-car",
    title: "Insurance - Contractor All Risk (CAR)",
    keywords: ["contractor s all risk", "car insurance"],
  },
  {
    id: "cc-ins-workmen",
    title: "Insurance - Workmen’s Compensation",
    keywords: ["workmen s compensation"],
  },
  {
    id: "cc-ins-third-party",
    title: "Insurance - Third-Party Liability",
    keywords: ["third-party liability insurance", "third party liability"],
  },
  {
    id: "cc-subcontract-consent",
    title: "Subcontracting - Consent Requirements",
    keywords: ["consent requirements"],
  },
  {
    id: "cc-subcontract-responsibility",
    title: "Subcontracting - Responsibility for Subcontractors",
    keywords: ["responsibility for subcontractors"],
  },
  {
    id: "cc-materials-ownership",
    title: "Materials and Equipment - Ownership",
    keywords: ["ownership"],
  },
  {
    id: "cc-materials-risk",
    title: "Materials and Equipment - Risk Allocation",
    keywords: ["risk allocation"],
  },
  { id: "cc-materials-storage", title: "Materials and Equipment - Storage", keywords: ["storage"] },
  {
    id: "cc-defects-duration",
    title: "Defects Liability Period - Duration",
    keywords: ["duration"],
  },
  {
    id: "cc-defects-rectification",
    title: "Defects Liability Period - Rectification Obligations",
    keywords: ["rectification obligations"],
  },
  {
    id: "cc-defects-retention-release",
    title: "Defects Liability Period - Retention Release",
    keywords: ["retention release"],
  },
  {
    id: "cc-indemnity-third-party",
    title: "Indemnity - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  {
    id: "cc-indemnity-injury-death",
    title: "Indemnity - Injury or Death",
    keywords: ["injury", "death"],
  },
  {
    id: "cc-indemnity-property-damage",
    title: "Indemnity - Property Damage",
    keywords: ["property damage"],
  },
  {
    id: "cc-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "cc-liability-indirect",
    title: "Limitation of Liability - Indirect Loss Exclusion",
    keywords: ["indirect loss"],
  },
  {
    id: "cc-liability-fraud",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  { id: "cc-suspension-rights", title: "Suspension - Rights", keywords: ["suspension rights"] },
  {
    id: "cc-suspension-payment",
    title: "Suspension - Payment During Suspension",
    keywords: ["payment during suspension"],
  },
  { id: "cc-term-default", title: "Termination - Default", keywords: ["termination for default"] },
  {
    id: "cc-term-convenience",
    title: "Termination - Convenience",
    keywords: ["termination for convenience"],
  },
  { id: "cc-term-insolvency", title: "Termination - Insolvency", keywords: ["insolvency"] },
  {
    id: "cc-term-consequences",
    title: "Termination - Consequences",
    keywords: ["consequences of termination"],
  },
  { id: "cc-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  {
    id: "cc-dispute-dab",
    title: "Dispute Resolution - Dispute Adjudication Board",
    keywords: ["dispute adjudication board"],
  },
  { id: "cc-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "cc-dispute-arbitration",
    title: "Dispute Resolution - Arbitration",
    keywords: ["arbitration"],
  },
  {
    id: "cc-dispute-courts",
    title: "Dispute Resolution - Kenyan Courts",
    keywords: ["kenyan courts"],
  },
  {
    id: "cc-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "cc-procurement-ppada",
    title: "Public Projects - PPADA Compliance",
    keywords: ["public procurement and asset disposal act"],
  },
  { id: "cc-assignment", title: "Assignment", keywords: ["assignment"] },
  { id: "cc-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "cc-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "cc-severability", title: "Severability", keywords: ["severability"] },
  { id: "cc-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "cc-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...CONSTRUCTION_CONTRACT_ITEMS];

const template = createKenyaTemplate("construction_contract", ITEMS);

export default template;
