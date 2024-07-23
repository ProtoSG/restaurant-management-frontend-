import { Inventory } from "./Inventory.model";

export class OrderItem {
  id: number;
  orderId: number;
  itemId: number;
  item: Inventory;
  quantity: number;
  subTotal: number;

  constructor(orderId: number, itemId: number, item: Inventory, quantity: number) {
    this.id = 0;
    this.orderId = orderId;
    this.itemId = itemId;
    this.item = item;
    this.quantity = quantity;
    this.subTotal = item.price * quantity;
  }

  static fromJson(json: any): OrderItem {
    return new OrderItem(
      json.orderId,
      json.itemId,
      Inventory.fromJson(json.item),
      json.quantity
    );
  }
}
