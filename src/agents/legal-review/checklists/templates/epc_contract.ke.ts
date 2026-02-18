import {
  CONSTRUCTION_ITEMS,
  createKenyaTemplate,
  type ChecklistTemplateItem,
} from "../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...CONSTRUCTION_ITEMS];

const template = createKenyaTemplate("epc_contract", ITEMS);

export default template;
