import { Component, OnInit } from '@angular/core';
import {News} from "../news-form3/news-model";

@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.css']
})
export class NewsMainComponent implements OnInit {

  allNews : News[] = [];
  in : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addNews(news){
    this.allNews.push(news);
  }

}
