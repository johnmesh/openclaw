import type {
  AgreementChecklistItem,
  AgreementChecklistResult,
  ContractDocument,
  ContractTypeResolution,
  JurisdictionResolution,
} from "./types.js";
import { KENYA_CHECKLIST_TEMPLATES } from "./checklists/templates/index.js";
import { KENYA_CONTRACT_TYPE_ALIASES } from "./contract-types.js";

const TEMPLATE_CATALOG = new Map(
  KENYA_CHECKLIST_TEMPLATES.map((template) => [template.agreementType, template]),
);

const GENERIC_TEMPLATE = {
  agreementType: "general",
  items: [
    { id: "parties", title: "Parties", keywords: ["party", "parties"] },
    { id: "scope", title: "Scope", keywords: ["scope", "services", "goods"] },
    { id: "payment", title: "Payment", keywords: ["payment", "price"] },
    { id: "liability", title: "Liability", keywords: ["liability", "indemnity"] },
    {
      id: "dispute-resolution",
      title: "Dispute Resolution",
      keywords: ["dispute", "arbitration", "jurisdiction"],
    },
  ],
};

function normalizeText(value: string): string {
  return value.trim().toLowerCase();
}

function resolveTemplate(contractType: string) {
  const normalized = normalizeText(contractType);
  return (
    TEMPLATE_CATALOG.get(normalized) ?? {
      ...GENERIC_TEMPLATE,
      agreementType: normalized || "general",
    }
  );
}

function evaluateItem(
  itemDef: {
    id: string;
    title: string;
    keywords: string[];
    citations?: AgreementChecklistItem["citations"];
  },
  sections: ContractDocument["sections"],
): AgreementChecklistItem {
  const section = sections.find((candidate) => {
    const text = normalizeText(candidate.text);
    return itemDef.keywords.some((keyword) => text.includes(normalizeText(keyword)));
  });
  if (!section) {
    return {
      id: itemDef.id,
      title: itemDef.title,
      status: "missing",
      citations: itemDef.citations,
    };
  }
  return {
    id: itemDef.id,
    title: itemDef.title,
    status: "present",
    citations: itemDef.citations,
    evidence: {
      page: section.page,
      section: section.section,
      quote: section.text.slice(0, 180),
    },
  };
}

export async function defaultAgreementChecklistEvaluator(params: {
  document: ContractDocument;
  jurisdiction: JurisdictionResolution;
  contractType: ContractTypeResolution;
}): Promise<AgreementChecklistResult> {
  const templateDef = resolveTemplate(params.contractType.contractType);
  const items = templateDef.items.map((entry) => evaluateItem(entry, params.document.sections));
  const summary = items.reduce(
    (acc, entry) => {
      acc[entry.status] += 1;
      return acc;
    },
    { present: 0, missing: 0, unclear: 0 },
  );
  return {
    agreementType: templateDef.agreementType,
    jurisdiction: params.jurisdiction.jurisdiction,
    items,
    summary,
  };
}

export const EXHAUSTIVE_KENYA_CHECKLIST_TYPES = new Set<string>([
  ...KENYA_CHECKLIST_TEMPLATES.map((template) => template.agreementType),
  ...Object.values(KENYA_CONTRACT_TYPE_ALIASES),
]);
