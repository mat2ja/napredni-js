import { EventEmitter, Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthService {
  private user: User;
  private token: string;
  errorEmitter: Subject<string> = new Subject<string>();
  authChange: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { username: string; password: string }) {
    let users = [
      {
        id: 1,
        username: 'oggy',
        password: '1234',
        email: 'test@test',
        name: 'Ognjen Staničić',
        role: 1,
      },
      {
        id: 2,
        username: 'oggy2',
        password: '1234',
        email: 'test@test',
        name: 'Ognjen Staničić',
        role: 2,
      },
    ];

    new Observable((observer) => {
      setTimeout(() => {
        let u = users.find(
          (u) =>
            u.username == credentials.username &&
            u.password == credentials.password
        );
        observer.next(u);
      }, 1000);
    }).subscribe((user: User) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.authChange.next(true);
        this.router.navigate(['/']);
      } else {
        this.errorEmitter.next('Wrong credentials');
      }
    });
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    if (!this.user) this.user = JSON.parse(localStorage.getItem('user'));
    return { ...this.user };
  }

  isAuthenticated() {
    return this.user != null;
  }
}
