import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { PrvaComponent } from "./prva/prva.component";
import { DrugaComponent } from "./druga/druga.component";
import { TrecaComponent } from "./treca/treca.component";

const routes: Route[] = [
  { path: "", component: PrvaComponent },
  { path: "druga", component: DrugaComponent },
  { path: "treca/:id", component: TrecaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
