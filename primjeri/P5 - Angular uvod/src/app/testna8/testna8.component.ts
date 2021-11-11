import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testna8',
  templateUrl: './testna8.component.html',
  styleUrls: ['./testna8.component.css']
})
export class Testna8Component implements OnInit {

  komentar = 'a';

  constructor() { }

  ngOnInit() {
  }

  dajKlasu(){

    if (this.komentar==undefined) return 'btn btn-danger';
    if (this.komentar.length>20) return 'btn btn-success'; else return 'btn btn-danger';

  }

}
