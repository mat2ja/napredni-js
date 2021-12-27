import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {News} from "./news-model";

@Component({
  selector: 'app-news-form3',
  templateUrl: './news-form3.component.html',
  styleUrls: ['./news-form3.component.css']
})
export class NewsForm3Component implements OnInit {

  categories:string[] = [
    'Politika',
    'Sport',
    'Zabava',
  ];
  model : News = new News();
  constructor() { }

  ngOnInit(): void {
  }

  send(form:NgForm){
    console.log(form);
    console.log(this.model);
  }

}
