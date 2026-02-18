import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const PARTNERSHIP_ITEMS: ChecklistTemplateItem[] = [
  {
    id: "ps-parties-legal",
    title: "Parties - Full Legal Names",
    keywords: ["full legal name", "legal name"],
  },
  {
    id: "ps-parties-id",
    title: "Parties - National ID/Passport",
    keywords: ["national id", "passport number"],
  },
  { id: "ps-parties-kra", title: "Parties - KRA PIN", keywords: ["kra pin", "pin number"] },
  {
    id: "ps-parties-address",
    title: "Parties - Addresses",
    keywords: ["address", "registered address"],
  },
  {
    id: "ps-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "ps-formation-name",
    title: "Formation - Partnership Name",
    keywords: ["name of partnership", "partnership name"],
  },
  {
    id: "ps-formation-place",
    title: "Formation - Principal Place of Business",
    keywords: ["principal place of business"],
  },
  {
    id: "ps-formation-start",
    title: "Formation - Commencement Date",
    keywords: ["commencement date"],
  },
  {
    id: "ps-formation-registration",
    title: "Formation - Registration Details",
    keywords: ["registration details", "registered partnership"],
  },
  {
    id: "ps-formation-business",
    title: "Formation - Nature of Business",
    keywords: ["nature of business"],
  },
  {
    id: "ps-capital-initial",
    title: "Capital Contributions - Initial",
    keywords: ["initial capital contribution"],
  },
  {
    id: "ps-capital-form",
    title: "Capital Contributions - Form",
    keywords: ["cash", "assets", "services"],
  },
  {
    id: "ps-capital-additional",
    title: "Capital Contributions - Additional",
    keywords: ["additional capital contributions"],
  },
  {
    id: "ps-capital-ownership",
    title: "Capital Contributions - Ownership Percentages",
    keywords: ["ownership percentages"],
  },
  {
    id: "ps-capital-default-equal",
    title: "Capital Contributions - Default Equal Share Rule",
    keywords: ["equal shares", "partnership act"],
  },
  {
    id: "ps-profit-ratio",
    title: "Profit and Loss - Distribution Ratio",
    keywords: ["profit distribution ratio"],
  },
  {
    id: "ps-loss-allocation",
    title: "Profit and Loss - Loss Allocation",
    keywords: ["loss allocation"],
  },
  {
    id: "ps-profit-timing",
    title: "Profit and Loss - Timing",
    keywords: ["timing of distributions"],
  },
  {
    id: "ps-profit-default-equal",
    title: "Profit and Loss - Default Equal Sharing Rule",
    keywords: ["default rule", "equal sharing", "partnership act"],
  },
  { id: "ps-mgmt-roles", title: "Management - Roles", keywords: ["management roles"] },
  {
    id: "ps-mgmt-authority",
    title: "Management - Authority of Partners",
    keywords: ["authority of partners"],
  },
  {
    id: "ps-mgmt-daytoday",
    title: "Management - Day-to-Day Control",
    keywords: ["day-to-day control", "day to day control"],
  },
  { id: "ps-mgmt-voting", title: "Management - Voting Rights", keywords: ["voting rights"] },
  {
    id: "ps-mgmt-reserved",
    title: "Management - Reserved Matters",
    keywords: ["reserved matters", "unanimous consent"],
  },
  {
    id: "ps-mgmt-agent-rule",
    title: "Management - Partner as Agent of Firm",
    keywords: ["agent of the firm", "partner is an agent"],
  },
  { id: "ps-duty-goodfaith", title: "Partner Duties - Good Faith", keywords: ["good faith"] },
  {
    id: "ps-duty-fiduciary",
    title: "Partner Duties - Fiduciary Duties",
    keywords: ["fiduciary duties"],
  },
  {
    id: "ps-duty-noncompete",
    title: "Partner Duties - Non-Compete",
    keywords: ["non-compete during partnership", "non compete"],
  },
  {
    id: "ps-duty-conflict",
    title: "Partner Duties - Conflict Disclosure",
    keywords: ["disclosure of conflicts", "conflict of interest"],
  },
  {
    id: "ps-bank-account",
    title: "Banking - Bank Account Operation",
    keywords: ["bank account operation"],
  },
  { id: "ps-bank-signatories", title: "Banking - Signatories", keywords: ["signatories"] },
  {
    id: "ps-bank-accounting",
    title: "Banking - Accounting Standards",
    keywords: ["accounting standards"],
  },
  {
    id: "ps-bank-reporting",
    title: "Banking - Financial Reporting",
    keywords: ["financial reporting"],
  },
  { id: "ps-bank-audit", title: "Banking - Audit Requirements", keywords: ["audit requirements"] },
  {
    id: "ps-remuneration-salary",
    title: "Remuneration - Partner Salaries",
    keywords: ["partner salaries"],
  },
  { id: "ps-remuneration-drawings", title: "Remuneration - Drawings", keywords: ["drawings"] },
  {
    id: "ps-remuneration-expenses",
    title: "Remuneration - Expense Reimbursement",
    keywords: ["expense reimbursement"],
  },
  {
    id: "ps-remuneration-default",
    title: "Remuneration - Default No Salary Rule",
    keywords: ["not entitled to remuneration", "unless agreed"],
  },
  {
    id: "ps-new-partner-approval",
    title: "Admission - Approval Process",
    keywords: ["approval process", "new partners"],
  },
  {
    id: "ps-new-partner-capital",
    title: "Admission - Capital Requirement",
    keywords: ["capital contribution requirements"],
  },
  {
    id: "ps-new-partner-amend",
    title: "Admission - Agreement Amendment",
    keywords: ["amendment of agreement"],
  },
  {
    id: "ps-withdrawal-notice",
    title: "Withdrawal/Retirement - Notice",
    keywords: ["notice requirements"],
  },
  {
    id: "ps-withdrawal-buyout",
    title: "Withdrawal/Retirement - Buy-Out",
    keywords: ["buy-out mechanism", "buyout"],
  },
  {
    id: "ps-withdrawal-valuation",
    title: "Withdrawal/Retirement - Valuation",
    keywords: ["valuation method"],
  },
  {
    id: "ps-withdrawal-settlement",
    title: "Withdrawal/Retirement - Settlement Timeline",
    keywords: ["settlement timeline"],
  },
  {
    id: "ps-death-continuation",
    title: "Death/Incapacity - Continuation or Dissolution",
    keywords: ["continuation or dissolution"],
  },
  {
    id: "ps-death-buyout",
    title: "Death/Incapacity - Valuation and Buyout",
    keywords: ["valuation and buyout"],
  },
  {
    id: "ps-death-insurance",
    title: "Death/Incapacity - Key-Man Insurance",
    keywords: ["key-man policy", "key man"],
  },
  { id: "ps-expulsion-grounds", title: "Expulsion - Grounds", keywords: ["grounds for expulsion"] },
  {
    id: "ps-expulsion-procedure",
    title: "Expulsion - Procedure",
    keywords: ["expulsion procedure"],
  },
  {
    id: "ps-expulsion-consequences",
    title: "Expulsion - Consequences",
    keywords: ["expulsion consequences"],
  },
  {
    id: "ps-expulsion-express",
    title: "Expulsion - Express Clause Requirement",
    keywords: ["expressly stated", "enforceable"],
  },
  {
    id: "ps-restrictive-post-noncompete",
    title: "Restrictive Covenants - Post-Exit Non-Compete",
    keywords: ["non-compete after exit"],
  },
  {
    id: "ps-restrictive-nonsolicit",
    title: "Restrictive Covenants - Non-Solicitation",
    keywords: ["non-solicitation of clients", "non-solicitation"],
  },
  {
    id: "ps-restrictive-confidentiality",
    title: "Restrictive Covenants - Confidentiality",
    keywords: ["confidentiality obligations"],
  },
  {
    id: "ps-restrictive-reasonable",
    title: "Restrictive Covenants - Reasonable Scope",
    keywords: ["reasonable in duration", "reasonable in scope"],
  },
  {
    id: "ps-dissolution-events",
    title: "Dissolution - Trigger Events",
    keywords: ["events triggering dissolution"],
  },
  {
    id: "ps-dissolution-voluntary",
    title: "Dissolution - Voluntary",
    keywords: ["voluntary dissolution"],
  },
  {
    id: "ps-dissolution-court",
    title: "Dissolution - Court-Ordered",
    keywords: ["court-ordered dissolution", "court ordered"],
  },
  {
    id: "ps-dissolution-assets",
    title: "Dissolution - Asset Distribution",
    keywords: ["distribution of assets upon winding up"],
  },
  {
    id: "ps-dissolution-default",
    title: "Dissolution - Default Partnership Act Rules",
    keywords: ["default rules", "partnership act"],
  },
  {
    id: "ps-indemnity-between",
    title: "Indemnity Between Partners",
    keywords: ["indemnity between partners"],
  },
  {
    id: "ps-indemnity-liability-allocation",
    title: "Indemnity - Liability Allocation",
    keywords: ["liability allocation"],
  },
  {
    id: "ps-liability-joint",
    title: "Liability - Joint and Several",
    keywords: ["joint and several"],
  },
  {
    id: "ps-liability-llp",
    title: "Liability - LLP Distinction",
    keywords: ["llp", "limited liability partnership"],
  },
  { id: "ps-confidentiality", title: "Confidentiality", keywords: ["confidentiality"] },
  {
    id: "ps-dispute-internal",
    title: "Dispute Resolution - Internal Mechanism",
    keywords: ["internal dispute mechanism"],
  },
  { id: "ps-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "ps-dispute-arb-court",
    title: "Dispute Resolution - Arbitration or Courts",
    keywords: ["arbitration", "courts"],
  },
  { id: "ps-governing-law", title: "Governing Law (Kenya)", keywords: ["governing law", "kenya"] },
  {
    id: "ps-assignment",
    title: "Assignment Restriction",
    keywords: ["transfer of partnership interest", "assignment"],
  },
  { id: "ps-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  {
    id: "ps-amendment-written",
    title: "Amendment - Written Variation",
    keywords: ["written variation requirement", "amendment"],
  },
  { id: "ps-severability", title: "Severability", keywords: ["severability"] },
  { id: "ps-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "ps-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...PARTNERSHIP_ITEMS];

const template = createKenyaTemplate("partnership_agreement", ITEMS);

export default template;
