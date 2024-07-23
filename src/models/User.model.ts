export class User {
  id: number;
  username: string;
  password: string;
  role: string;

  constructor(id: number, username: string, password: string, role: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
  }

  static fromJson(json: any): User {
    return new User(json.id, json.username, json.password, json.role);
  }
}
