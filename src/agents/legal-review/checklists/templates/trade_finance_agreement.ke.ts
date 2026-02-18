import {
  INTERNATIONAL_ITEMS,
  createKenyaTemplate,
  type ChecklistTemplateItem,
} from "../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...INTERNATIONAL_ITEMS];

const template = createKenyaTemplate("trade_finance_agreement", ITEMS);

export default template;
