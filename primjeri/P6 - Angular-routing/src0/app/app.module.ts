import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CountriesComponent } from "./countries/countries.component";
import { FormsModule } from "@angular/forms";
import { Pipes1Component } from "./pipes1/pipes1.component";
import { Pipes2Component } from "./pipes2/pipes2.component";
import { Pipes3Component } from "./pipes3/pipes3.component";
import { SortingPipe } from "./pipes2/sorting.pipe";
import { FilterPipe } from "./countries/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    Pipes1Component,
    Pipes2Component,
    Pipes3Component,
    SortingPipe,
    FilterPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
