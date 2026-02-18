import { CONSUMER_ITEMS, createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...CONSUMER_ITEMS];

const template = createKenyaTemplate("terms_conditions", ITEMS);

export default template;
