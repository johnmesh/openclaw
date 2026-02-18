import { createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const DESIGN_BUILD_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "db-parties-employer",
    title: "Parties - Employer/Developer",
    keywords: ["employer", "developer"],
  },
  {
    id: "db-parties-contractor",
    title: "Parties - Design and Build Contractor",
    keywords: ["design and build contractor"],
  },
  { id: "db-parties-guarantor", title: "Parties - Guarantor", keywords: ["guarantor"] },
  {
    id: "db-parties-legal-reg",
    title: "Parties - Legal Names and Registration Details",
    keywords: ["legal names", "registration details"],
  },
  {
    id: "db-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "db-scope-design",
    title: "Scope of Works - Design Obligations",
    keywords: ["design obligations"],
  },
  {
    id: "db-scope-construction",
    title: "Scope of Works - Construction Obligations",
    keywords: ["construction obligations"],
  },
  {
    id: "db-scope-performance",
    title: "Scope of Works - Performance Requirements",
    keywords: ["performance requirements"],
  },
  {
    id: "db-scope-er",
    title: "Scope of Works - Employer Requirements",
    keywords: ["employer s requirements", "er"],
  },
  {
    id: "db-scope-proposals",
    title: "Scope of Works - Contractor Proposals",
    keywords: ["contractor s proposals"],
  },
  {
    id: "db-scope-performance-spec",
    title: "Scope of Works - Performance Specification Basis",
    keywords: ["performance specification replaces detailed design drawings"],
  },
  {
    id: "db-design-full-responsibility",
    title: "Contractor Design Responsibility - Full Responsibility",
    keywords: ["full design responsibility"],
  },
  {
    id: "db-design-statutory-approvals",
    title: "Contractor Design Responsibility - Statutory Approvals",
    keywords: ["compliance with statutory approvals"],
  },
  {
    id: "db-design-standard-care",
    title: "Contractor Design Responsibility - Professional Standard of Care",
    keywords: ["professional standard of care"],
  },
  {
    id: "db-design-liability-period",
    title: "Contractor Design Responsibility - Design Liability Period",
    keywords: ["design liability period"],
  },
  { id: "db-price-lumpsum", title: "Contract Price - Lump Sum", keywords: ["lump sum price"] },
  {
    id: "db-price-milestone",
    title: "Contract Price - Milestone Pricing",
    keywords: ["milestone based pricing"],
  },
  {
    id: "db-price-provisional",
    title: "Contract Price - Provisional Sums",
    keywords: ["provisional sums"],
  },
  { id: "db-price-vat", title: "Contract Price - VAT Treatment", keywords: ["vat treatment"] },
  {
    id: "db-price-adjustment",
    title: "Contract Price - Price Adjustment Mechanism",
    keywords: ["price adjustment mechanism"],
  },
  {
    id: "db-payment-interim",
    title: "Payment Terms - Interim Payment Certificates",
    keywords: ["interim payment certificates"],
  },
  {
    id: "db-payment-advance",
    title: "Payment Terms - Advance Payment",
    keywords: ["advance payment"],
  },
  { id: "db-payment-retention", title: "Payment Terms - Retention", keywords: ["retention"] },
  {
    id: "db-payment-final-account",
    title: "Payment Terms - Final Account",
    keywords: ["final account"],
  },
  {
    id: "db-programme-commencement",
    title: "Programme - Commencement Date",
    keywords: ["commencement date"],
  },
  {
    id: "db-programme-completion",
    title: "Programme - Completion Date",
    keywords: ["completion date"],
  },
  { id: "db-programme-milestones", title: "Programme - Milestones", keywords: ["milestones"] },
  {
    id: "db-programme-eot",
    title: "Programme - Extension of Time",
    keywords: ["extension of time", "eot"],
  },
  {
    id: "db-security-performance-bond",
    title: "Performance Security - Performance Bond",
    keywords: ["performance bond"],
  },
  {
    id: "db-security-advance-guarantee",
    title: "Performance Security - Advance Payment Guarantee",
    keywords: ["advance payment guarantee"],
  },
  {
    id: "db-security-parent-guarantee",
    title: "Performance Security - Parent Company Guarantee",
    keywords: ["parent company guarantee"],
  },
  {
    id: "db-variation-procedure",
    title: "Variations - Procedure",
    keywords: ["variation procedure"],
  },
  {
    id: "db-variation-valuation",
    title: "Variations - Valuation",
    keywords: ["valuation of variations"],
  },
  {
    id: "db-variation-scope-change",
    title: "Variations - Change in Scope Mechanism",
    keywords: ["change in scope mechanism"],
  },
  {
    id: "db-delay-events",
    title: "Delay and Liquidated Damages - Delay Events",
    keywords: ["delay events"],
  },
  {
    id: "db-delay-ld-rate",
    title: "Delay and Liquidated Damages - LD Rate",
    keywords: ["liquidated damages rate"],
  },
  {
    id: "db-delay-ld-cap",
    title: "Delay and Liquidated Damages - LD Cap",
    keywords: ["cap on damages"],
  },
  {
    id: "db-approval-submission",
    title: "Design Approval - Submission Timelines",
    keywords: ["submission timelines"],
  },
  {
    id: "db-approval-review",
    title: "Design Approval - Review Procedures",
    keywords: ["review procedures"],
  },
  {
    id: "db-approval-employer-rights",
    title: "Design Approval - Employer Approval Rights",
    keywords: ["employer approval rights"],
  },
  {
    id: "db-approval-liability-remains",
    title: "Design Approval - Approval Does Not Relieve Contractor Liability",
    keywords: ["approval not relieving contractor of liability"],
  },
  {
    id: "db-reg-building",
    title: "Regulatory Compliance - Building Approvals",
    keywords: ["building approvals"],
  },
  {
    id: "db-reg-environment",
    title: "Regulatory Compliance - Environmental Approvals",
    keywords: ["environmental approvals"],
  },
  {
    id: "db-reg-planning-act",
    title: "Regulatory Compliance - Physical and Land Use Planning Act",
    keywords: ["physical and land use planning act"],
  },
  {
    id: "db-reg-nca",
    title: "Regulatory Compliance - NCA Compliance",
    keywords: ["national construction authority act", "nca compliance"],
  },
  {
    id: "db-hs-osha",
    title: "Health and Safety - OSHA Compliance",
    keywords: ["occupational safety and health act"],
  },
  {
    id: "db-hs-plan",
    title: "Health and Safety - Safety Management Plan",
    keywords: ["safety management plan"],
  },
  {
    id: "db-ins-car",
    title: "Insurance - Contractor All Risk",
    keywords: ["contractor s all risk", "car insurance"],
  },
  {
    id: "db-ins-pi",
    title: "Insurance - Professional Indemnity",
    keywords: ["professional indemnity insurance"],
  },
  {
    id: "db-ins-third-party",
    title: "Insurance - Third-Party Liability",
    keywords: ["third-party liability insurance"],
  },
  {
    id: "db-ins-pi-critical",
    title: "Insurance - Professional Indemnity Critical for D&B",
    keywords: ["professional indemnity is critical"],
  },
  {
    id: "db-sub-design-consultants",
    title: "Subcontracting - Design Consultants",
    keywords: ["appointment of design consultants"],
  },
  {
    id: "db-sub-responsibility",
    title: "Subcontracting - Responsibility for Subcontractors",
    keywords: ["responsibility for subcontractors"],
  },
  {
    id: "db-sub-consent",
    title: "Subcontracting - Consent Requirements",
    keywords: ["consent requirements"],
  },
  {
    id: "db-defects-duration",
    title: "Defects Liability Period - Duration",
    keywords: ["duration"],
  },
  {
    id: "db-defects-rectification",
    title: "Defects Liability Period - Rectification Process",
    keywords: ["rectification process"],
  },
  {
    id: "db-defects-retention-release",
    title: "Defects Liability Period - Retention Release",
    keywords: ["retention release"],
  },
  {
    id: "db-ip-ownership",
    title: "Intellectual Property - Ownership of Design Documents",
    keywords: ["ownership of design documents"],
  },
  {
    id: "db-ip-license-employer",
    title: "Intellectual Property - License to Employer",
    keywords: ["license to employer"],
  },
  {
    id: "db-ip-restrictions",
    title: "Intellectual Property - Use Restrictions",
    keywords: ["use restrictions"],
  },
  {
    id: "db-indemnity-design-defects",
    title: "Indemnity - Design Defects",
    keywords: ["design defects"],
  },
  {
    id: "db-indemnity-third-party",
    title: "Indemnity - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  {
    id: "db-indemnity-regulatory-fines",
    title: "Indemnity - Regulatory Fines",
    keywords: ["regulatory fines"],
  },
  {
    id: "db-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "db-liability-indirect",
    title: "Limitation of Liability - Indirect Loss Exclusion",
    keywords: ["indirect loss"],
  },
  {
    id: "db-liability-prof-negligence-carveout",
    title: "Limitation of Liability - Professional Negligence Carve-Out",
    keywords: ["professional negligence carve-out"],
  },
  { id: "db-suspension", title: "Suspension", keywords: ["suspension"] },
  { id: "db-term-default", title: "Termination - Default", keywords: ["termination for default"] },
  {
    id: "db-term-convenience",
    title: "Termination - Convenience",
    keywords: ["termination for convenience"],
  },
  { id: "db-term-insolvency", title: "Termination - Insolvency", keywords: ["insolvency"] },
  {
    id: "db-term-consequences",
    title: "Termination - Consequences",
    keywords: ["consequences of termination"],
  },
  { id: "db-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  {
    id: "db-dispute-adjudication",
    title: "Dispute Resolution - Adjudication",
    keywords: ["adjudication"],
  },
  { id: "db-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "db-dispute-arbitration",
    title: "Dispute Resolution - Arbitration",
    keywords: ["arbitration"],
  },
  {
    id: "db-dispute-courts",
    title: "Dispute Resolution - Kenyan Courts",
    keywords: ["kenyan courts"],
  },
  {
    id: "db-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "db-procurement-ppada",
    title: "Public Projects - PPADA Compliance",
    keywords: ["public procurement and asset disposal act"],
  },
  { id: "db-assignment", title: "Assignment", keywords: ["assignment"] },
  { id: "db-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "db-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "db-severability", title: "Severability", keywords: ["severability"] },
  { id: "db-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "db-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...DESIGN_BUILD_ITEMS];

const template = createKenyaTemplate("design_build_contract", ITEMS);

export default template;
