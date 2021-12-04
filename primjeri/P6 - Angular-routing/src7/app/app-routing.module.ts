import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {CountriesComponent} from "./countries/countries.component";

const routes : Route[] = [
    {path:'',component:CountriesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
   exports: [RouterModule]
})
export class AppRoutingModule { }
