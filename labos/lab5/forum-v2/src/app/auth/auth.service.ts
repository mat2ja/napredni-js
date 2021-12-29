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
      this.setUserToStorage(this.user);
      this.authChange.next(true);
      this.router.navigate(['']);
    } else {
      this.removeUserFromStorage();
    }
  }

  logout() {
    this.user = null;
    this.removeUserFromStorage();
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  register(credentials: UserBase) {
    this.dataService.addUser(credentials).subscribe((res: any) => {
      this.user = { id: res.id, ...credentials };
      this.users.push(this.user);

      this.setUserToStorage(this.user);
      this.usersSubject.next(this.users);
      this.authChange.next(true);
      this.router.navigate(['']);
    });
  }

  setUserToStorage(user: User) {
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }

  removeUserFromStorage() {
    sessionStorage.removeItem('user');
  }

  isAuthenticated() {
    return this.user != null;
  }

  isCurrentUser(userId: string) {
    return this.isAuthenticated() && this.user?.id === userId;
  }

  getUser(): User | null {
    if (!this.user) {
      const storedUser = sessionStorage.getItem('user');
      this.user = storedUser ? JSON.parse(storedUser) : null;

      if (!this.user) return null;
    }
    return { ...this.user };
  }

  getUserById(userId: string) {
    return this.users.find(({ id }) => id === userId) ?? null;
  }

  getUsers() {
    return this.usersSubject;
  }
}
