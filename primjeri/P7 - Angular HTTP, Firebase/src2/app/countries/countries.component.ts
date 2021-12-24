import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  query = '';

  countries: Country[] = null;
  add: boolean = false;
  new: Country = { name: '', flagURL: '', population: 0, capital: '', gdp: 0 };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    //observable operators

    this.http
      .get('https://njp2020-c72b7.firebaseio.com/countries2.json')
      .pipe(
        map((res) => {
          console.log(res);
          const countries = [];
          for (let key in res) {
            countries.push({ ...res[key], id: key });
          }
          console.log(countries);
          return countries;
        })
      )
      .subscribe((res: Country[]) => {
        console.log(res);
        this.countries = res;
      });
  }

  addCountry() {
    console.log(this.new);

    this.http
      .post('https://njp2020-c72b7.firebaseio.com/countries2.json', this.new)
      .subscribe((res) => {
        console.log(res);
        this.countries.push(this.new);
      });
  }
}
