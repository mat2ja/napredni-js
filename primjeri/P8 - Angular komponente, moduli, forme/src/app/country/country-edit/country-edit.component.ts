import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../countries/country.model';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css'],
})
export class CountryEditComponent implements OnInit {
  @Input() country: Country;
  @Input() mode: string;

  @Output() cancelEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  test() {
    console.log(this.country);
    console.log(this.mode);
  }

  onCancel() {
    this.cancelEvent.emit();
  }

  onEdited() {
    this.countryService.editCountry(this.country);
  }

  onAdded() {
    this.countryService.addCountry(this.country);
  }
}
