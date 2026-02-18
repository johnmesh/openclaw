import {
  CONSUMER_ITEMS,
  createKenyaTemplate,
  type ChecklistTemplateItem,
} from "../../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...CONSUMER_ITEMS];

const template = createKenyaTemplate("installment_sale_agreement", ITEMS);

export default template;
