export const KENYA_CONTRACT_TYPE_ALIASES: Record<string, string> = {
  // Commercial & Business
  "sales agreement": "sales_agreement",
  "supply agreement": "supply_agreement",
  "distribution agreement": "distribution_agreement",
  "agency agreement": "agency_agreement",
  "franchise agreement": "franchise_agreement",
  "partnership agreement": "partnership_agreement",
  "shareholders agreement": "shareholders_agreement",
  "joint venture agreement": "joint_venture_agreement",
  "service level agreement": "sla",
  sla: "sla",
  "manufacturing agreement": "manufacturing_agreement",
  "outsourcing agreement": "outsourcing_agreement",
  "consultancy agreement": "consultancy_agreement",
  "licensing agreement": "licensing_agreement",
  "reseller agreement": "reseller_agreement",
  "commission agreement": "commission_agreement",
  "memorandum of understanding": "mou",
  mou: "mou",
  // Employment & HR
  "employment contract": "employment",
  "independent contractor agreement": "independent_contractor_agreement",
  "non-disclosure agreement": "nda",
  nda: "nda",
  "non-compete agreement": "non_compete_agreement",
  "non-solicitation agreement": "non_solicitation_agreement",
  "internship agreement": "internship_agreement",
  "settlement agreement": "settlement_agreement",
  "collective bargaining agreement": "collective_bargaining_agreement",
  // Technology & IP
  "software development agreement": "software_development_agreement",
  "saas agreement": "saas_agreement",
  eula: "eula",
  "end user license agreement": "eula",
  "technology transfer agreement": "technology_transfer_agreement",
  "ip assignment agreement": "ip_assignment_agreement",
  "trademark license agreement": "trademark_license_agreement",
  "patent license agreement": "patent_license_agreement",
  "data processing agreement": "dpa",
  dpa: "dpa",
  "cloud services agreement": "cloud_services_agreement",
  "api license agreement": "api_license_agreement",
  // Real Estate
  "sale of land agreement": "sale_of_land_agreement",
  "lease agreement": "lease",
  "commercial lease": "commercial_lease",
  "residential tenancy agreement": "residential_tenancy_agreement",
  "sublease agreement": "sublease_agreement",
  "mortgage agreement": "mortgage_agreement",
  "property management agreement": "property_management_agreement",
  "construction contract": "construction_contract",
  "design & build contract": "design_build_contract",
  // Finance & Banking
  "loan agreement": "loan_agreement",
  "credit facility agreement": "credit_facility_agreement",
  "security agreement": "security_agreement",
  "guarantee agreement": "guarantee_agreement",
  "indemnity agreement": "indemnity_agreement",
  "investment agreement": "investment_agreement",
  "share purchase agreement": "share_purchase_agreement",
  spa: "share_purchase_agreement",
  "asset purchase agreement": "asset_purchase_agreement",
  apa: "asset_purchase_agreement",
  "convertible note agreement": "convertible_note_agreement",
  debenture: "debenture",
  // Corporate & M&A
  "share subscription agreement": "share_subscription_agreement",
  "merger agreement": "merger_agreement",
  "acquisition agreement": "acquisition_agreement",
  "founders agreement": "founders_agreement",
  "operating agreement": "operating_agreement",
  "articles of association": "articles_of_association",
  // International & Trade
  "export agreement": "export_agreement",
  "import agreement": "import_agreement",
  "international sales contract": "international_sales_contract",
  "trade finance agreement": "trade_finance_agreement",
  // Construction & Infrastructure
  "epc contract": "epc_contract",
  fidic: "fidic_contract",
  "fidic contract": "fidic_contract",
  "subcontractor agreement": "subcontractor_agreement",
  "turnkey contract": "turnkey_contract",
  "ppp agreement": "ppp_agreement",
  "public-private partnership": "ppp_agreement",
  // Consumer
  "terms & conditions": "terms_conditions",
  "terms and conditions": "terms_conditions",
  clickwrap: "clickwrap_agreement",
  "clickwrap agreement": "clickwrap_agreement",
  browsewrap: "browsewrap_agreement",
  "browsewrap agreement": "browsewrap_agreement",
  "subscription agreement": "subscription_agreement",
  "installment sale agreement": "installment_sale_agreement",
  // Family & Personal
  prenuptial: "prenuptial_agreement",
  "prenuptial agreement": "prenuptial_agreement",
  postnuptial: "postnuptial_agreement",
  "postnuptial agreement": "postnuptial_agreement",
  "separation agreement": "separation_agreement",
  "surrogacy agreement": "surrogacy_agreement",
  // Insurance
  "life insurance policy": "life_insurance_policy",
  "health insurance policy": "health_insurance_policy",
  "liability insurance policy": "liability_insurance_policy",
  "reinsurance agreement": "reinsurance_agreement",
  // Government & Public Sector
  "procurement contract": "procurement_contract",
  "concession agreement": "concession_agreement",
  "public works contract": "public_works_contract",
  "government grant agreement": "government_grant_agreement",
};

function normalizeFreeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[&/]+/g, " and ")
    .replace(/[()'",.:;-]+/g, " ")
    .replace(/\s+/g, " ");
}

export function normalizeKenyaContractType(value: string): string {
  const normalized = normalizeFreeText(value);
  const direct = KENYA_CONTRACT_TYPE_ALIASES[normalized];
  if (direct) {
    return direct;
  }
  for (const [label, canonical] of Object.entries(KENYA_CONTRACT_TYPE_ALIASES)) {
    if (normalized.includes(label)) {
      return canonical;
    }
  }
  return normalized.replace(/[^a-z0-9]+/g, "_");
}
