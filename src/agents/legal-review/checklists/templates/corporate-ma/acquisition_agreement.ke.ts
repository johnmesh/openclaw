import {
  CORPORATE_ITEMS,
  createKenyaTemplate,
  type ChecklistTemplateItem,
} from "../../shared.ke.js";

const ACQUISITION_ITEMS: ChecklistTemplateItem[] = [
  { id: "acq-parties", title: "Parties", keywords: ["buyer", "seller", "parties"] },
  { id: "acq-parties-seller", title: "Parties - Seller(s)", keywords: ["seller"] },
  { id: "acq-parties-buyer", title: "Parties - Buyer(s)", keywords: ["buyer"] },
  { id: "acq-parties-target", title: "Parties - Target Company", keywords: ["target company"] },
  { id: "acq-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "acq-parties-registration",
    title: "Parties - Registration Details",
    keywords: ["registration details"],
  },
  {
    id: "acq-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  { id: "acq-recitals", title: "Background / Recitals", keywords: ["background", "recitals"] },
  {
    id: "acq-agreement-sell",
    title: "Agreement to Sell and Purchase",
    keywords: ["agreement to sell", "agreement to purchase"],
  },
  {
    id: "acq-sale-structure",
    title: "Sale and Purchase of Shares/Assets",
    keywords: ["sale and purchase of shares", "sale and purchase of assets"],
  },
  {
    id: "acq-structure-percentage",
    title: "Acquisition Structure - Percentage Acquired",
    keywords: ["percentage acquired"],
  },
  {
    id: "acq-structure-control-threshold",
    title: "Acquisition Structure - Control Threshold",
    keywords: ["control threshold"],
  },
  {
    id: "acq-structure-effective-date",
    title: "Acquisition Structure - Effective Date",
    keywords: ["effective date"],
  },
  { id: "acq-purchase-price", title: "Purchase Price", keywords: ["purchase price"] },
  {
    id: "acq-price-adjustment",
    title: "Purchase Price Adjustment Mechanism",
    keywords: ["price adjustment", "adjustment mechanism"],
  },
  {
    id: "acq-completion-accounts",
    title: "Completion Accounts",
    keywords: ["completion accounts"],
  },
  {
    id: "acq-locked-box",
    title: "Locked Box Mechanism",
    keywords: ["locked box"],
  },
  { id: "acq-earnout", title: "Earn-Out", keywords: ["earn-out", "earn out"] },
  {
    id: "acq-consideration-structure",
    title: "Consideration Structure",
    keywords: ["consideration", "cash", "deferred", "shares"],
  },
  { id: "acq-payment-deposit", title: "Payment Terms - Deposit", keywords: ["deposit"] },
  {
    id: "acq-payment-on-completion",
    title: "Payment Terms - Payment on Completion",
    keywords: ["payment on completion"],
  },
  {
    id: "acq-payment-deferred",
    title: "Payment Terms - Deferred Consideration",
    keywords: ["deferred consideration"],
  },
  {
    id: "acq-payment-escrow",
    title: "Payment Terms - Escrow Arrangements",
    keywords: ["escrow arrangements"],
  },
  {
    id: "acq-payment-earnout-formula",
    title: "Payment Terms - Earn-Out Formula",
    keywords: ["earn-out formula", "earn out formula"],
  },
  {
    id: "acq-conditions-board",
    title: "Conditions Precedent - Board Approvals",
    keywords: ["board approvals"],
  },
  {
    id: "acq-conditions-regulatory",
    title: "Conditions Precedent - Regulatory Approvals",
    keywords: ["regulatory approval", "consent"],
  },
  {
    id: "acq-conditions-antitrust",
    title: "Conditions Precedent - Competition/Antitrust",
    keywords: ["competition approval", "antitrust"],
  },
  {
    id: "acq-conditions-shareholder",
    title: "Conditions Precedent - Shareholder Approval",
    keywords: ["shareholder approval"],
  },
  {
    id: "acq-conditions-third-party",
    title: "Conditions Precedent - Third-Party Consents",
    keywords: ["third-party consent", "third party consent"],
  },
  {
    id: "acq-conditions-mac",
    title: "No Material Adverse Change",
    keywords: ["material adverse change", "mac"],
  },
  {
    id: "acq-completion-date",
    title: "Completion Date",
    keywords: ["completion date", "closing date"],
  },
  {
    id: "acq-completion-deliverables",
    title: "Deliverables at Completion",
    keywords: ["deliverables at completion", "closing deliverables"],
  },
  {
    id: "acq-transfer-title",
    title: "Transfer of Title",
    keywords: ["transfer of title", "title transfer"],
  },
  {
    id: "acq-transfer-instruments",
    title: "Completion - Transfer Instruments",
    keywords: ["transfer instruments"],
  },
  {
    id: "acq-board-resignations",
    title: "Board Resignations",
    keywords: ["board resignation", "director resignation"],
  },
  {
    id: "acq-register-updates",
    title: "Completion - Register Updates",
    keywords: ["register updates"],
  },
  {
    id: "acq-companies-act",
    title: "Completion - Companies Act Compliance",
    keywords: ["companies act"],
  },
  {
    id: "acq-release-guarantees",
    title: "Release of Guarantees",
    keywords: ["release of guarantees", "guarantee release"],
  },
  { id: "acq-payment-mechanics", title: "Payment Mechanics", keywords: ["payment mechanics"] },
  {
    id: "acq-warranties-corporate",
    title: "Warranties - Corporate Authority",
    keywords: ["corporate authority"],
  },
  {
    id: "acq-warranties-title",
    title: "Warranties - Title to Shares/Assets",
    keywords: ["title to shares", "title to assets"],
  },
  {
    id: "acq-warranties-financial",
    title: "Warranties - Financial Statements",
    keywords: ["financial statements"],
  },
  {
    id: "acq-warranties-undisclosed",
    title: "Warranties - No Undisclosed Liabilities",
    keywords: ["undisclosed liabilities"],
  },
  { id: "acq-warranties-tax", title: "Warranties - Tax Compliance", keywords: ["tax compliance"] },
  {
    id: "acq-warranties-litigation",
    title: "Warranties - Litigation Status",
    keywords: ["litigation", "dispute pending"],
  },
  {
    id: "acq-warranties-ip",
    title: "Warranties - IP Ownership",
    keywords: ["ip ownership", "intellectual property ownership"],
  },
  {
    id: "acq-warranties-employment",
    title: "Warranties - Employment Matters",
    keywords: ["employment matters", "employees"],
  },
  {
    id: "acq-warranties-contracts",
    title: "Warranties - Material Contracts",
    keywords: ["material contracts"],
  },
  {
    id: "acq-warranties-compliance",
    title: "Warranties - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "acq-warranties-insolvency",
    title: "Warranties - Insolvency Status",
    keywords: ["insolvency status", "insolvent"],
  },
  {
    id: "acq-warranties-buyer-authority",
    title: "Warranties (Buyer) - Authority",
    keywords: ["buyer authority", "authority"],
  },
  {
    id: "acq-warranties-buyer-funding",
    title: "Warranties (Buyer) - Funding Capability",
    keywords: ["funding capability", "funding"],
  },
  {
    id: "acq-warranties-negotiated",
    title: "Warranties - Heavily Negotiated Scope",
    keywords: ["most negotiated sections"],
  },
  {
    id: "acq-indemnity-tax",
    title: "Indemnities - Tax Liabilities",
    keywords: ["tax indemnity", "tax liabilities"],
  },
  {
    id: "acq-indemnity-litigation",
    title: "Indemnities - Ongoing Litigation",
    keywords: ["litigation indemnity", "ongoing litigation"],
  },
  {
    id: "acq-indemnity-environment",
    title: "Indemnities - Environmental Liabilities",
    keywords: ["environmental liabilities"],
  },
  {
    id: "acq-indemnity-regulatory",
    title: "Indemnities - Regulatory Penalties",
    keywords: ["regulatory penalties"],
  },
  {
    id: "acq-indemnity-dd",
    title: "Indemnities - Due Diligence Risks",
    keywords: ["due diligence", "identified risks"],
  },
  { id: "acq-liability-cap", title: "Liability Caps", keywords: ["liability cap"] },
  {
    id: "acq-liability-basket",
    title: "Basket Threshold",
    keywords: ["basket threshold", "basket"],
  },
  {
    id: "acq-liability-deminimis",
    title: "De Minimis Threshold",
    keywords: ["de minimis"],
  },
  {
    id: "acq-liability-time-limits",
    title: "Time Limits for Claims",
    keywords: ["time limit for claims", "claims period"],
  },
  {
    id: "acq-liability-consequential",
    title: "Exclusion of Consequential Loss",
    keywords: ["consequential loss"],
  },
  {
    id: "acq-liability-fraud-carveout",
    title: "Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  {
    id: "acq-covenant-precompletion",
    title: "Pre-Completion Covenants",
    keywords: ["pre-completion covenant", "ordinary course"],
  },
  {
    id: "acq-covenant-nonewcontracts",
    title: "No New Major Contracts",
    keywords: ["no new major contracts"],
  },
  { id: "acq-covenant-no-new-debt", title: "No New Debt", keywords: ["no new debt"] },
  {
    id: "acq-covenant-noassetdisposals",
    title: "No Asset Disposals",
    keywords: ["no asset disposals", "asset disposal"],
  },
  {
    id: "acq-covenant-postcompletion",
    title: "Post-Completion Covenants",
    keywords: ["post-completion covenant", "post completion covenant"],
  },
  {
    id: "acq-covenant-post-records",
    title: "Post-Completion - Access to Records",
    keywords: ["access to records"],
  },
  { id: "acq-covenant-noncompete", title: "Non-Compete", keywords: ["non-compete", "non compete"] },
  {
    id: "acq-covenant-nonsolicit",
    title: "Non-Solicitation",
    keywords: ["non-solicitation", "non solicitation"],
  },
  {
    id: "acq-covenant-transitional",
    title: "Transitional Services",
    keywords: ["transitional services"],
  },
  {
    id: "acq-restrictive-confidentiality",
    title: "Restrictive Covenants - Confidentiality",
    keywords: ["confidentiality"],
  },
  {
    id: "acq-restrictive-reasonable",
    title: "Restrictive Covenants - Reasonableness",
    keywords: ["reasonable to be enforceable"],
  },
  {
    id: "acq-restrictive-nondealing",
    title: "Non-Dealing",
    keywords: ["non-dealing", "non dealing"],
  },
  { id: "acq-tax-covenant", title: "Tax Covenant", keywords: ["tax covenant"] },
  {
    id: "acq-tax-allocation",
    title: "Tax Allocation Pre/Post Completion",
    keywords: ["pre-completion tax", "post-completion tax", "pre-completion", "post-completion"],
  },
  { id: "acq-tax-vat", title: "VAT Provisions", keywords: ["vat"] },
  {
    id: "acq-reg-merger-notification",
    title: "Competition/Regulatory - Merger Notification",
    keywords: ["merger notification"],
  },
  {
    id: "acq-reg-cak-conditions",
    title: "Competition/Regulatory - CAK Conditions",
    keywords: ["conditions imposed by cak"],
  },
  {
    id: "acq-reg-cooperation",
    title: "Competition/Regulatory - Regulatory Cooperation",
    keywords: ["cooperation with regulators"],
  },
  {
    id: "acq-financing-debt-condition",
    title: "Financing - Debt Financing Condition",
    keywords: ["debt financing condition"],
  },
  {
    id: "acq-financing-commitment-letters",
    title: "Financing - Commitment Letters",
    keywords: ["commitment letters"],
  },
  { id: "acq-employees-tupe", title: "TUPE", keywords: ["tupe", "employee transfer"] },
  {
    id: "acq-employees-pension",
    title: "Pension Obligations",
    keywords: ["pension obligations", "pension"],
  },
  {
    id: "acq-employees-severance",
    title: "Severance Liabilities",
    keywords: ["severance liabilities", "severance"],
  },
  { id: "acq-ip-transfer", title: "Transfer of IP", keywords: ["transfer of ip", "ip transfer"] },
  {
    id: "acq-ip-assignment-docs",
    title: "IP Assignment Documentation",
    keywords: ["assignment documentation", "ip assignment"],
  },
  {
    id: "acq-ip-licenseback",
    title: "License-Back Arrangements",
    keywords: ["license-back", "license back"],
  },
  {
    id: "acq-conf-nda",
    title: "Pre-existing NDA Confirmation",
    keywords: ["nda", "non-disclosure agreement"],
  },
  {
    id: "acq-conf-announcements",
    title: "Public Announcements Restrictions",
    keywords: ["public announcements", "announcement restriction"],
  },
  {
    id: "acq-termination-precompletion",
    title: "Termination Before Completion",
    keywords: ["termination before completion", "pre-completion termination"],
  },
  {
    id: "acq-termination-longstop",
    title: "Termination - Long-Stop Date",
    keywords: ["long-stop date"],
  },
  { id: "acq-termination-break-fee", title: "Break Fees", keywords: ["break fee", "break fees"] },
  {
    id: "acq-termination-effect",
    title: "Effect of Termination",
    keywords: ["effect of termination"],
  },
  { id: "acq-confidentiality", title: "Confidentiality", keywords: ["confidentiality"] },
  { id: "acq-announcements", title: "Announcements", keywords: ["announcements"] },
  {
    id: "acq-dispute-escrow",
    title: "Escrow Dispute Mechanisms",
    keywords: ["escrow dispute", "escrow mechanism"],
  },
  { id: "acq-counterparts", title: "Counterparts", keywords: ["counterparts"] },
  {
    id: "acq-third-party-rights",
    title: "Third-Party Rights",
    keywords: ["third-party rights", "third party rights"],
  },
];

const ITEMS: ChecklistTemplateItem[] = [...CORPORATE_ITEMS, ...ACQUISITION_ITEMS];

const template = createKenyaTemplate("acquisition_agreement", ITEMS);

export default template;
