import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testna3',
  templateUrl: './testna3.component.html',
  styleUrls: ['./testna3.component.css']
})
export class Testna3Component implements OnInit {

  polje = ['Marko','Petar','Ivana'];
  newName = '';

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    this.polje.push(this.newName);
  }

}
