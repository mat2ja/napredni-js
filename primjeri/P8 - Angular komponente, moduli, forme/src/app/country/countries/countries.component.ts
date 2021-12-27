import { Component, OnDestroy, OnInit } from '@angular/core';
import { Country } from './country.model';
import { CountryService } from '../country.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit, OnDestroy {
  query = '';

  countries: Country[] = null;
  countrySubject: BehaviorSubject<Country[]> = null;
  subscription: Subscription = null;

  add: boolean = false;
  editingIndex: number = null;

  blankCountry = {
    id: '',
    name: '',
    flagURL: '',
    population: 0,
    capital: '',
    gdp: 0,
  };

  selectedCountry: Country = this.blankCountry;
  mode: string = '';

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countrySubject = this.countryService.getCountries();
    this.subscription = this.countrySubject.subscribe((res) => {
      this.countries = res;
    });
  }

  deleteCountry(i) {
    console.log(i);
    let c = this.countries[i];
    this.countryService.deleteCountry(c.id);
  }

  startEditing(country) {
    this.selectedCountry = { ...country };
    this.mode = 'edit';
  }

  startAdding() {
    this.resetSelectedCountry();
    this.mode = 'add';
  }

  onCancel() {
    this.resetSelectedCountry();
    this.mode = '';
  }

  resetSelectedCountry() {
    this.selectedCountry = this.blankCountry;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
