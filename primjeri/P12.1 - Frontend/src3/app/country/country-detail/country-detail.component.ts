import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Country} from "../countries/country.model";
import {map} from "rxjs/operators";
import {CountryService} from "../country.service";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  name : any;
  country : Country;


  constructor(private route:ActivatedRoute, private countryService: CountryService ) { }

  ngOnInit() {

    this.name=this.route.snapshot.params['id'];
    this.country=this.countryService.getCountry(this.name);

  }

}
