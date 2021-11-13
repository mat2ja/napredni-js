import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testna5',
  templateUrl: './testna5.component.html',
  styleUrls: ['./testna5.component.css'],
})
export class Testna5Component implements OnInit {
  polje = ['Marko', 'Petar', 'Ivana'];
  newName = '';

  constructor() {}

  ngOnInit() {}

  onAdd() {
    this.polje.push(this.newName);
    this.newName = '';
  }
  onDelete(i: number) {
    this.polje.splice(i, 1);
  }
}
