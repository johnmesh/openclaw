import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const SPA_ITEMS: ChecklistTemplateItem[] = [
  { id: "spa-parties-seller", title: "Parties - Seller(s)", keywords: ["seller"] },
  { id: "spa-parties-buyer", title: "Parties - Buyer(s)", keywords: ["buyer"] },
  { id: "spa-parties-target", title: "Parties - Target Company", keywords: ["target company"] },
  { id: "spa-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "spa-parties-registration",
    title: "Parties - Registration Numbers",
    keywords: ["registration numbers"],
  },
  {
    id: "spa-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "spa-sale-number",
    title: "Sale and Purchase - Number of Shares",
    keywords: ["number of shares"],
  },
  { id: "spa-sale-class", title: "Sale and Purchase - Share Class", keywords: ["share class"] },
  {
    id: "spa-sale-percentage",
    title: "Sale and Purchase - Ownership Percentage",
    keywords: ["percentage of ownership"],
  },
  {
    id: "spa-sale-agreement",
    title: "Sale and Purchase - Agreement to Sell and Buy",
    keywords: ["agreement to sell and buy"],
  },
  {
    id: "spa-price-total",
    title: "Purchase Price - Total Consideration",
    keywords: ["total consideration"],
  },
  { id: "spa-price-currency", title: "Purchase Price - Currency", keywords: ["currency"] },
  {
    id: "spa-price-mechanism",
    title: "Purchase Price - Pricing Mechanism",
    keywords: ["fixed", "completion accounts", "earn-out"],
  },
  { id: "spa-payment-deposit", title: "Payment Terms - Deposit", keywords: ["deposit"] },
  {
    id: "spa-payment-completion",
    title: "Payment Terms - Payment on Completion",
    keywords: ["payment on completion"],
  },
  {
    id: "spa-payment-deferred",
    title: "Payment Terms - Deferred Consideration",
    keywords: ["deferred consideration"],
  },
  {
    id: "spa-payment-escrow",
    title: "Payment Terms - Escrow Arrangements",
    keywords: ["escrow arrangements"],
  },
  {
    id: "spa-cp-board-shareholder",
    title: "Conditions Precedent - Board and Shareholder Approvals",
    keywords: ["board and shareholder approvals"],
  },
  {
    id: "spa-cp-regulatory",
    title: "Conditions Precedent - Regulatory Approvals",
    keywords: ["regulatory approvals"],
  },
  {
    id: "spa-cp-competition",
    title: "Conditions Precedent - Competition Clearance",
    keywords: ["competition act"],
  },
  {
    id: "spa-cp-third-party",
    title: "Conditions Precedent - Third-Party Consents",
    keywords: ["third-party consents", "third party consents"],
  },
  { id: "spa-closing-date", title: "Completion - Completion Date", keywords: ["completion date"] },
  {
    id: "spa-closing-deliverables",
    title: "Completion - Deliverables",
    keywords: ["deliverables"],
  },
  {
    id: "spa-closing-transfer-forms",
    title: "Completion - Share Transfer Forms",
    keywords: ["share transfer forms"],
  },
  {
    id: "spa-closing-board-resolutions",
    title: "Completion - Board Resolutions",
    keywords: ["board resolutions"],
  },
  {
    id: "spa-closing-register-update",
    title: "Completion - Register of Members Update",
    keywords: ["register of members"],
  },
  {
    id: "spa-closing-companies-act",
    title: "Completion - Companies Act Transfer Compliance",
    keywords: ["companies act"],
  },
  {
    id: "spa-warranty-seller-title",
    title: "Warranties (Seller) - Good Title",
    keywords: ["good title to shares"],
  },
  {
    id: "spa-warranty-seller-encumbrances",
    title: "Warranties (Seller) - No Encumbrances",
    keywords: ["no encumbrances"],
  },
  {
    id: "spa-warranty-seller-authority",
    title: "Warranties (Seller) - Authority to Sell",
    keywords: ["authority to sell"],
  },
  {
    id: "spa-warranty-seller-financials",
    title: "Warranties (Seller) - Financial Statements Accuracy",
    keywords: ["accuracy of financial statements"],
  },
  {
    id: "spa-warranty-seller-liabilities",
    title: "Warranties (Seller) - No Undisclosed Liabilities",
    keywords: ["no undisclosed liabilities"],
  },
  {
    id: "spa-warranty-seller-tax",
    title: "Warranties (Seller) - Tax Compliance",
    keywords: ["tax compliance"],
  },
  {
    id: "spa-warranty-buyer-authority",
    title: "Warranties (Buyer) - Authority to Purchase",
    keywords: ["authority to purchase"],
  },
  {
    id: "spa-warranty-buyer-funding",
    title: "Warranties (Buyer) - Funding Confirmation",
    keywords: ["funding confirmation"],
  },
  {
    id: "spa-warranty-critical",
    title: "Warranties - Negotiation Criticality",
    keywords: ["most negotiated sections"],
  },
  { id: "spa-indemnity-tax", title: "Indemnities - Tax Indemnity", keywords: ["tax indemnity"] },
  {
    id: "spa-indemnity-specific-risk",
    title: "Indemnities - Specific Risk",
    keywords: ["specific risk indemnities"],
  },
  {
    id: "spa-indemnity-litigation",
    title: "Indemnities - Litigation",
    keywords: ["litigation indemnity"],
  },
  {
    id: "spa-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "spa-liability-time-limit",
    title: "Limitation of Liability - Time Limit",
    keywords: ["time limit for claims"],
  },
  {
    id: "spa-liability-de-minimis",
    title: "Limitation of Liability - De Minimis Threshold",
    keywords: ["de minimis threshold"],
  },
  {
    id: "spa-liability-basket",
    title: "Limitation of Liability - Basket Threshold",
    keywords: ["basket threshold"],
  },
  {
    id: "spa-liability-fraud",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  {
    id: "spa-precompletion-ordinary-course",
    title: "Pre-Completion Covenants - Ordinary Course",
    keywords: ["conduct of business in ordinary course"],
  },
  {
    id: "spa-precompletion-no-assets",
    title: "Pre-Completion Covenants - No Asset Disposal",
    keywords: ["no asset disposal"],
  },
  {
    id: "spa-precompletion-no-borrowing",
    title: "Pre-Completion Covenants - No New Borrowing",
    keywords: ["no new borrowing"],
  },
  {
    id: "spa-precompletion-no-dividend",
    title: "Pre-Completion Covenants - No Dividend Declaration",
    keywords: ["no dividend declaration"],
  },
  {
    id: "spa-postcompletion-transition",
    title: "Post-Completion Covenants - Transition Assistance",
    keywords: ["assistance with transition"],
  },
  {
    id: "spa-postcompletion-records",
    title: "Post-Completion Covenants - Access to Records",
    keywords: ["access to records"],
  },
  {
    id: "spa-restrictive-noncompete",
    title: "Restrictive Covenants - Non-Compete",
    keywords: ["non-compete", "non compete"],
  },
  {
    id: "spa-restrictive-nonsolicit",
    title: "Restrictive Covenants - Non-Solicitation",
    keywords: ["non-solicitation", "non solicitation"],
  },
  {
    id: "spa-restrictive-confidentiality",
    title: "Restrictive Covenants - Confidentiality",
    keywords: ["confidentiality"],
  },
  {
    id: "spa-restrictive-reasonable",
    title: "Restrictive Covenants - Reasonableness",
    keywords: ["reasonable to be enforceable"],
  },
  {
    id: "spa-tax-cgt",
    title: "Tax Matters - Capital Gains Tax Responsibility",
    keywords: ["capital gains tax", "income tax act"],
  },
  {
    id: "spa-tax-stamp-duty",
    title: "Tax Matters - Stamp Duty Compliance",
    keywords: ["stamp duty act"],
  },
  { id: "spa-tax-filings", title: "Tax Matters - Tax Filings", keywords: ["tax filings"] },
  {
    id: "spa-employees-contracts",
    title: "Employees - Employment Contracts Treatment",
    keywords: ["employment contracts"],
  },
  {
    id: "spa-employees-benefits",
    title: "Employees - Outstanding Benefits",
    keywords: ["outstanding benefits"],
  },
  {
    id: "spa-employees-labour-law",
    title: "Employees - Labour Law Compliance",
    keywords: ["labour laws"],
  },
  { id: "spa-assignment", title: "Assignment", keywords: ["assignment"] },
  { id: "spa-confidentiality", title: "Confidentiality", keywords: ["confidentiality"] },
  { id: "spa-announcements", title: "Announcements", keywords: ["announcements"] },
  {
    id: "spa-term-precompletion",
    title: "Termination - Before Completion",
    keywords: ["termination before completion"],
  },
  { id: "spa-term-longstop", title: "Termination - Long-Stop Date", keywords: ["long-stop date"] },
  {
    id: "spa-term-consequences",
    title: "Termination - Consequences",
    keywords: ["consequences of termination"],
  },
  {
    id: "spa-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "spa-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  { id: "spa-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "spa-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "spa-severability", title: "Severability", keywords: ["severability"] },
  { id: "spa-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "spa-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...SPA_ITEMS];

const template = createKenyaTemplate("share_purchase_agreement", ITEMS);

export default template;
