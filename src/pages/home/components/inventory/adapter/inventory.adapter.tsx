import { Inventory } from "../../../../../models/Inventory.model";

export const inventoryAdapter = (data: any[]): Inventory[] => {
  return data.map((item => Inventory.fromJson(item)));
}

