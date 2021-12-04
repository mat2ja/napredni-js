import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-country-detail",
  templateUrl: "./country-detail.component.html",
  styleUrls: ["./country-detail.component.css"],
})
export class CountryDetailComponent implements OnInit {
  name: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.name = this.route.snapshot.params["id"];

    /*this.route.params.subscribe(
        (params:Params) => {
          this.id=params.id
    }
    );*/

    console.log(this.name);
  }

  back() {
    this.router.navigate([""]);
  }
}
