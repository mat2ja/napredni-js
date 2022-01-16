import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService{

  apiRoot =/*'http://localhost:8081'+*/ '/api/countries';

  constructor(private http:HttpClient) { }


  getCountries(){

    return this.http.get(this.apiRoot);

  }

  addCountry(country){
    return this.http.post(this.apiRoot,country);

  }

  deleteCountry(id){
    return this.http.delete(this.apiRoot+`/${id}`)
  }

  editCountry(country){
    return this.http.put(this.apiRoot,country)
  }


}
