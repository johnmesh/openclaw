import {
  TECHNOLOGY_ITEMS,
  createKenyaTemplate,
  type ChecklistTemplateItem,
} from "../../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...TECHNOLOGY_ITEMS];

const template = createKenyaTemplate("ip_assignment_agreement", ITEMS);

export default template;
