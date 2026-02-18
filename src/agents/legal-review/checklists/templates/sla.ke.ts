import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const SLA_ITEMS: ChecklistTemplateItem[] = [
  { id: "sla-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "sla-parties-registration",
    title: "Parties - Registration Numbers",
    keywords: ["registration numbers"],
  },
  {
    id: "sla-parties-addresses",
    title: "Parties - Addresses",
    keywords: ["addresses", "registered address"],
  },
  {
    id: "sla-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "sla-scope-description",
    title: "Scope of Services - Description",
    keywords: ["description of services"],
  },
  {
    id: "sla-scope-deliverables",
    title: "Scope of Services - Deliverables",
    keywords: ["deliverables"],
  },
  {
    id: "sla-scope-coverage",
    title: "Scope of Services - Coverage",
    keywords: ["service coverage"],
  },
  {
    id: "sla-scope-exclusions",
    title: "Scope of Services - Exclusions",
    keywords: ["service exclusions"],
  },
  {
    id: "sla-performance-uptime",
    title: "Performance Levels - Uptime",
    keywords: ["uptime", "99.9%"],
  },
  {
    id: "sla-performance-response-time",
    title: "Performance Levels - Response Time",
    keywords: ["response time"],
  },
  {
    id: "sla-performance-resolution-time",
    title: "Performance Levels - Resolution Time",
    keywords: ["resolution time"],
  },
  {
    id: "sla-performance-escalation-timelines",
    title: "Performance Levels - Escalation Timelines",
    keywords: ["escalation timelines"],
  },
  {
    id: "sla-performance-kpis",
    title: "Performance Levels - KPIs",
    keywords: ["performance metrics", "kpis"],
  },
  {
    id: "sla-measure-monitoring",
    title: "Measurement and Reporting - Monitoring Methods",
    keywords: ["monitoring methods"],
  },
  {
    id: "sla-measure-reporting-frequency",
    title: "Measurement and Reporting - Reporting Frequency",
    keywords: ["reporting frequency"],
  },
  {
    id: "sla-measure-audit-rights",
    title: "Measurement and Reporting - Audit Rights",
    keywords: ["audit rights"],
  },
  {
    id: "sla-measure-system-logs",
    title: "Measurement and Reporting - Access to Logs",
    keywords: ["access to system logs", "system logs"],
  },
  {
    id: "sla-credits-formula",
    title: "Service Credits - Credit Formula",
    keywords: ["service credit formula"],
  },
  { id: "sla-credits-caps", title: "Service Credits - Credit Caps", keywords: ["credit caps"] },
  {
    id: "sla-credits-claims",
    title: "Service Credits - Claim Process",
    keywords: ["claim process"],
  },
  {
    id: "sla-credits-sole-remedy",
    title: "Service Credits - Sole Remedy",
    keywords: ["sole remedy"],
  },
  {
    id: "sla-fees-service-fees",
    title: "Fees and Payment - Service Fees",
    keywords: ["service fees"],
  },
  {
    id: "sla-fees-billing-frequency",
    title: "Fees and Payment - Billing Frequency",
    keywords: ["billing frequency"],
  },
  {
    id: "sla-fees-payment-timeline",
    title: "Fees and Payment - Payment Timeline",
    keywords: ["payment timelines"],
  },
  {
    id: "sla-fees-late-interest",
    title: "Fees and Payment - Late Payment Interest",
    keywords: ["late payment interest"],
  },
  { id: "sla-fees-vat", title: "Fees and Payment - VAT Treatment", keywords: ["vat treatment"] },
  { id: "sla-term-initial", title: "Term and Renewal - Initial Term", keywords: ["initial term"] },
  {
    id: "sla-term-renewal",
    title: "Term and Renewal - Renewal Terms",
    keywords: ["renewal terms"],
  },
  {
    id: "sla-term-review",
    title: "Term and Renewal - Review Periods",
    keywords: ["review periods"],
  },
  {
    id: "sla-change-variation",
    title: "Change Management - Variation Procedure",
    keywords: ["variation procedure"],
  },
  {
    id: "sla-change-request",
    title: "Change Management - Change Request Process",
    keywords: ["change request process"],
  },
  {
    id: "sla-change-impact",
    title: "Change Management - Impact Assessment",
    keywords: ["impact assessment"],
  },
  {
    id: "sla-customer-access",
    title: "Customer Responsibilities - Access Provision",
    keywords: ["access provision"],
  },
  {
    id: "sla-customer-infrastructure",
    title: "Customer Responsibilities - Infrastructure",
    keywords: ["required infrastructure"],
  },
  {
    id: "sla-customer-compliance",
    title: "Customer Responsibilities - Compliance",
    keywords: ["compliance obligations"],
  },
  {
    id: "sla-confidentiality-definition",
    title: "Confidentiality - Definition",
    keywords: ["definition of confidential information"],
  },
  {
    id: "sla-confidentiality-obligations",
    title: "Confidentiality - Protection Obligations",
    keywords: ["protection obligations"],
  },
  {
    id: "sla-confidentiality-exceptions",
    title: "Confidentiality - Exceptions",
    keywords: ["exceptions"],
  },
  {
    id: "sla-confidentiality-duration",
    title: "Confidentiality - Duration",
    keywords: ["duration"],
  },
  {
    id: "sla-data-protection-act",
    title: "Data Protection and Privacy - Data Protection Act",
    keywords: ["data protection act"],
  },
  {
    id: "sla-data-processing",
    title: "Data Protection and Privacy - Processing Obligations",
    keywords: ["data processing obligations"],
  },
  {
    id: "sla-data-security",
    title: "Data Protection and Privacy - Data Security Measures",
    keywords: ["data security measures"],
  },
  {
    id: "sla-data-breach",
    title: "Data Protection and Privacy - Breach Notification",
    keywords: ["breach notification procedure", "data breach notification"],
  },
  {
    id: "sla-data-cross-border",
    title: "Data Protection and Privacy - Cross-Border Transfers",
    keywords: ["cross-border data transfer compliance", "cross border"],
  },
  {
    id: "sla-security-cyber",
    title: "Information Security - Cybersecurity Standards",
    keywords: ["cybersecurity standards"],
  },
  {
    id: "sla-security-access-controls",
    title: "Information Security - Access Controls",
    keywords: ["access controls"],
  },
  {
    id: "sla-security-incident",
    title: "Information Security - Incident Response",
    keywords: ["incident response"],
  },
  {
    id: "sla-security-cmca",
    title: "Information Security - Computer Misuse and Cybercrimes Act",
    keywords: ["computer misuse and cybercrimes act"],
  },
  {
    id: "sla-ip-ownership",
    title: "Intellectual Property - Ownership of Deliverables",
    keywords: ["ownership of deliverables"],
  },
  {
    id: "sla-ip-license",
    title: "Intellectual Property - License to Use Services",
    keywords: ["license to use services"],
  },
  {
    id: "sla-ip-background",
    title: "Intellectual Property - Background IP",
    keywords: ["background ip"],
  },
  {
    id: "sla-ip-indemnity",
    title: "Intellectual Property - IP Infringement Indemnity",
    keywords: ["ip infringement indemnity"],
  },
  {
    id: "sla-warranty-performance",
    title: "Warranties - Performance",
    keywords: ["performance warranty"],
  },
  {
    id: "sla-warranty-compliance",
    title: "Warranties - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "sla-warranty-noninfringement",
    title: "Warranties - Non-Infringement",
    keywords: ["non-infringement warranty", "non infringement"],
  },
  {
    id: "sla-indemnity-third-party",
    title: "Indemnity - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  { id: "sla-indemnity-ip", title: "Indemnity - IP Infringement", keywords: ["ip infringement"] },
  {
    id: "sla-indemnity-data-breach",
    title: "Indemnity - Data Breach Liability",
    keywords: ["data breach liability"],
  },
  {
    id: "sla-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "sla-liability-indirect",
    title: "Limitation of Liability - Indirect/Consequential Exclusion",
    keywords: ["exclusion of indirect", "consequential loss"],
  },
  {
    id: "sla-liability-carveouts",
    title: "Limitation of Liability - Carve-Outs",
    keywords: ["fraud", "willful misconduct", "wilful misconduct", "data breaches"],
  },
  {
    id: "sla-bcdr-backup",
    title: "Business Continuity and Disaster Recovery - Backup",
    keywords: ["backup procedures"],
  },
  {
    id: "sla-bcdr-rto",
    title: "Business Continuity and Disaster Recovery - RTO",
    keywords: ["recovery time objective", "rto"],
  },
  {
    id: "sla-bcdr-rpo",
    title: "Business Continuity and Disaster Recovery - RPO",
    keywords: ["recovery point objective", "rpo"],
  },
  {
    id: "sla-bcdr-testing",
    title: "Business Continuity and Disaster Recovery - Testing",
    keywords: ["testing obligations"],
  },
  {
    id: "sla-subcontracting-use",
    title: "Subcontracting - Use of Subcontractors",
    keywords: ["use of subcontractors"],
  },
  {
    id: "sla-subcontracting-responsibility",
    title: "Subcontracting - Responsibility",
    keywords: ["responsibility for subcontractors"],
  },
  {
    id: "sla-subcontracting-consent",
    title: "Subcontracting - Consent",
    keywords: ["consent requirements"],
  },
  {
    id: "sla-compliance-regulatory",
    title: "Compliance with Laws - Regulatory Compliance",
    keywords: ["regulatory compliance"],
  },
  {
    id: "sla-compliance-licensing",
    title: "Compliance with Laws - Licensing Requirements",
    keywords: ["licensing requirements"],
  },
  {
    id: "sla-compliance-consumer",
    title: "Compliance with Laws - Consumer Protection",
    keywords: ["consumer protection act", "consumer law compliance"],
  },
  {
    id: "sla-termination-breach",
    title: "Termination - Breach",
    keywords: ["termination for breach"],
  },
  { id: "sla-termination-cure", title: "Termination - Cure Periods", keywords: ["cure periods"] },
  {
    id: "sla-termination-convenience",
    title: "Termination - Convenience",
    keywords: ["termination for convenience"],
  },
  {
    id: "sla-termination-insolvency",
    title: "Termination - Insolvency",
    keywords: ["insolvency termination"],
  },
  {
    id: "sla-exit-data-handover",
    title: "Exit and Transition - Data Handover",
    keywords: ["data handover"],
  },
  {
    id: "sla-exit-transition-support",
    title: "Exit and Transition - Transition Support",
    keywords: ["transition support"],
  },
  {
    id: "sla-exit-return-delete",
    title: "Exit and Transition - Return/Deletion of Data",
    keywords: ["return/deletion of data", "return of data", "deletion of data"],
  },
  {
    id: "sla-exit-final-period",
    title: "Exit and Transition - Final Service Period",
    keywords: ["final service period"],
  },
  { id: "sla-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  { id: "sla-assignment", title: "Assignment", keywords: ["assignment"] },
  {
    id: "sla-dispute-escalation",
    title: "Dispute Resolution - Escalation",
    keywords: ["escalation"],
  },
  { id: "sla-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "sla-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  {
    id: "sla-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  { id: "sla-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "sla-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "sla-severability", title: "Severability", keywords: ["severability"] },
  { id: "sla-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "sla-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...SLA_ITEMS];

const template = createKenyaTemplate("sla", ITEMS);

export default template;
