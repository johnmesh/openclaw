import { FAMILY_ITEMS, createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...FAMILY_ITEMS];

const template = createKenyaTemplate("postnuptial_agreement", ITEMS);

export default template;
