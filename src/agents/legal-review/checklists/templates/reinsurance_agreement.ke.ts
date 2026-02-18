import { INSURANCE_ITEMS, createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...INSURANCE_ITEMS];

const template = createKenyaTemplate("reinsurance_agreement", ITEMS);

export default template;
