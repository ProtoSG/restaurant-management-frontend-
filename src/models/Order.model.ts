import { OrderItem } from "./OrderItem.model";
import { Table } from "./Table.model";
import { User } from "./User.model";

export class Order {
  id: number;
  tableId: number;
  table: Table;
  userId: number;
  user: User;
  orderItems: OrderItem[];
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    tableId: number,
    table: Table,
    userId: number,
    user: User,
    orderItems: OrderItem[],
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.tableId = tableId;
    this.table = table;
    this.userId = userId;
    this.user = user;
    this.orderItems = orderItems;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
