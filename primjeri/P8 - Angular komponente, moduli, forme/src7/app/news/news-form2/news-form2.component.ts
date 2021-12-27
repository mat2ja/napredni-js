import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-news-form2',
  templateUrl: './news-form2.component.html',
  styleUrls: ['./news-form2.component.css']
})
export class NewsForm2Component implements OnInit {

  categories:string[] = [
    'Politika',
    'Sport',
    'Zabava',
  ];
  constructor() { }

  ngOnInit(): void {
  }

  send(form:NgForm){
    console.log(form);
  }

}
