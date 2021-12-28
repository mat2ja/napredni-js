export interface UserLogin {
  username: string;
  password: string;
}

export interface UserRegister extends UserLogin {
  repeatedPassword: string;
  name: string;
  email: string;
}

export interface UserBase {
  username: string;
  password: string;
  name: string;
  email: string;
}

export interface User extends UserBase {
  id: string;
}
