export class TableCategory {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  static fromJson(json: any): TableCategory {
    return new TableCategory(json.id, json.name);
  }
}
