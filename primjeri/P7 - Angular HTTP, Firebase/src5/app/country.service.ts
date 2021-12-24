import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Country} from "./countries/country.model";

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  constructor(private http:HttpClient) { }

  getCountries(){

     return this.http.get('https://njp2020-c72b7.firebaseio.com/countries2.json')
        .pipe(map(res => {
          const countries=[];
          for (let key in res){
            countries.push({...res[key], id:key});
          }
          return countries;
        }));


  }

  addCountry(country){
    return this.http.post('https://njp2020-c72b7.firebaseio.com/countries2.json',country);

  }

  deleteCountry(id){
    return this.http.delete(`https://njp2020-c72b7.firebaseio.com/countries2/${id}.json`)
  }

  editCountry(country){
    return this.http.patch(`https://njp2020-c72b7.firebaseio.com/countries2/${country.id}/.json`,country)
  }

}
