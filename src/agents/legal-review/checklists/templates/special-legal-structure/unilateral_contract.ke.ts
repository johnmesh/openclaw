import {
  LEGAL_STRUCTURE_ITEMS,
  createKenyaTemplate,
  type ChecklistTemplateItem,
} from "../../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...LEGAL_STRUCTURE_ITEMS];

const template = createKenyaTemplate("unilateral_contract", ITEMS);

export default template;
