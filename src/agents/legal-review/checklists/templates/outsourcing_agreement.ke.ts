import { createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const OUTSOURCING_ITEMS: ChecklistTemplateItem[] = [
  { id: "out-parties-legal", title: "Parties - Legal Names", keywords: ["legal names"] },
  {
    id: "out-parties-registration",
    title: "Parties - Registration Numbers",
    keywords: ["registration numbers"],
  },
  {
    id: "out-parties-addresses",
    title: "Parties - Addresses",
    keywords: ["addresses", "registered address"],
  },
  {
    id: "out-definitions",
    title: "Definitions and Interpretation",
    keywords: ["definitions", "interpretation"],
  },
  {
    id: "out-scope-services",
    title: "Scope of Services - Description",
    keywords: ["description of outsourced services"],
  },
  {
    id: "out-scope-deliverables",
    title: "Scope of Services - Deliverables",
    keywords: ["deliverables"],
  },
  {
    id: "out-scope-exclusions",
    title: "Scope of Services - Exclusions",
    keywords: ["service exclusions"],
  },
  {
    id: "out-scope-locations",
    title: "Scope of Services - Service Locations",
    keywords: ["locations of service performance"],
  },
  { id: "out-sla-kpis", title: "Service Levels - KPIs", keywords: ["performance metrics", "kpis"] },
  {
    id: "out-sla-uptime-response",
    title: "Service Levels - Uptime/Response",
    keywords: ["uptime", "response times"],
  },
  {
    id: "out-sla-resolution",
    title: "Service Levels - Resolution Times",
    keywords: ["resolution times"],
  },
  {
    id: "out-sla-escalation",
    title: "Service Levels - Escalation",
    keywords: ["escalation procedures"],
  },
  {
    id: "out-sla-reporting",
    title: "Service Levels - Reporting Frequency",
    keywords: ["reporting frequency"],
  },
  {
    id: "out-term-commencement",
    title: "Term - Commencement Date",
    keywords: ["commencement date"],
  },
  { id: "out-term-initial", title: "Term - Initial Term", keywords: ["initial term"] },
  { id: "out-term-renewal", title: "Term - Renewal Terms", keywords: ["renewal terms"] },
  {
    id: "out-fees-structure",
    title: "Fees and Payment - Pricing Structure",
    keywords: ["pricing structure", "fixed", "time-based", "milestone"],
  },
  { id: "out-fees-invoicing", title: "Fees and Payment - Invoicing", keywords: ["invoicing"] },
  {
    id: "out-fees-timelines",
    title: "Fees and Payment - Payment Timelines",
    keywords: ["payment timelines"],
  },
  { id: "out-fees-vat", title: "Fees and Payment - VAT Treatment", keywords: ["vat treatment"] },
  {
    id: "out-fees-late-interest",
    title: "Fees and Payment - Late Interest",
    keywords: ["late payment interest"],
  },
  {
    id: "out-change-request",
    title: "Change Management - Change Request Procedure",
    keywords: ["change request procedure"],
  },
  {
    id: "out-change-impact",
    title: "Change Management - Impact Assessment",
    keywords: ["impact assessment"],
  },
  {
    id: "out-change-pricing",
    title: "Change Management - Pricing Adjustments",
    keywords: ["pricing adjustments"],
  },
  {
    id: "out-transition-plan",
    title: "Transition and Onboarding - Transition Plan",
    keywords: ["transition plan"],
  },
  {
    id: "out-transition-knowledge",
    title: "Transition and Onboarding - Knowledge Transfer",
    keywords: ["knowledge transfer"],
  },
  {
    id: "out-transition-assets",
    title: "Transition and Onboarding - Asset Transfer",
    keywords: ["asset transfer"],
  },
  {
    id: "out-transition-employee",
    title: "Transition and Onboarding - Employee Transfer",
    keywords: ["employee transfer"],
  },
  {
    id: "out-exit-plan",
    title: "Exit and Transition Assistance - Exit Plan",
    keywords: ["exit plan"],
  },
  {
    id: "out-exit-data-handover",
    title: "Exit and Transition Assistance - Data Handover",
    keywords: ["data handover"],
  },
  {
    id: "out-exit-assets-return",
    title: "Exit and Transition Assistance - Return of Assets",
    keywords: ["return of assets"],
  },
  {
    id: "out-exit-knowledge-termination",
    title: "Exit and Transition Assistance - Knowledge Transfer on Termination",
    keywords: ["knowledge transfer on termination"],
  },
  {
    id: "out-data-dpa",
    title: "Data Protection and Privacy - Data Protection Act",
    keywords: ["data protection act"],
  },
  {
    id: "out-data-processing",
    title: "Data Protection and Privacy - Processing Obligations",
    keywords: ["data processing obligations"],
  },
  {
    id: "out-data-security",
    title: "Data Protection and Privacy - Security Standards",
    keywords: ["data security standards"],
  },
  {
    id: "out-data-breach-timeline",
    title: "Data Protection and Privacy - Breach Timelines",
    keywords: ["breach notification timelines"],
  },
  {
    id: "out-data-cross-border",
    title: "Data Protection and Privacy - Cross-Border Restrictions",
    keywords: ["cross-border data transfer restrictions", "cross border"],
  },
  {
    id: "out-security-controls",
    title: "Information Security - Security Controls",
    keywords: ["security controls"],
  },
  {
    id: "out-security-access",
    title: "Information Security - Access Management",
    keywords: ["access management"],
  },
  {
    id: "out-security-incident",
    title: "Information Security - Incident Response",
    keywords: ["incident response"],
  },
  {
    id: "out-security-cmca",
    title: "Information Security - Computer Misuse and Cybercrimes Act",
    keywords: ["computer misuse and cybercrimes act"],
  },
  {
    id: "out-conf-definition",
    title: "Confidentiality - Definition",
    keywords: ["definition of confidential information"],
  },
  { id: "out-conf-obligations", title: "Confidentiality - Obligations", keywords: ["obligations"] },
  { id: "out-conf-exceptions", title: "Confidentiality - Exceptions", keywords: ["exceptions"] },
  { id: "out-conf-duration", title: "Confidentiality - Duration", keywords: ["duration"] },
  {
    id: "out-ip-ownership",
    title: "Intellectual Property - Ownership of Deliverables",
    keywords: ["ownership of deliverables"],
  },
  {
    id: "out-ip-license",
    title: "Intellectual Property - License Rights",
    keywords: ["license rights"],
  },
  {
    id: "out-ip-background",
    title: "Intellectual Property - Background IP",
    keywords: ["background ip"],
  },
  {
    id: "out-ip-indemnity",
    title: "Intellectual Property - IP Infringement Indemnity",
    keywords: ["ip infringement indemnity"],
  },
  {
    id: "out-personnel-responsibility",
    title: "Personnel and Employment - Staff Responsibility",
    keywords: ["responsibility for outsourced staff"],
  },
  {
    id: "out-personnel-no-employment",
    title: "Personnel and Employment - No Employment Relationship",
    keywords: ["no employment relationship clause"],
  },
  {
    id: "out-personnel-employment-act",
    title: "Personnel and Employment - Employment Act Compliance",
    keywords: ["employment act"],
  },
  {
    id: "out-personnel-background-checks",
    title: "Personnel and Employment - Background Checks",
    keywords: ["background checks"],
  },
  {
    id: "out-subcontract-right",
    title: "Subcontracting - Right to Subcontract",
    keywords: ["right to subcontract"],
  },
  {
    id: "out-subcontract-consent",
    title: "Subcontracting - Consent Requirements",
    keywords: ["consent requirements"],
  },
  {
    id: "out-subcontract-responsibility",
    title: "Subcontracting - Responsibility for Subcontractors",
    keywords: ["responsibility for subcontractors"],
  },
  {
    id: "out-warranty-performance",
    title: "Warranties - Performance",
    keywords: ["performance warranty"],
  },
  {
    id: "out-warranty-compliance",
    title: "Warranties - Compliance with Laws",
    keywords: ["compliance with laws"],
  },
  {
    id: "out-warranty-skill-care",
    title: "Warranties - Professional Skill and Care",
    keywords: ["professional skill and care"],
  },
  {
    id: "out-indemnity-third-party",
    title: "Indemnities - Third-Party Claims",
    keywords: ["third-party claims", "third party claims"],
  },
  { id: "out-indemnity-ip", title: "Indemnities - IP Infringement", keywords: ["ip infringement"] },
  {
    id: "out-indemnity-data-breach",
    title: "Indemnities - Data Breach Liability",
    keywords: ["data breach liability"],
  },
  {
    id: "out-indemnity-regulatory",
    title: "Indemnities - Regulatory Fines",
    keywords: ["regulatory fines"],
  },
  {
    id: "out-liability-cap",
    title: "Limitation of Liability - Liability Cap",
    keywords: ["liability cap"],
  },
  {
    id: "out-liability-indirect",
    title: "Limitation of Liability - Indirect/Consequential Exclusion",
    keywords: ["exclusion of indirect", "consequential loss"],
  },
  {
    id: "out-liability-fraud",
    title: "Limitation of Liability - Fraud Carve-Out",
    keywords: ["fraud carve-out", "fraud carve out"],
  },
  {
    id: "out-liability-data-breach",
    title: "Limitation of Liability - Data Breach Carve-Out",
    keywords: ["data breach carve-out", "data breach carve out"],
  },
  {
    id: "out-insurance-prof-indemnity",
    title: "Insurance - Professional Indemnity",
    keywords: ["professional indemnity"],
  },
  {
    id: "out-insurance-cyber",
    title: "Insurance - Cyber Insurance",
    keywords: ["cyber insurance"],
  },
  {
    id: "out-insurance-public",
    title: "Insurance - Public Liability",
    keywords: ["public liability insurance"],
  },
  {
    id: "out-insurance-evidence",
    title: "Insurance - Evidence",
    keywords: ["evidence of insurance", "proof of insurance"],
  },
  {
    id: "out-laws-regulatory",
    title: "Compliance with Laws - Regulatory",
    keywords: ["regulatory compliance"],
  },
  {
    id: "out-laws-sector",
    title: "Compliance with Laws - Sector-Specific",
    keywords: ["sector-specific compliance", "sector specific compliance"],
  },
  {
    id: "out-laws-consumer",
    title: "Compliance with Laws - Consumer Protection",
    keywords: ["consumer protection compliance"],
  },
  {
    id: "out-audit-rights",
    title: "Audit Rights - Customer Audit Rights",
    keywords: ["customer audit rights"],
  },
  {
    id: "out-audit-verification",
    title: "Audit Rights - Compliance Verification",
    keywords: ["compliance verification"],
  },
  {
    id: "out-audit-records",
    title: "Audit Rights - Access to Records",
    keywords: ["access to records"],
  },
  {
    id: "out-bcdr-backup",
    title: "Business Continuity and Disaster Recovery - Backup",
    keywords: ["backup systems"],
  },
  {
    id: "out-bcdr-rto",
    title: "Business Continuity and Disaster Recovery - RTO",
    keywords: ["recovery time objectives", "rto"],
  },
  {
    id: "out-bcdr-rpo",
    title: "Business Continuity and Disaster Recovery - RPO",
    keywords: ["recovery point objectives", "rpo"],
  },
  {
    id: "out-bcdr-testing",
    title: "Business Continuity and Disaster Recovery - Testing",
    keywords: ["testing requirements"],
  },
  {
    id: "out-termination-breach",
    title: "Termination - Breach",
    keywords: ["termination for breach"],
  },
  { id: "out-termination-cure", title: "Termination - Cure Periods", keywords: ["cure periods"] },
  {
    id: "out-termination-convenience",
    title: "Termination - Convenience",
    keywords: ["termination for convenience"],
  },
  { id: "out-termination-insolvency", title: "Termination - Insolvency", keywords: ["insolvency"] },
  {
    id: "out-termination-regulatory",
    title: "Termination - Regulatory Breach",
    keywords: ["regulatory breach"],
  },
  {
    id: "out-consequence-payments",
    title: "Consequences of Termination - Final Payments",
    keywords: ["final payments"],
  },
  {
    id: "out-consequence-data-return",
    title: "Consequences of Termination - Data Deletion/Return",
    keywords: ["data deletion/return", "data deletion", "data return"],
  },
  {
    id: "out-consequence-transition",
    title: "Consequences of Termination - Transition Obligations",
    keywords: ["transition obligations"],
  },
  {
    id: "out-consequence-survival",
    title: "Consequences of Termination - Survival Clauses",
    keywords: ["survival of clauses"],
  },
  { id: "out-force-majeure", title: "Force Majeure", keywords: ["force majeure"] },
  { id: "out-assignment", title: "Assignment", keywords: ["assignment"] },
  {
    id: "out-dispute-escalation",
    title: "Dispute Resolution - Escalation",
    keywords: ["escalation mechanism"],
  },
  { id: "out-dispute-mediation", title: "Dispute Resolution - Mediation", keywords: ["mediation"] },
  {
    id: "out-dispute-forum",
    title: "Dispute Resolution - Arbitration or Kenyan Courts",
    keywords: ["arbitration", "kenyan courts", "courts"],
  },
  {
    id: "out-dispute-governing-law",
    title: "Dispute Resolution - Governing Law (Kenya)",
    keywords: ["governing law", "kenya"],
  },
  { id: "out-entire-agreement", title: "Entire Agreement", keywords: ["entire agreement"] },
  { id: "out-amendment", title: "Amendment", keywords: ["amendment"] },
  { id: "out-severability", title: "Severability", keywords: ["severability"] },
  { id: "out-waiver", title: "Waiver", keywords: ["waiver"] },
  { id: "out-notices", title: "Notices", keywords: ["notices", "notice"] },
];

const ITEMS: ChecklistTemplateItem[] = [...OUTSOURCING_ITEMS];

const template = createKenyaTemplate("outsourcing_agreement", ITEMS);

export default template;
