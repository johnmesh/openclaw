import { createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const FRANCHISE_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "fr-parties-legal",
    title: "Parties - Full Legal Names",
    keywords: ["full legal name", "legal name"],
  },
  {
    id: "fr-parties-cr12",
    title: "Parties - Company Registration Numbers (CR12)",
    keywords: ["cr12", "company registration number", "registration number"],
  },
  {
    id: "fr-parties-address",
    title: "Parties - Registered Addresses",
    keywords: ["registered address", "address"],
  },
  {
    id: "fr-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "fr-grant-brand-right",
    title: "Grant of Franchise - Right to Operate Under Brand",
    keywords: ["right to operate under brand", "grant of franchise"],
  },
  {
    id: "fr-grant-scope",
    title: "Grant of Franchise - Scope of Business Activities",
    keywords: ["scope of business activities", "business activities"],
  },
  {
    id: "fr-grant-territory",
    title: "Grant of Franchise - Territory",
    keywords: ["territory", "defined geographic area"],
  },
  {
    id: "fr-grant-exclusive",
    title: "Grant of Franchise - Exclusivity / Non-Exclusivity",
    keywords: ["exclusive", "non-exclusive"],
  },
  {
    id: "fr-grant-competition",
    title: "Grant of Franchise - Competition Law Compliance",
    keywords: ["competition act", "competition law", "exclusive territories"],
  },
  { id: "fr-term-initial", title: "Term and Renewal - Initial Term", keywords: ["initial term"] },
  {
    id: "fr-term-renewal-conditions",
    title: "Term and Renewal - Renewal Conditions",
    keywords: ["renewal conditions", "conditions for renewal"],
  },
  {
    id: "fr-term-renewal-fees",
    title: "Term and Renewal - Renewal Fees",
    keywords: ["renewal fee", "renewal fees"],
  },
  {
    id: "fr-term-performance-renewal",
    title: "Term and Renewal - Performance-Based Renewal",
    keywords: ["performance-based renewal", "performance based renewal"],
  },
  {
    id: "fr-fee-initial",
    title: "Franchise Fees - Initial Franchise Fee",
    keywords: ["initial franchise fee"],
  },
  {
    id: "fr-fee-royalties",
    title: "Franchise Fees - Ongoing Royalties",
    keywords: ["ongoing royalties", "percentage of gross revenue", "royalty"],
  },
  {
    id: "fr-fee-marketing-fund",
    title: "Franchise Fees - Advertising/Marketing Fund",
    keywords: ["advertising fund", "marketing fund"],
  },
  {
    id: "fr-fee-tech",
    title: "Franchise Fees - Technology/System Fees",
    keywords: ["technology fee", "system fee"],
  },
  { id: "fr-fee-vat", title: "Franchise Fees - VAT Treatment", keywords: ["vat", "vat treatment"] },
  {
    id: "fr-payment-reporting",
    title: "Payment and Reporting - Revenue Reporting",
    keywords: ["revenue reporting", "sales report"],
  },
  {
    id: "fr-payment-audit",
    title: "Payment and Reporting - Audit Rights",
    keywords: ["audit rights", "audit"],
  },
  {
    id: "fr-payment-timeline",
    title: "Payment and Reporting - Payment Timelines",
    keywords: ["payment timeline", "payment due"],
  },
  {
    id: "fr-payment-late-interest",
    title: "Payment and Reporting - Late Payment Interest",
    keywords: ["late payment interest", "default interest"],
  },
  {
    id: "fr-ip-trademark-license",
    title: "Intellectual Property - Trademark License",
    keywords: ["trademark license", "trade marks act"],
  },
  {
    id: "fr-ip-branding",
    title: "Intellectual Property - Logos and Trade Dress",
    keywords: ["logos", "trade dress", "branding"],
  },
  {
    id: "fr-ip-goodwill",
    title: "Intellectual Property - Ownership of Goodwill",
    keywords: ["ownership of goodwill", "goodwill"],
  },
  {
    id: "fr-ip-misuse",
    title: "Intellectual Property - Prohibition on Misuse",
    keywords: ["prohibition on ip misuse", "ip misuse"],
  },
  {
    id: "fr-ip-infringement",
    title: "Intellectual Property - Infringement Handling",
    keywords: ["ip infringement handling", "infringement procedure"],
  },
  {
    id: "fr-ip-registration-kenya",
    title: "Intellectual Property - Kenya Registration for Enforceability",
    keywords: ["registered in kenya", "ip registration in kenya"],
  },
  {
    id: "fr-ops-manual",
    title: "Operations and Standards - Operations Manual Compliance",
    keywords: ["operations manual compliance", "operations manual"],
  },
  {
    id: "fr-ops-quality",
    title: "Operations and Standards - Quality Control",
    keywords: ["quality control"],
  },
  {
    id: "fr-ops-inspection",
    title: "Operations and Standards - Inspection Rights",
    keywords: ["inspection rights", "inspection"],
  },
  {
    id: "fr-ops-health-safety",
    title: "Operations and Standards - Health and Safety Compliance",
    keywords: ["health and safety laws", "health and safety"],
  },
  {
    id: "fr-ops-brand-standards",
    title: "Operations and Standards - Branding Standards",
    keywords: ["branding standards", "brand standards"],
  },
  {
    id: "fr-supply-approved",
    title: "Supply and Purchasing - Approved Suppliers",
    keywords: ["approved suppliers"],
  },
  {
    id: "fr-supply-mandatory",
    title: "Supply and Purchasing - Mandatory Purchasing",
    keywords: ["mandatory purchasing", "mandatory purchasing obligations"],
  },
  {
    id: "fr-supply-import-compliance",
    title: "Supply and Purchasing - Import Compliance",
    keywords: ["import compliance", "import requirements"],
  },
  {
    id: "fr-marketing-national-fund",
    title: "Marketing and Advertising - National Advertising Fund",
    keywords: ["national advertising fund"],
  },
  {
    id: "fr-marketing-local",
    title: "Marketing and Advertising - Local Advertising Obligations",
    keywords: ["local advertising obligations", "local marketing"],
  },
  {
    id: "fr-marketing-approval",
    title: "Marketing and Advertising - Marketing Material Approval",
    keywords: ["approval process for marketing materials", "marketing approval"],
  },
  {
    id: "fr-conf-trade-secrets",
    title: "Confidentiality - Trade Secrets",
    keywords: ["trade secrets"],
  },
  {
    id: "fr-conf-manual",
    title: "Confidentiality - Operations Manual Confidentiality",
    keywords: ["operations manual confidentiality"],
  },
  {
    id: "fr-conf-duration",
    title: "Confidentiality - Duration Post-Termination",
    keywords: ["duration post-termination", "duration after termination"],
  },
  {
    id: "fr-restrictive-term",
    title: "Restrictive Covenants - Non-Compete During Term",
    keywords: ["non-compete during term", "non compete during term"],
  },
  {
    id: "fr-restrictive-post",
    title: "Restrictive Covenants - Post-Termination Non-Compete",
    keywords: ["post-termination non-compete", "post termination non-compete"],
  },
  {
    id: "fr-restrictive-customer",
    title: "Restrictive Covenants - Non-Solicitation of Customers",
    keywords: ["non-solicitation of customers", "non solicitation of customers"],
  },
  {
    id: "fr-restrictive-employee",
    title: "Restrictive Covenants - Non-Solicitation of Employees",
    keywords: ["non-solicitation of employees", "non solicitation of employees"],
  },
  {
    id: "fr-restrictive-reasonable",
    title: "Restrictive Covenants - Reasonableness in Time and Geography",
    keywords: ["reasonable in time", "reasonable in geography", "kenyan contract principles"],
  },
  {
    id: "fr-indemnity-franchisee",
    title: "Indemnity - Franchisee to Franchisor",
    keywords: ["franchisee indemnity to franchisor", "franchisee indemnity"],
  },
  {
    id: "fr-indemnity-third-party",
    title: "Indemnity - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  {
    id: "fr-indemnity-regulatory",
    title: "Indemnity - Regulatory Fines",
    keywords: ["regulatory fines"],
  },
  { id: "fr-liability-cap", title: "Limitation of Liability - Cap", keywords: ["liability cap"] },
  {
    id: "fr-liability-indirect",
    title: "Limitation of Liability - Exclusion of Indirect Loss",
    keywords: ["indirect losses", "consequential loss"],
  },
  {
    id: "fr-liability-fraud",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  {
    id: "fr-insurance-public",
    title: "Insurance - Public Liability",
    keywords: ["public liability insurance"],
  },
  {
    id: "fr-insurance-product",
    title: "Insurance - Product Liability",
    keywords: ["product liability insurance"],
  },
  {
    id: "fr-insurance-proof",
    title: "Insurance - Proof of Coverage",
    keywords: ["proof of coverage", "proof of insurance"],
  },
  {
    id: "fr-assignment-consent",
    title: "Assignment and Transfer - Franchisor Consent",
    keywords: ["franchisor consent required", "franchisor consent"],
  },
  {
    id: "fr-assignment-change-control",
    title: "Assignment and Transfer - Change of Control Restrictions",
    keywords: ["change of control restrictions", "change of control"],
  },
  {
    id: "fr-assignment-transfer-fee",
    title: "Assignment and Transfer - Transfer Fees",
    keywords: ["transfer fees"],
  },
  {
    id: "fr-default-events",
    title: "Default - Events of Default",
    keywords: ["events of default"],
  },
  { id: "fr-default-cure", title: "Default - Cure Periods", keywords: ["cure periods"] },
  {
    id: "fr-termination-breach",
    title: "Termination - Breach",
    keywords: ["termination for breach"],
  },
  {
    id: "fr-termination-insolvency",
    title: "Termination - Insolvency",
    keywords: ["insolvency termination", "insolvency"],
  },
  {
    id: "fr-termination-immediate",
    title: "Termination - Immediate Triggers",
    keywords: ["immediate termination triggers", "immediate termination"],
  },
  {
    id: "fr-post-cease-trademark",
    title: "Consequences - Cease Use of Trademarks",
    keywords: ["cease use of trademarks"],
  },
  {
    id: "fr-post-debranding",
    title: "Consequences - De-Branding",
    keywords: ["de-branding", "debranding"],
  },
  {
    id: "fr-post-return-conf",
    title: "Consequences - Return Confidential Materials",
    keywords: ["return of confidential materials"],
  },
  {
    id: "fr-post-outstanding",
    title: "Consequences - Outstanding Fees",
    keywords: ["outstanding fees", "outstanding amounts"],
  },
  {
    id: "fr-post-noncompete",
    title: "Consequences - Post-Termination Non-Compete",
    keywords: ["post-termination non-compete", "post termination non-compete"],
  },
  {
    id: "fr-dispute-governing-law",
    title: "Dispute Resolution - Governing Law Kenya",
    keywords: ["governing law kenya", "governing law: kenya"],
  },
  {
    id: "fr-dispute-forum",
    title: "Dispute Resolution - Courts of Kenya or Arbitration",
    keywords: ["courts of kenya", "arbitration"],
  },
  { id: "fr-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  { id: "fr-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  { id: "fr-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  {
    id: "fr-amendment-written",
    title: "Amendment (Written Only)",
    keywords: ["written amendment", "written only", "amendment"],
  },
  { id: "fr-severability", title: "Severability", keywords: ["severability"] },
  { id: "fr-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "fr-notices", title: "Notices", keywords: ["notices", "notice"] },
  {
    id: "fr-reg-business-license",
    title: "Regulatory Compliance - Business Licensing",
    keywords: ["business licensing", "business license"],
  },
  {
    id: "fr-reg-sector-permits",
    title: "Regulatory Compliance - Sector-Specific Permits",
    keywords: ["sector-specific permits", "sector specific permits"],
  },
  {
    id: "fr-reg-consumer-protection",
    title: "Regulatory Compliance - Consumer Protection Act",
    keywords: ["consumer protection act"],
  },
  {
    id: "fr-reg-employment",
    title: "Regulatory Compliance - Employment Act",
    keywords: ["employment act", "employment compliance"],
  },
  {
    id: "fr-reg-data-protection",
    title: "Regulatory Compliance - Data Protection Act",
    keywords: ["data protection act", "data protection compliance"],
  },
];

const ITEMS: ChecklistTemplateItem[] = [...FRANCHISE_ITEMS];

const template = createKenyaTemplate("franchise_agreement", ITEMS);

export default template;
