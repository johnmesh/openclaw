import {
  CONSTRUCTION_ITEMS,
  createKenyaTemplate,
  type ChecklistTemplateItem,
} from "../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...CONSTRUCTION_ITEMS];

const template = createKenyaTemplate("subcontractor_agreement", ITEMS);

export default template;
