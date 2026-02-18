import {
  CONSUMER_ITEMS,
  createKenyaTemplate,
  type ChecklistTemplateItem,
} from "../../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...CONSUMER_ITEMS];

const template = createKenyaTemplate("clickwrap_agreement", ITEMS);

export default template;
