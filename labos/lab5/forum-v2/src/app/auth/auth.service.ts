import { DataService } from './../data.service';
import { UserLogin, User, UserBase } from './auth.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User;
  users: User[] = [];

  constructor(private dataService: DataService) {
    this.init();
  }

  init() {
    this.dataService.getUsers().subscribe((res: any) => {
      this.users = res;
    });
  }

  login(credentials: UserLogin) {}

  register(credentials: UserBase) {
    this.dataService.addUser(credentials).subscribe((res: any) => {
      console.log('res :>> ', res);
      const { id } = res;
      this.user = { id, ...credentials };
    });
  }

  isAuthenticated() {
    return this.user != null;
  }
}
