import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsMainComponent } from './news-main/news-main.component';
import {NewsRoutingModule} from "./news-routing.module";



@NgModule({
  declarations: [NewsMainComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
