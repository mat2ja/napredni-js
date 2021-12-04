import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CountriesComponent } from "./countries/countries.component";
import { CountryDetailComponent } from "./country-detail/country-detail.component";

const routes: Route[] = [
  {
    path: "",
    component: CountriesComponent,
    children: [{ path: ":id", component: CountryDetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
