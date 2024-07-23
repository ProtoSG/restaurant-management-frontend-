import { ItemCategory } from "./ItemCategory.model";

export class Inventory {
  id: number;
  name: string;
  category: ItemCategory;
  quantity: number;
  price: number;

  constructor(id: number, name: string, category: ItemCategory, quantity: number, price: number) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
  }

  static fromJson(json: any): Inventory {
    return new Inventory(json.id, json.name, ItemCategory.fromJson(json.category), json.quantity, json.price);
  }
}
