import { TableCategory } from "./TableCategory.model";

export class Table {
  id: number;
  name: string;
  category: TableCategory;
  status: number;

  constructor(id: number, name: string, category: TableCategory, status: number) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.status = status;
  }

  static fromJson(json: any): Table {
    return new Table(json.id, json.name, TableCategory.fromJson(json.category), json.status);
  }
}
