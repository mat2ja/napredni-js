import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {CountriesComponent} from "../country/countries/countries.component";
import {AboutComponent} from "../about/about.component";
import {CountryDetailComponent} from "../country/country-detail/country-detail.component";
import {NewsMainComponent} from "./news-main/news-main.component";



const routes : Route[] = [
  {path:'',component:NewsMainComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
