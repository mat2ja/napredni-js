import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {CountriesComponent} from "./country/countries/countries.component";
import {CountryDetailComponent} from "./country/country-detail/country-detail.component";
import {AboutComponent} from "./about/about.component";
import {CountryModule} from "./country/country.module";
import {NewsModule} from "./news/news.module";

const routes : Route[] = [
    {path:'news',loadChildren: () => import('./news/news.module').then(m => m.NewsModule)},
    {path:'',loadChildren: () => CountryModule}
];
// ovo tsconfig : esnext
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
   exports: [RouterModule]
})
export class AppRoutingModule { }
