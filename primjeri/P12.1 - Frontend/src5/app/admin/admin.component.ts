import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";
import {User} from "../shared/user.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users : User[];
  constructor(private usersService:UserService) { }

  ngOnInit(): void {

    this.usersService.getUsers()
        .subscribe((res:{status:string, users:User[]}) => {
          if (res.status=="OK"){
            this.users=res.users;
          }
        });

  }

  changeLevel(u:User){

    let newLevel=u.level==1 ? 2 : 1;
    let newUser = {...u};
    newUser.level=newLevel;
    this.usersService.updateLevel(newUser)
        .subscribe((res:{status:string, changedRows:number}) => {
          if (res.status=="OK"){
            u.level=newLevel;
          }
        })

  }

}
