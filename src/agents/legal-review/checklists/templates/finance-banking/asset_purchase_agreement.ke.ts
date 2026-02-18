import { createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const APA_ITEMS: ChecklistTemplateItem[] = [
  { id: "apa-parties-seller", title: "Parties - Seller", keywords: ["seller"] },
  { id: "apa-parties-buyer", title: "Parties - Buyer", keywords: ["buyer"] },
  {
    id: "apa-parties-target-business",
    title: "Parties - Target Business",
    keywords: ["target business"],
  },
  { id: "apa-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "apa-parties-registration",
    title: "Parties - Registration Numbers",
    keywords: ["registration numbers"],
  },
  {
    id: "apa-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "apa-sale-assets-description",
    title: "Sale and Purchase - Asset Description",
    keywords: ["description of assets being sold"],
  },
  {
    id: "apa-sale-tangible",
    title: "Sale and Purchase - Tangible Assets",
    keywords: ["equipment", "inventory", "vehicles"],
  },
  {
    id: "apa-sale-intangible",
    title: "Sale and Purchase - Intangible Assets",
    keywords: ["intellectual property", "goodwill"],
  },
  {
    id: "apa-sale-contracts-assigned",
    title: "Sale and Purchase - Assigned Contracts",
    keywords: ["contracts assigned"],
  },
  {
    id: "apa-sale-excluded-assets",
    title: "Sale and Purchase - Excluded Assets",
    keywords: ["excluded assets"],
  },
  {
    id: "apa-sale-precision",
    title: "Sale and Purchase - Precise Asset Identification",
    keywords: ["asset identification must be precise"],
  },
  {
    id: "apa-price-total",
    title: "Purchase Price - Total Consideration",
    keywords: ["total consideration"],
  },
  {
    id: "apa-price-allocation",
    title: "Purchase Price - Allocation Across Asset Classes",
    keywords: ["allocation of price among asset classes"],
  },
  { id: "apa-price-currency", title: "Purchase Price - Currency", keywords: ["currency"] },
  { id: "apa-payment-deposit", title: "Payment Terms - Deposit", keywords: ["deposit"] },
  {
    id: "apa-payment-completion",
    title: "Payment Terms - Payment on Completion",
    keywords: ["payment on completion"],
  },
  {
    id: "apa-payment-deferred",
    title: "Payment Terms - Deferred Consideration",
    keywords: ["deferred consideration"],
  },
  {
    id: "apa-payment-earnout",
    title: "Payment Terms - Earn-Out",
    keywords: ["earn-out", "earn out"],
  },
  {
    id: "apa-payment-escrow",
    title: "Payment Terms - Escrow Arrangements",
    keywords: ["escrow arrangements"],
  },
  {
    id: "apa-liabilities-assumed",
    title: "Assumed Liabilities - Expressly Assumed",
    keywords: ["liabilities expressly assumed"],
  },
  {
    id: "apa-liabilities-excluded",
    title: "Assumed Liabilities - Excluded Liabilities",
    keywords: ["excluded liabilities"],
  },
  {
    id: "apa-liabilities-existing-debts",
    title: "Assumed Liabilities - Existing Debts Treatment",
    keywords: ["treatment of existing debts"],
  },
  {
    id: "apa-liabilities-separation",
    title: "Assumed Liabilities - Clear Separation",
    keywords: ["clear separation of assumed vs excluded liabilities"],
  },
  {
    id: "apa-cp-regulatory",
    title: "Conditions Precedent - Regulatory Approvals",
    keywords: ["regulatory approvals"],
  },
  {
    id: "apa-cp-third-party",
    title: "Conditions Precedent - Third-Party Consents",
    keywords: ["third-party consents", "contract assignments"],
  },
  {
    id: "apa-cp-competition",
    title: "Conditions Precedent - Competition Clearance",
    keywords: ["competition act"],
  },
  {
    id: "apa-cp-board",
    title: "Conditions Precedent - Board Approvals",
    keywords: ["board approvals"],
  },
  { id: "apa-closing-date", title: "Completion - Completion Date", keywords: ["completion date"] },
  {
    id: "apa-closing-deliverables",
    title: "Completion - Deliverables",
    keywords: ["deliverables"],
  },
  {
    id: "apa-closing-transfer-docs",
    title: "Completion - Transfer Documents",
    keywords: ["transfer documents"],
  },
  {
    id: "apa-closing-handover",
    title: "Completion - Asset Handover",
    keywords: ["asset handover"],
  },
  {
    id: "apa-warranty-seller-ownership",
    title: "Representations (Seller) - Ownership of Assets",
    keywords: ["ownership of assets"],
  },
  {
    id: "apa-warranty-seller-encumbrances",
    title: "Representations (Seller) - No Encumbrances",
    keywords: ["no encumbrances"],
  },
  {
    id: "apa-warranty-seller-contracts",
    title: "Representations (Seller) - Valid Contracts",
    keywords: ["valid contracts"],
  },
  {
    id: "apa-warranty-seller-tax",
    title: "Representations (Seller) - Tax Compliance",
    keywords: ["tax compliance"],
  },
  {
    id: "apa-warranty-seller-liabilities",
    title: "Representations (Seller) - No Undisclosed Liabilities",
    keywords: ["no undisclosed liabilities"],
  },
  {
    id: "apa-warranty-buyer-authority",
    title: "Representations (Buyer) - Authority to Purchase",
    keywords: ["authority to purchase"],
  },
  {
    id: "apa-warranty-buyer-funding",
    title: "Representations (Buyer) - Funding Availability",
    keywords: ["funding availability"],
  },
  {
    id: "apa-indemnity-specific",
    title: "Indemnities - Specific Risks",
    keywords: ["specific risk indemnities"],
  },
  { id: "apa-indemnity-tax", title: "Indemnities - Tax Indemnity", keywords: ["tax indemnity"] },
  {
    id: "apa-indemnity-employees",
    title: "Indemnities - Employee Liabilities",
    keywords: ["employee liabilities"],
  },
  {
    id: "apa-indemnity-environment",
    title: "Indemnities - Environmental Liabilities",
    keywords: ["environmental liabilities"],
  },
  {
    id: "apa-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "apa-liability-time-limit",
    title: "Limitation of Liability - Time Limit",
    keywords: ["time limit for claims"],
  },
  {
    id: "apa-liability-de-minimis",
    title: "Limitation of Liability - De Minimis Threshold",
    keywords: ["de minimis threshold"],
  },
  {
    id: "apa-liability-basket",
    title: "Limitation of Liability - Basket Clause",
    keywords: ["basket clause"],
  },
  {
    id: "apa-liability-fraud",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  {
    id: "apa-employees-transfer",
    title: "Employees - Transfer of Employees",
    keywords: ["transfer of employees"],
  },
  {
    id: "apa-employees-employment-act",
    title: "Employees - Employment Act Compliance",
    keywords: ["employment act"],
  },
  {
    id: "apa-employees-terminal-benefits",
    title: "Employees - Terminal Benefits",
    keywords: ["terminal benefits"],
  },
  {
    id: "apa-employees-redundancy",
    title: "Employees - Redundancy Obligations",
    keywords: ["redundancy obligations"],
  },
  {
    id: "apa-employees-labour-warning",
    title: "Employees - Labour Law Transfer Compliance",
    keywords: ["employee transfer must comply with labour law"],
  },
  {
    id: "apa-ip-assignment",
    title: "Intellectual Property - Assignment",
    keywords: ["assignment of ip"],
  },
  {
    id: "apa-ip-registration-updates",
    title: "Intellectual Property - Registration Updates",
    keywords: ["registration updates"],
  },
  {
    id: "apa-ip-transitional-licenses",
    title: "Intellectual Property - Transitional Licenses",
    keywords: ["transitional licenses"],
  },
  {
    id: "apa-contracts-consent",
    title: "Contracts Assignment - Consent Requirements",
    keywords: ["consent requirements"],
  },
  {
    id: "apa-contracts-novation",
    title: "Contracts Assignment - Novation Agreements",
    keywords: ["novation agreements"],
  },
  {
    id: "apa-precompletion-ordinary",
    title: "Pre-Completion Covenants - Ordinary Course",
    keywords: ["conduct of business in ordinary course"],
  },
  {
    id: "apa-precompletion-no-assets",
    title: "Pre-Completion Covenants - No Asset Disposal",
    keywords: ["no asset disposal"],
  },
  {
    id: "apa-precompletion-no-liabilities",
    title: "Pre-Completion Covenants - No New Liabilities",
    keywords: ["no new liabilities"],
  },
  {
    id: "apa-postcompletion-support",
    title: "Post-Completion Covenants - Transitional Support",
    keywords: ["transitional support"],
  },
  {
    id: "apa-postcompletion-records",
    title: "Post-Completion Covenants - Access to Records",
    keywords: ["access to records"],
  },
  {
    id: "apa-restrictive-noncompete",
    title: "Restrictive Covenants - Non-Compete",
    keywords: ["non-compete", "non compete"],
  },
  {
    id: "apa-restrictive-nonsolicit",
    title: "Restrictive Covenants - Non-Solicitation",
    keywords: ["non-solicitation", "non solicitation"],
  },
  {
    id: "apa-restrictive-confidentiality",
    title: "Restrictive Covenants - Confidentiality",
    keywords: ["confidentiality"],
  },
  {
    id: "apa-restrictive-reasonable",
    title: "Restrictive Covenants - Reasonableness",
    keywords: ["reasonable in scope"],
  },
  {
    id: "apa-tax-cgt",
    title: "Tax Matters - Capital Gains Tax",
    keywords: ["capital gains tax", "income tax act"],
  },
  { id: "apa-tax-vat", title: "Tax Matters - VAT Implications", keywords: ["vat implications"] },
  {
    id: "apa-tax-stamp-duty",
    title: "Tax Matters - Stamp Duty Act Compliance",
    keywords: ["stamp duty act"],
  },
  { id: "apa-assignment", title: "Assignment", keywords: ["assignment"] },
  {
    id: "apa-term-precompletion",
    title: "Termination - Before Completion",
    keywords: ["termination before completion"],
  },
  { id: "apa-term-longstop", title: "Termination - Long-Stop Date", keywords: ["long-stop date"] },
  { id: "apa-term-break-fees", title: "Termination - Break Fees", keywords: ["break fees"] },
  {
    id: "apa-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "apa-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  { id: "apa-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "apa-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "apa-severability", title: "Severability", keywords: ["severability"] },
  { id: "apa-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "apa-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...APA_ITEMS];

const template = createKenyaTemplate("asset_purchase_agreement", ITEMS);

export default template;
