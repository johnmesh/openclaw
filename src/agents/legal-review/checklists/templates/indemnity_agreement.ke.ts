import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const INDEMNITY_ITEMS: ChecklistTemplateItem[] = [
  { id: "ind-parties-indemnifier", title: "Parties - Indemnifier", keywords: ["indemnifier"] },
  {
    id: "ind-parties-indemnified",
    title: "Parties - Indemnified Party",
    keywords: ["indemnified party", "beneficiary"],
  },
  { id: "ind-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "ind-parties-id-reg",
    title: "Parties - Registration/ID Details",
    keywords: ["registration", "id details"],
  },
  { id: "ind-parties-kra", title: "Parties - KRA PIN", keywords: ["kra pin"] },
  {
    id: "ind-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "ind-core-scope",
    title: "Indemnity Clause - Scope of Indemnified Losses",
    keywords: ["scope of indemnified losses"],
  },
  {
    id: "ind-core-trigger",
    title: "Indemnity Clause - Trigger Events",
    keywords: ["trigger events"],
  },
  {
    id: "ind-core-nature",
    title: "Indemnity Clause - Nature of Indemnity",
    keywords: ["loss", "liability", "claims", "damages", "costs"],
  },
  {
    id: "ind-core-wording-critical",
    title: "Indemnity Clause - Wording Breadth",
    keywords: ["wording determines how wide the indemnity is"],
  },
  { id: "ind-loss-direct", title: "Scope of Losses - Direct Losses", keywords: ["direct losses"] },
  {
    id: "ind-loss-third-party",
    title: "Scope of Losses - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  { id: "ind-loss-legal-costs", title: "Scope of Losses - Legal Costs", keywords: ["legal costs"] },
  {
    id: "ind-loss-regulatory-fines",
    title: "Scope of Losses - Regulatory Fines",
    keywords: ["regulatory fines"],
  },
  { id: "ind-loss-interest", title: "Scope of Losses - Interest", keywords: ["interest"] },
  {
    id: "ind-loss-consequential",
    title: "Scope of Losses - Consequential Losses",
    keywords: ["consequential losses"],
  },
  {
    id: "ind-claim-notice",
    title: "Procedure for Claims - Notice Requirements",
    keywords: ["notice requirements"],
  },
  {
    id: "ind-claim-defence-control",
    title: "Procedure for Claims - Defence Control",
    keywords: ["defence control"],
  },
  {
    id: "ind-claim-settlement-approval",
    title: "Procedure for Claims - Settlement Approval",
    keywords: ["settlement approval"],
  },
  {
    id: "ind-claim-cooperation",
    title: "Procedure for Claims - Cooperation Obligations",
    keywords: ["cooperation obligations"],
  },
  {
    id: "ind-continuing-future",
    title: "Continuing Indemnity - Future Claims",
    keywords: ["covers future claims"],
  },
  {
    id: "ind-continuing-survival",
    title: "Continuing Indemnity - Survives Termination",
    keywords: ["survives termination"],
  },
  {
    id: "ind-warranty-authority",
    title: "Representations and Warranties - Authority",
    keywords: ["authority to enter agreement"],
  },
  {
    id: "ind-warranty-capacity-solvency",
    title: "Representations and Warranties - Capacity and Solvency",
    keywords: ["capacity", "solvency"],
  },
  {
    id: "ind-warranty-no-conflict",
    title: "Representations and Warranties - No Conflicting Obligations",
    keywords: ["no conflicting obligations"],
  },
  {
    id: "ind-covenant-insurance",
    title: "Covenants - Maintain Insurance",
    keywords: ["maintain insurance"],
  },
  {
    id: "ind-covenant-notify-claims",
    title: "Covenants - Prompt Claim Notification",
    keywords: ["prompt notification of claims"],
  },
  {
    id: "ind-covenant-compliance",
    title: "Covenants - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "ind-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "ind-liability-time-limit",
    title: "Limitation of Liability - Time Limitation for Claims",
    keywords: ["time limitation for claims"],
  },
  {
    id: "ind-liability-carveout",
    title: "Limitation of Liability - Carve-Outs",
    keywords: ["fraud", "wilful misconduct", "willful misconduct"],
  },
  {
    id: "ind-liability-uncapped-option",
    title: "Limitation of Liability - Uncapped Possibility",
    keywords: ["some indemnities are uncapped"],
  },
  {
    id: "ind-exclusion-indemnified-negligence",
    title: "Exclusions - Negligence of Indemnified Party",
    keywords: ["exclusion for negligence of indemnified party"],
  },
  {
    id: "ind-exclusion-indirect",
    title: "Exclusions - Indirect Loss",
    keywords: ["exclusion for indirect loss"],
  },
  {
    id: "ind-exclusion-mitigation",
    title: "Exclusions - Mitigation Obligation",
    keywords: ["mitigation obligation"],
  },
  {
    id: "ind-payment-timeline",
    title: "Payment Mechanics - Timeline after Demand",
    keywords: ["payment timeline after demand"],
  },
  { id: "ind-payment-currency", title: "Payment Mechanics - Currency", keywords: ["currency"] },
  {
    id: "ind-payment-gross-up",
    title: "Payment Mechanics - Gross-Up Clause",
    keywords: ["gross-up clause", "gross up clause"],
  },
  {
    id: "ind-insurance-coverage",
    title: "Insurance - Coverage Requirement",
    keywords: ["insurance coverage requirement"],
  },
  {
    id: "ind-insurance-min-limits",
    title: "Insurance - Minimum Policy Limits",
    keywords: ["minimum policy limits"],
  },
  {
    id: "ind-insurance-assignment",
    title: "Insurance - Assignment of Proceeds",
    keywords: ["assignment of proceeds"],
  },
  {
    id: "ind-subrogation-right",
    title: "Subrogation - Right to Recover from Third Parties",
    keywords: ["right to recover from third parties"],
  },
  {
    id: "ind-assignment-restrictions",
    title: "Assignment - Restrictions on Transfer",
    keywords: ["restrictions on transfer"],
  },
  { id: "ind-costs-legal", title: "Costs and Expenses - Legal Fees", keywords: ["legal fees"] },
  {
    id: "ind-costs-enforcement",
    title: "Costs and Expenses - Enforcement Costs",
    keywords: ["enforcement costs"],
  },
  {
    id: "ind-duration-term",
    title: "Duration - Term of Indemnity",
    keywords: ["term of indemnity"],
  },
  {
    id: "ind-duration-survival",
    title: "Duration - Survival Clause",
    keywords: ["survival clause"],
  },
  {
    id: "ind-stamp-duty-act",
    title: "Stamp Duty - Stamp Duty Act Compliance",
    keywords: ["stamp duty act"],
  },
  {
    id: "ind-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  {
    id: "ind-dispute-forum",
    title: "Dispute Resolution - Arbitration or Courts",
    keywords: ["arbitration", "courts"],
  },
  { id: "ind-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "ind-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "ind-severability", title: "Severability", keywords: ["severability"] },
  { id: "ind-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "ind-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...INDEMNITY_ITEMS];

const template = createKenyaTemplate("indemnity_agreement", ITEMS);

export default template;
