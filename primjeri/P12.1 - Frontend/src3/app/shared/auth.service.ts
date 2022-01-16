import {EventEmitter, Injectable} from '@angular/core';
import {User} from "./user.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";

@Injectable()
export class AuthService {

  private user : User;
  private token : string;
  errorEmitter : Subject<string> = new Subject<string>();
  authChange : Subject<boolean> = new Subject<boolean>();
  authUrl = /*'http://localhost:8081' + */'/authenticate';

  constructor(private http : HttpClient, private router : Router) { }

  login(credentials : {username : string, password: string}){


    this.http.post(this.authUrl, credentials)
        .subscribe( (res: {status:string, user:User})=>{

          console.log(res);

          if (res.status=="OK") {
        this.user = res.user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.authChange.next(true);
        this.router.navigate(['/']);
      } else {
        this.errorEmitter.next('Wrong credentials!');
      }

    });



  }

  logout(){
    this.user=null;
    localStorage.removeItem('user');
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser(){
    if (!this.user) this.user=JSON.parse(localStorage.getItem('user'));
    return {...this.user};
  }


  isAuthenticated(){
    return this.user!=null;
  }



}
