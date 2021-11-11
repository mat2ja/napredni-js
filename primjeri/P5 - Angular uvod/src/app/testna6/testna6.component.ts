import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testna6',
  templateUrl: './testna6.component.html',
  styleUrls: ['./testna6.component.css']
})
export class Testna6Component implements OnInit {

  polje = ['Marko','Petar','Ivana'];
  newName = '';

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    this.polje.push(this.newName);
  }
  onDelete(i){
    this.polje.splice(i,1);
  }

}
