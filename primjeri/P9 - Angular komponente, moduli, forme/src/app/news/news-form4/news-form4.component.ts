import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { News } from '../news-form3/news-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-news-form4',
  templateUrl: './news-form4.component.html',
  styleUrls: ['./news-form4.component.css'],
})
export class NewsForm4Component implements OnInit, OnChanges, DoCheck {
  @Input() in: number;
  @Output() onNews: EventEmitter<News> = new EventEmitter<News>();
  categories: string[] = ['Politika', 'Sport', 'Zabava'];
  model: News = new News();
  constructor() {}

  ngOnInit(): void {}

  send(form: NgForm) {
    console.log(form);
    console.log(this.model);

    this.onNews.emit(this.model);
    this.model = new News();
  }

  ngOnChanges(values) {
    console.log('on changes');
    console.log(values);
  }

  ngDoCheck() {
    console.log('do check');
    console.log(this.model);
  }
}
