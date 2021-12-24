import { Injectable, OnInit } from '@angular/core';
import { Country } from './countries/country.model';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countries: Country[] = null;
  countrySubject: BehaviorSubject<Country[]> = new BehaviorSubject(null);

  constructor(private dataService: DataService) {
    this.init();
  }

  init() {
    this.dataService.getCountries().subscribe((res) => {
      this.countries = res;
      this.countrySubject.next(this.countries);
    });
  }

  getCountries() {
    // vracamo referencu koja je observable i za koju cemo javljati nova stanja,
    // kompnnenta koja ga koristi ce se subsribati na njega i ocekivati nove promjene
    return this.countrySubject;
  }

  addCountry(country) {
    this.dataService.addCountry(country).subscribe((res) => {
      console.log(res);
      this.countries.push(country);
      this.countrySubject.next(this.countries);
    });
  }

  getCountry(name) {
    return this.countries.find((c) => c.name == name);
  }

  deleteCountry(id) {
    this.dataService.deleteCountry(id).subscribe((res) => {
      console.log(res);
      this.countries = this.countries.filter((c) => c.id != id);
      this.countrySubject.next(this.countries);
    });
  }

  editCountry(country) {
    this.dataService.editCountry(country).subscribe(
      (res) => {
        console.log(res);
        this.countries[this.countries.findIndex((c) => c.id == country.id)] =
          country;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
