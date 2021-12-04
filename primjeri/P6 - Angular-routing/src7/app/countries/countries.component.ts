import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent implements OnInit {
  kolegiji = [
    { naziv: "NJP", ocjene: [5, 4, 5, 3, 1, 5, 5, 5, 5] },
    { naziv: "IPW", ocjene: [4, 3, 5, 2, 2, 1, 5, 4] },
    { naziv: "PWA", ocjene: [5, 5, 5, 4, 3, 1, 5, 5] },
  ];
  ocjena = {
    value: null,
    kolegij: null,
  };

  constructor() {}

  ngOnInit() {}

  dodajOcjenu() {
    console.log(this.ocjena);

    let kolegij = this.kolegiji.find(
      (kolegij) => kolegij.naziv === this.ocjena.kolegij
    );
    kolegij.ocjene.push(this.ocjena.value);
  }
}
