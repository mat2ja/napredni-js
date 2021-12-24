import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "./country.model";
import {map} from "rxjs/operators"

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  query='';

  countries : Country[] = null;
  add:boolean = false;
  new : Country = {name:'',flagURL:'',population:0,capital:'',gdp:0};
  editingIndex : number = null;
  editingCountry : Country = {id:'', name:'',flagURL:'',population:0,capital:'',gdp:0};

  constructor( private http: HttpClient) { }

  ngOnInit() {

    //observable operators

    this.http.get('https://njp2020-c72b7.firebaseio.com/countries2.json')
        .pipe(map(res => {
            const countries=[];
            for (let key in res){
                countries.push({...res[key], id:key});
            }
            return countries;
        }))
        .subscribe((res : Country[]) => {
          console.log(res);
          this.countries=res;
    });


      //edit patch
      //editingcountry, reference


     //servisi
     //beh sub

  }


    addCountry(){
        console.log(this.new);
        this.http.post('https://njp2020-c72b7.firebaseio.com/countries2.json',this.new)
            .subscribe((res => {
                console.log(res);
                this.countries.push(this.new);
            }))
    }

    deleteCountry(i){
        console.log(i);
        let c = this.countries[i];
        this.http.delete(`https://njp2020-c72b7.firebaseio.com/countries2/${c.id}.json`)
            .subscribe((res => {
                console.log(res);
                this.countries.splice(i,1);
            }));

    }

    setEdit(i){
      this.editingCountry= {...this.countries[i]};
      this.editingIndex=i;
    }

    doneEditing(i){

        this.http.patch(`https://njp2020-c72b7.firebaseio.com/countries2/${this.editingCountry.id}/.json`,this.editingCountry)
            .subscribe((res => {
                console.log(res);
                this.editingIndex=null;
                this.countries[i]=this.editingCountry;
                this.editingCountry=null;
            }),error => {
                console.log(error);
            });

        this.editingIndex=null;

    }

}
