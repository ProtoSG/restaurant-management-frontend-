import { ItemCategory } from "./ItemCategory.model";

export class Inventory {
  id?: number;
  name: string;
  category: ItemCategory;
  quantity: number;
  price: number;
  image: string;

  constructor(id: number, name: string, category: ItemCategory, quantity: number, price: number, image: string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
    this.image = image;
  }

  static fromJson(json: any): Inventory {
    return new Inventory(json.id, json.name, ItemCategory.fromJson(json.category), json.quantity, json.price, json.image);
  }
}

export class InventoryNative {
  id?: number;
  name: string;
  item_category_id: number;
  quantity: number;
  price: number;
  image: string;

  constructor(id: number, name: string, item_category_id: number, quantity: number, price: number, image: string) {
    this.id = id;
    this.name = name;
    this.item_category_id = item_category_id;
    this.quantity = quantity;
    this.price = price;
    this.image = image;
  }
}
