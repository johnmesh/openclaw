import {
  INSURANCE_ITEMS,
  createKenyaTemplate,
  type ChecklistTemplateItem,
} from "../../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...INSURANCE_ITEMS];

const template = createKenyaTemplate("life_insurance_policy", ITEMS);

export default template;
