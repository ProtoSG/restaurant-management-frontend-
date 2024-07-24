import { TableCategory } from "../../../../../models/TableCategory.model";

export const tableCategoryAdapter = (data: any[]): TableCategory[] => {
  return data.map((item => TableCategory.fromJson(item)))
}
