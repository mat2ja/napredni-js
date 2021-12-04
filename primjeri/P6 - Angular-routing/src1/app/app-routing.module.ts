import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { PrvaComponent } from "./prva/prva.component";
import { DrugaComponent } from "./druga/druga.component";

const routes: Route[] = [
  { path: "", component: PrvaComponent },
  { path: "druga", component: DrugaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
