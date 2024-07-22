export class Category {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  static fromJson(json: { id: number; name: string }): Category {
    return new Category(json.id, json.name);
  }
}

export const categoryAdapter = (data: any[]): Category[] => {
  return data.map((item => Category.fromJson(item)));
};
