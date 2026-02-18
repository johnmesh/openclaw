import {
  REAL_ESTATE_ITEMS,
  createKenyaTemplate,
  type ChecklistTemplateItem,
} from "../shared.ke.js";

const ITEMS: ChecklistTemplateItem[] = [...REAL_ESTATE_ITEMS];

const template = createKenyaTemplate("residential_tenancy_agreement", ITEMS);

export default template;
