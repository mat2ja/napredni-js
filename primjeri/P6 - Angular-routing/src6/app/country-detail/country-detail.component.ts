import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  name : any;
  @Input() country;

  constructor() { }

  ngOnInit() {

  }

}
