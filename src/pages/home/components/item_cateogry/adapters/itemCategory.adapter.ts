import { ItemCategory } from "../../../../../models/ItemCategory.model";

export const itemCategoryAdapter = (data: any[]): ItemCategory[] => {
  return data.map((item => ItemCategory.fromJson(item)));
};
