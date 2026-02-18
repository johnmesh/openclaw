import { TECHNOLOGY_ITEMS, createKenyaTemplate, type ChecklistTemplateItem } from "../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...TECHNOLOGY_ITEMS];

const template = createKenyaTemplate("technology_transfer_agreement", ITEMS);

export default template;
