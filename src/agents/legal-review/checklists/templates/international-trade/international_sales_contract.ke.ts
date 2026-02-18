import { SALES_ITEMS, createKenyaTemplate, type ChecklistTemplateItem } from "../../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...SALES_ITEMS];

const template = createKenyaTemplate("international_sales_contract", ITEMS);

export default template;
