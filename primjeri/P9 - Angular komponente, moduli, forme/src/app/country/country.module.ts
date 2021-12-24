import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryRoutingModule } from './country-routing.module';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { SortingPipe } from './countries/sorting.pipe';
import { FilterPipe } from './countries/filter.pipe';
import { AboutComponent } from '../about/about.component';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CountriesComponent,
    CountryDetailComponent,
    SortingPipe,
    FilterPipe,
    AboutComponent,
    CountryEditComponent,
  ],
  imports: [HttpClientModule, FormsModule, CommonModule, CountryRoutingModule],
})
export class CountryModule {}
