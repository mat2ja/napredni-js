import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Country} from "../countries/country.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  name : any;
  country : Country;


  constructor(private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://njp2020-c72b7.firebaseio.com/countries.json')
        .pipe(map(res => {
            const countries=[];
            for (let key in res){
                countries.push({...res[key], id:key});
            }
            return countries;
        }))
        .subscribe((res : Country[]) => {
          console.log(res);
          this.country=res.find(c => c.name == this.name);
        });
    this.name = this.route.snapshot.params['id'];

  }

}
