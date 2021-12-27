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

  selectedCountry : Country = null;
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

    setEdit(i){
      this.editingCountry= {...this.countries[i]};
      this.editingIndex=i;
    }

    doneEditing(i){

       let c = this.countries[i];
       this.countryService.editCountry(this.editingCountry);
       this.editingIndex=null;
       this.editingCountry=null;

    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

}
