import { GOVERNMENT_ITEMS, createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...GOVERNMENT_ITEMS];

const template = createKenyaTemplate("public_works_contract", ITEMS);

export default template;
