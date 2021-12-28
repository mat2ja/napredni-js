import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { DataService } from './../data.service';
import { UserLogin, User, UserBase } from './auth.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User | null;
  users: User[] = [];
  usersSubject: BehaviorSubject<User[]> = new BehaviorSubject([] as User[]);
  errorEmitter: Subject<string | null> = new Subject<string | null>();
  authChange: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService, private router: Router) {
    this.init();
  }

  init() {
    this.dataService.getUsers().subscribe((res: any) => {
      this.users = res;
      this.usersSubject.next(this.users);
    });
  }

  login(credentials: UserLogin) {
    this.user =
      this.users.find((user) => {
        const userFound = user.username === credentials.username;
        const passwordMatch = user.password === credentials.password;
        return userFound && passwordMatch;
      }) ?? null;

    const errorMsg = !this.user ? 'Incorrect username or password.' : null;
    this.errorEmitter.next(errorMsg);

    if (this.user) {
      localStorage.setItem('user', JSON.stringify(this.user));
      this.authChange.next(true);
      this.router.navigate(['']);
    } else {
      localStorage.removeItem('user');
    }
  }

  logout() {
    console.log('logout from auth service');
    this.user = null;
    localStorage.removeItem('user');
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  register(credentials: UserBase) {
    this.dataService.addUser(credentials).subscribe((res: any) => {
      this.user = { id: res.id, ...credentials };
      this.users.push(this.user);
      this.usersSubject.next(this.users);
      this.authChange.next(true);
    });
  }

  isAuthenticated() {
    return this.user != null;
  }

  getUser(): User | null {
    if (!this.user) {
      const localStorageUser = localStorage.getItem('user');
      this.user = localStorageUser ? JSON.parse(localStorageUser) : null;

      if (!this.user) return null;
    }
    return { ...this.user };
  }
}
