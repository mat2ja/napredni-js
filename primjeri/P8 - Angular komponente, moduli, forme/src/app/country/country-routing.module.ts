import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { AboutComponent } from '../about/about.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

const routes: Route[] = [
  { path: '', component: CountriesComponent },
  { path: 'about', component: AboutComponent },
  { path: ':id', component: CountryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
