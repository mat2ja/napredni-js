import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent implements OnInit {
  query = "";
  countries = [
    { name: "China", capital: "Beijing", population: 1359821000 },
    { name: "India", capital: "New Delhi", population: 1205625000 },
    {
      name: "United States of America",
      capital: "Washington",
      population: 312247000,
    },
  ];

  constructor() {}

  ngOnInit() {}

  //country-detail route
  //kao child route
  //country-detail component
}
