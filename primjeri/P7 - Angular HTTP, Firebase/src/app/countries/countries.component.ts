import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  query = '';
  countries = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://njp2020-c72b7.firebaseio.com/countries.json')
      .subscribe((res) => {
        console.log(res);
        this.countries = res;
      });
  }
}
