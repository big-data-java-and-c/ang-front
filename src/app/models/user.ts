export class User {
  id: number;
  email: string;
  password: string;
  displayName: string;
  role: string;

  constructor(email: string, password: string, displayName: string, role: string) {
    this.email = email;
    this.password = password;
    this.displayName = displayName;
    this.role = role;
  }
}
