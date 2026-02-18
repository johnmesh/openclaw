import { EMPLOYMENT_ITEMS, createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...EMPLOYMENT_ITEMS];

const template = createKenyaTemplate("nda", ITEMS);

export default template;
