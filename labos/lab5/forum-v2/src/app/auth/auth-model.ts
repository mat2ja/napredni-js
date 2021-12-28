export interface Login {
  username: string;
  password: string;
}

export interface Register extends Login {
  repeatedPassword: string;
  name: string;
  email: string;
}
