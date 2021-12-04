import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { DetailComponent } from './detail/detail.component';
import { FilterPipe } from './filter.pipe';
import { SemestarPipe } from './semestar.pipe';
import { SortingPipe } from './sorting.pipe';

@NgModule({
  declarations: [AppComponent, StudentsComponent, DetailComponent, FilterPipe, SemestarPipe, SortingPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
