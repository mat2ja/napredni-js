import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PrvaComponent } from "./prva/prva.component";
import { DrugaComponent } from "./druga/druga.component";
import { TrecaComponent } from "./treca/treca.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, PrvaComponent, DrugaComponent, TrecaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
