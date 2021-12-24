import { Component, OnInit } from '@angular/core';
import { Country } from './country.model';
import { CountryService } from '../country.service';

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
  editingIndex: number = null;
  editingCountry: Country = {
    id: '',
    name: '',
    flagURL: '',
    population: 0,
    capital: '',
    gdp: 0,
  };

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getCountries().subscribe((res: Country[]) => {
      console.log(res);
      this.countries = res;
    });
  }

  addCountry() {
    console.log(this.new);
    this.countryService.addCountry(this.new).subscribe((res) => {
      console.log(res);
      this.countries.push(this.new);
    });
  }

  deleteCountry(i) {
    console.log(i);
    let c = this.countries[i];
    this.countryService.deleteCountry(c.id).subscribe((res) => {
      console.log(res);
      this.countries.splice(i, 1);
    });
  }

  setEdit(i) {
    this.editingCountry = { ...this.countries[i] };
    this.editingIndex = i;
  }

  doneEditing(i) {
    let c = this.countries[i];
    this.countryService.editCountry(this.editingCountry).subscribe(
      (res) => {
        console.log(res);
        this.editingIndex = null;
        this.countries[i] = this.editingCountry;
        this.editingCountry = null;
      },
      (error) => {
        console.log(error);
      }
    );

    this.editingIndex = null;
  }
}
