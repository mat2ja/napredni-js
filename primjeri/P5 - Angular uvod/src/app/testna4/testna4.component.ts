import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testna4',
  templateUrl: './testna4.component.html',
  styleUrls: ['./testna4.component.css']
})
export class Testna4Component implements OnInit {

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
