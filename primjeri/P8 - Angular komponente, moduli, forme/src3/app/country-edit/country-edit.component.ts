import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../countries/country.model";

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css']
})
export class CountryEditComponent implements OnInit {

  @Input() country : Country;
  @Input() mode: string;
  constructor() { }

  ngOnInit(): void {
  }

  test(){
    console.log(this.country);
    console.log(this.mode);
  }

}
