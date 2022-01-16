import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = environment.API_URL + '/api/users';

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.usersUrl);
  }
  updateLevel(u:User){
    console.log(u);
    return this.http.put(this.usersUrl,u);
  }
}
