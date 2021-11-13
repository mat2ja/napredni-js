import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testna2',
  templateUrl: './testna2.component.html',
  styleUrls: ['./testna2.component.css'],
})
export class Testna2Component implements OnInit {
  polje = ['Marko', 'Petar', 'Ivana'];

  constructor() {}

  ngOnInit() {}
}
