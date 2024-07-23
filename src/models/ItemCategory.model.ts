export class ItemCategory {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  static fromJson(json: any): ItemCategory {
    return new ItemCategory(json.id, json.name);
  }
}
