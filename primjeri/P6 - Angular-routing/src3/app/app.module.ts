import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import { CountryDetailComponent } from './country-detail/country-detail.component';
import {CountriesComponent} from "./countries/countries.component";
import {SortingPipe} from "./countries/sorting.pipe";
import {FilterPipe} from "./countries/filter.pipe";
import {MnoziPipe} from "./countries/mnozi.pipe";


@NgModule({
  declarations: [
    AppComponent,
      CountriesComponent,
    CountryDetailComponent, SortingPipe, FilterPipe, MnoziPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
