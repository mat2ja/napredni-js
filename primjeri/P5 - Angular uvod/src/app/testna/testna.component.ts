import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testna',
  templateUrl: './testna.component.html',
  styleUrls: ['./testna.component.css']
})
export class TestnaComponent implements OnInit {

  a='Test';

  constructor() { }

  ngOnInit() {
  }

  metoda(){
    return 5;
  }

}
