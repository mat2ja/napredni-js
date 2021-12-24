import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsMainComponent } from './news-main/news-main.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsForm1Component } from './news-form1/news-form1.component';
import { NewsForm2Component } from './news-form2/news-form2.component';
import { NewsForm3Component } from './news-form3/news-form3.component';
import { NewsForm4Component } from './news-form4/news-form4.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsMainComponent,
    NewsForm1Component,
    NewsForm2Component,
    NewsForm3Component,
    NewsForm4Component,
  ],
  imports: [CommonModule, FormsModule, NewsRoutingModule],
})
export class NewsModule {}
