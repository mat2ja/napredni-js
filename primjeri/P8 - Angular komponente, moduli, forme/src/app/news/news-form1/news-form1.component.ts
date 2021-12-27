import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-form1',
  templateUrl: './news-form1.component.html',
  styleUrls: ['./news-form1.component.css'],
})
export class NewsForm1Component implements OnInit {
  categories: string[] = ['Politika', 'Sport', 'Zabava'];
  constructor() {}

  ngOnInit(): void {}
}
