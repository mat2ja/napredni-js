import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CountryDetailComponent } from './country/country-detail/country-detail.component';
import { CountriesComponent } from './country/countries/countries.component';
import { SortingPipe } from './country/countries/sorting.pipe';
import { FilterPipe } from './country/countries/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CountryEditComponent } from './country/country-edit/country-edit.component';
import { SharedModule } from './shared/shared.module';

//https://stackoverflow.com/questions/59322583/cannot-find-angular-fire-firestore-module-error-in-vscode
//ponovo napraviti projekt nakon angular cli updatea

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
