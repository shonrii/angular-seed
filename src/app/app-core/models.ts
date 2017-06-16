export class User {
  id?: number;
  email?: string;
  avatar?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  isAdmin?: boolean;

  constructor(user?: User) {
    if (user) {
      this.email = user.email;
      this.avatar = user.avatar ? user.avatar : 'svg-10';
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.password = user.password;
      this.isAdmin = user.isAdmin ? true : false;
    }
  }
}
