import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const LICENSING_ITEMS: ChecklistTemplateItem[] = [
  { id: "lic-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "lic-parties-registration",
    title: "Parties - Registration Numbers",
    keywords: ["registration numbers"],
  },
  {
    id: "lic-parties-addresses",
    title: "Parties - Addresses",
    keywords: ["addresses", "registered address"],
  },
  {
    id: "lic-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "lic-grant-ip-type",
    title: "Grant of License - Type of IP",
    keywords: ["trademark", "patent", "software", "copyright"],
  },
  {
    id: "lic-grant-scope",
    title: "Grant of License - Scope of Rights",
    keywords: ["scope of rights granted"],
  },
  {
    id: "lic-grant-exclusivity",
    title: "Grant of License - Exclusive/Non-Exclusive/Sole",
    keywords: ["exclusive", "non-exclusive", "sole license"],
  },
  {
    id: "lic-grant-sublicensing",
    title: "Grant of License - Sublicensing Rights",
    keywords: ["sublicensing rights"],
  },
  {
    id: "lic-grant-field-use",
    title: "Grant of License - Field of Use",
    keywords: ["field of use"],
  },
  { id: "lic-grant-territory", title: "Grant of License - Territory", keywords: ["territory"] },
  {
    id: "lic-grant-registration",
    title: "Grant of License - Kenyan Registration Check",
    keywords: ["registered ip", "kenyan statute", "trade marks act"],
  },
  {
    id: "lic-ownership-confirm",
    title: "Ownership - Licensor Ownership Confirmation",
    keywords: ["licensor ownership"],
  },
  {
    id: "lic-ownership-no-transfer",
    title: "Ownership - No Transfer of Ownership",
    keywords: ["no transfer of ownership"],
  },
  {
    id: "lic-ownership-reservation",
    title: "Ownership - Reservation of Rights",
    keywords: ["reservation of rights"],
  },
  {
    id: "lic-ownership-improvements",
    title: "Ownership - Improvements Ownership",
    keywords: ["improvements ownership"],
  },
  {
    id: "lic-term-commencement",
    title: "Term - Commencement Date",
    keywords: ["commencement date"],
  },
  { id: "lic-term-duration", title: "Term - Duration", keywords: ["duration"] },
  { id: "lic-term-renewal", title: "Term - Renewal Terms", keywords: ["renewal terms"] },
  {
    id: "lic-territory-kenya-multi",
    title: "Territory - Kenya or Multi-Jurisdiction",
    keywords: ["kenya-only", "multi-jurisdiction", "multi jurisdiction"],
  },
  {
    id: "lic-territory-export",
    title: "Territory - Export Restrictions",
    keywords: ["export restrictions"],
  },
  {
    id: "lic-territory-geo-limits",
    title: "Territory - Geographic Limitations",
    keywords: ["geographic limitations"],
  },
  {
    id: "lic-fee-upfront",
    title: "License Fees and Royalties - Upfront Fees",
    keywords: ["upfront fees"],
  },
  {
    id: "lic-fee-royalty",
    title: "License Fees and Royalties - Royalty Percentage",
    keywords: ["royalty percentage"],
  },
  {
    id: "lic-fee-minimum",
    title: "License Fees and Royalties - Minimum Royalty",
    keywords: ["minimum royalty"],
  },
  {
    id: "lic-fee-schedule",
    title: "License Fees and Royalties - Payment Schedule",
    keywords: ["payment schedule"],
  },
  {
    id: "lic-fee-currency",
    title: "License Fees and Royalties - Currency",
    keywords: ["currency"],
  },
  {
    id: "lic-fee-vat",
    title: "License Fees and Royalties - VAT Treatment",
    keywords: ["vat treatment"],
  },
  {
    id: "lic-accounting-reporting",
    title: "Accounting and Audit - Royalty Reporting",
    keywords: ["royalty reporting requirements"],
  },
  {
    id: "lic-accounting-records",
    title: "Accounting and Audit - Access to Financial Records",
    keywords: ["access to financial records"],
  },
  {
    id: "lic-accounting-audit-rights",
    title: "Accounting and Audit - Audit Rights",
    keywords: ["audit rights"],
  },
  {
    id: "lic-quality-standards",
    title: "Quality Control - Quality Standards",
    keywords: ["quality standards"],
  },
  {
    id: "lic-quality-inspection",
    title: "Quality Control - Inspection Rights",
    keywords: ["inspection rights"],
  },
  {
    id: "lic-quality-branding",
    title: "Quality Control - Branding Guidelines",
    keywords: ["branding guidelines"],
  },
  {
    id: "lic-quality-compliance",
    title: "Quality Control - Compliance Requirements",
    keywords: ["compliance requirements"],
  },
  {
    id: "lic-quality-trademark-validity",
    title: "Quality Control - Trademark Validity Requirement",
    keywords: ["preserve trademark validity", "trade marks act"],
  },
  {
    id: "lic-restrict-no-reverse",
    title: "Restrictions - No Reverse Engineering",
    keywords: ["no reverse engineering"],
  },
  {
    id: "lic-restrict-no-modification",
    title: "Restrictions - No Modification",
    keywords: ["no modification"],
  },
  {
    id: "lic-restrict-no-assignment",
    title: "Restrictions - No Assignment",
    keywords: ["no assignment"],
  },
  {
    id: "lic-restrict-no-unauthorized-sublicensing",
    title: "Restrictions - No Unauthorized Sublicensing",
    keywords: ["no unauthorized sublicensing"],
  },
  {
    id: "lic-conf-trade-secrets",
    title: "Confidentiality - Trade Secrets",
    keywords: ["trade secrets"],
  },
  {
    id: "lic-conf-technical",
    title: "Confidentiality - Technical Information",
    keywords: ["technical information"],
  },
  {
    id: "lic-conf-duration",
    title: "Confidentiality - Duration",
    keywords: ["duration of obligation"],
  },
  {
    id: "lic-data-dpa",
    title: "Data Protection - Data Protection Act",
    keywords: ["data protection act"],
  },
  {
    id: "lic-data-security",
    title: "Data Protection - Data Security",
    keywords: ["data security obligations"],
  },
  {
    id: "lic-data-breach",
    title: "Data Protection - Breach Notification",
    keywords: ["breach notification"],
  },
  {
    id: "lic-warranty-ownership",
    title: "Warranties - Ownership of IP",
    keywords: ["ownership of ip"],
  },
  {
    id: "lic-warranty-authority",
    title: "Warranties - Authority to Grant",
    keywords: ["authority to grant license"],
  },
  {
    id: "lic-warranty-noninfringement",
    title: "Warranties - Non-Infringement",
    keywords: ["non-infringement warranty", "non infringement"],
  },
  {
    id: "lic-warranty-compliance",
    title: "Warranties - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "lic-indemnity-ip",
    title: "Indemnity - IP Infringement",
    keywords: ["ip infringement indemnity"],
  },
  {
    id: "lic-indemnity-third-party",
    title: "Indemnity - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  {
    id: "lic-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "lic-liability-indirect",
    title: "Limitation of Liability - Indirect Loss Exclusion",
    keywords: ["exclusion of indirect loss", "indirect loss"],
  },
  {
    id: "lic-liability-fraud",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  {
    id: "lic-enforcement-notify",
    title: "Infringement and Enforcement - Notification",
    keywords: ["obligation to notify infringement"],
  },
  {
    id: "lic-enforcement-rights",
    title: "Infringement and Enforcement - Enforcement Rights",
    keywords: ["enforcement rights"],
  },
  {
    id: "lic-enforcement-cost-sharing",
    title: "Infringement and Enforcement - Cost Sharing",
    keywords: ["cost sharing"],
  },
  {
    id: "lic-enforcement-settlement",
    title: "Infringement and Enforcement - Settlement Authority",
    keywords: ["settlement authority"],
  },
  {
    id: "lic-improvements-ownership",
    title: "Improvements and Modifications - Ownership",
    keywords: ["ownership of improvements"],
  },
  {
    id: "lic-improvements-license-back",
    title: "Improvements and Modifications - License-Back",
    keywords: ["licensing back of improvements"],
  },
  {
    id: "lic-competition-act",
    title: "Competition Law - Competition Act Compliance",
    keywords: ["competition act"],
  },
  {
    id: "lic-competition-restrictions",
    title: "Competition Law - Avoid Anti-Competitive Restrictions",
    keywords: ["anti-competitive restrictions", "anti competitive restrictions"],
  },
  {
    id: "lic-competition-exclusive-scrutiny",
    title: "Competition Law - Exclusive License Scrutiny",
    keywords: ["exclusive licenses", "market restrictions"],
  },
  {
    id: "lic-sublicense-consent",
    title: "Subcontracting/Sublicensing - Consent Requirements",
    keywords: ["consent requirements"],
  },
  {
    id: "lic-sublicense-responsibility",
    title: "Subcontracting/Sublicensing - Responsibility for Sublicensees",
    keywords: ["responsibility for sublicensees"],
  },
  {
    id: "lic-termination-breach",
    title: "Termination - Breach",
    keywords: ["termination for breach"],
  },
  { id: "lic-termination-cure", title: "Termination - Cure Period", keywords: ["cure period"] },
  { id: "lic-termination-insolvency", title: "Termination - Insolvency", keywords: ["insolvency"] },
  {
    id: "lic-termination-royalty-default",
    title: "Termination - Failure to Pay Royalties",
    keywords: ["failure to pay royalties"],
  },
  {
    id: "lic-consequence-cease-ip",
    title: "Consequences of Termination - Cease IP Use",
    keywords: ["cease use of ip"],
  },
  {
    id: "lic-consequence-return-destroy",
    title: "Consequences of Termination - Return/Destruction of Materials",
    keywords: ["return/destruction of materials", "destruction of materials"],
  },
  {
    id: "lic-consequence-outstanding-royalty",
    title: "Consequences of Termination - Outstanding Royalties",
    keywords: ["outstanding royalty payments"],
  },
  {
    id: "lic-consequence-survival-conf",
    title: "Consequences of Termination - Survival of Confidentiality",
    keywords: ["survival of confidentiality"],
  },
  { id: "lic-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  { id: "lic-assignment", title: "Assignment", keywords: ["assignment"] },
  {
    id: "lic-dispute-escalation",
    title: "Dispute Resolution - Escalation",
    keywords: ["escalation"],
  },
  { id: "lic-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "lic-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  {
    id: "lic-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  { id: "lic-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "lic-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "lic-severability", title: "Severability", keywords: ["severability"] },
  { id: "lic-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "lic-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...LICENSING_ITEMS];

const template = createKenyaTemplate("licensing_agreement", ITEMS);

export default template;
