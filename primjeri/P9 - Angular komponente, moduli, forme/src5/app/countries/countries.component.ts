import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "./country.model";
import {map} from "rxjs/operators"
import {CountryService} from "../country.service";
import {BehaviorSubject, Subscription} from "rxjs";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, OnDestroy {

  query='';

  countries : Country[] = null;
  countrySubject : BehaviorSubject<Country[]>=null;
  subscription : Subscription = null;

  add:boolean = false;
  new : Country = {name:'',flagURL:'',population:0,capital:'',gdp:0};
  editingIndex : number = null;
  editingCountry : Country = {id:'', name:'',flagURL:'',population:0,capital:'',gdp:0};

  selectedCountry : Country = {id:'', name:'',flagURL:'',population:0,capital:'',gdp:0};
  mode : string = '';

  constructor( private http: HttpClient, private countryService: CountryService ) { }

  ngOnInit() {

    this.countrySubject=this.countryService.getCountries();
    this.subscription=this.countrySubject
        .subscribe(res => {
            this.countries=res;
        });

  }


    addCountry(){
        console.log(this.new);
        this.countryService.addCountry(this.new);
    }

    deleteCountry(i){
        console.log(i);
        let c = this.countries[i];
        this.countryService.deleteCountry(c.id);
    }

    startEditing(country){
      this.selectedCountry={...country};
      this.mode='edit';
    }

    onEdited(country){
        console.log(country);
        let c = this.countries.findIndex(c => c.id == country.id);
        this.countries[c]=country;

        this.selectedCountry={id:'', name:'',flagURL:'',population:0,capital:'',gdp:0};
        this.mode='';
    }

    startAdding(){
      this.selectedCountry={id:'', name:'',flagURL:'',population:0,capital:'',gdp:0};
      this.mode='add';
    }


    onCancel(){
      this.selectedCountry={id:'', name:'',flagURL:'',population:0,capital:'',gdp:0};;
      this.mode='';
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

}
