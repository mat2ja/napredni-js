import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-treca",
  templateUrl: "./treca.component.html",
  styleUrls: ["./treca.component.css"],
})
export class TrecaComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];

    /*this.route.params.subscribe(
        (params:Params) => {
          this.id=params.id
    }
    );*/

    console.log(this.id);
  }
}
