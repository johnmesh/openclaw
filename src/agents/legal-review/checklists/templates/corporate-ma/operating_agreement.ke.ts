import {
  CORPORATE_ITEMS,
  createKenyaTemplate,
  type ChecklistTemplateItem,
} from "../../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...CORPORATE_ITEMS];

const template = createKenyaTemplate("operating_agreement", ITEMS);

export default template;
