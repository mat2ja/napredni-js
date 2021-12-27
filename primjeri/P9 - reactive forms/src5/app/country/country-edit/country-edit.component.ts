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


    this.countryForm = this.fb.group({
      'name': new FormControl(this.mode=='add' ? "" : this.country.name, Validators.required),
      'population': new FormControl(this.mode=='add' ? "" : this.country.population, Validators.required),
      'flagURL': new FormControl(this.mode=='add' ? "" : this.country.flagURL, Validators.required),
      'capital': new FormControl(this.mode=='add' ? "" : this.country.capital, Validators.required),
      'gdp': new FormControl(this.mode=='add' ? "" : this.country.population, Validators.required),
    });

    this.countryForm.valueChanges
        .pipe(map((value) => {
          value.name = value.name.toUpperCase();
          return value;
        }),
        filter((value) => this.countryForm.valid && value.name.length>5))
        .subscribe((value) => {
          console.log(value);
        });

  }

  onCancel(){
    this.cancelEvent.emit();
  }


  onSubmit(){
    console.log(this.countryForm);
    if (this.mode=='add'){
      this.countryService.addCountry(this.countryForm.value);
    } else {
      this.countryService.editCountry(this.countryForm.value);
    }

  }

}
