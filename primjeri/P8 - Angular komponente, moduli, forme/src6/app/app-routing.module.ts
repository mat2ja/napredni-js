import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {CountryModule} from "./country/country.module";
import {NewsModule} from "./news/news.module";

const routes : Route[] = [
    {path:'news',loadChildren: () => NewsModule},
    {path:'',loadChildren: () => CountryModule}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
   exports: [RouterModule]
})
export class AppRoutingModule { }
