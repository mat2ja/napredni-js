import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import { CountryDetailComponent } from './country-detail/country-detail.component';
import {CountriesComponent} from "./countries/countries.component";
import {SortingPipe} from "./countries/sorting.pipe";
import {FilterPipe} from "./countries/filter.pipe";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';

//https://stackoverflow.com/questions/59322583/cannot-find-angular-fire-firestore-module-error-in-vscode
//ponovo napraviti projekt nakon angular cli updatea

@NgModule({
  declarations: [
    AppComponent,
      CountriesComponent,
    CountryDetailComponent, SortingPipe, FilterPipe, NavbarComponent, AboutComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
