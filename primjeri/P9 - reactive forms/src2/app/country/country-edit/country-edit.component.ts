import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from "../countries/country.model";
import {CountryService} from "../country.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map, filter} from 'Rxjs/operators'

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css']
})
export class CountryEditComponent implements OnInit {

  countryForm : FormGroup;

  @Input() country : Country;
  @Input() mode: string;

  @Output() cancelEvent : EventEmitter<void> = new EventEmitter<void>();

  constructor(private countryService:CountryService, private fb : FormBuilder) {



  }

  ngOnInit(): void {

    console.log(this.mode);
    console.log(this.country);

    this.countryForm = this.fb.group({
      'name': new FormControl(this.mode=='add' ? "" : this.country.name, [Validators.required, Validators.minLength(4)]),
      'population': new FormControl(this.mode=='add' ? "" : this.country.population, Validators.required),
      'flagURL': new FormControl(this.mode=='add' ? "" : this.country.flagURL, Validators.required),
      'capital': new FormControl(this.mode=='add' ? "" : this.country.capital, Validators.required),
      'gdp': new FormControl(this.mode=='add' ? "" : this.country.population, Validators.required),
    });



  }

  test(){
    console.log(this.country);
    console.log(this.mode);
  }

  onCancel(){
    this.cancelEvent.emit();
  }

  onEdited(){
    this.countryService.editCountry(this.country);
  }

  onAdded(){
     this.countryService.addCountry(this.country);
  }

  onSubmit(){
    console.log(this.countryForm);
  }

}
