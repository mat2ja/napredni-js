import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  query='';
  countries=[
    {
      "name": "China",
      "population": 1359821000,
      "flagURL": "//upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
      "capital": "Beijing",
      "gdp": 12261
    },
    {
      "name": "India",
      "population": 1205625000,
      "flagURL": "//upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
      "capital": "New Delhi",
      "gdp": 4716
    },
    {
      "name": "United States of America",
      "population": 312247000,
      "flagURL": "//upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
      "capital": "Washington, D.C.",
      "gdp": 16244
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  //country-detail route
      //kao child route
      //country-detail component

}
