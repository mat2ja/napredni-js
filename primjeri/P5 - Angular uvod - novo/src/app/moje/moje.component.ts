import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moje',
  templateUrl: './moje.component.html',
  styleUrls: ['./moje.component.css'],
})
export class MojeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name = 'matija';
  clickEvent: string | null = null;

  imena = ['marian', 'tomo', 'patrik'];

  counter = 0;

  increment() {
    this.counter++;
  }

  printEvent(e: MouseEvent) {
    console.log(e);
    this.clickEvent = JSON.stringify({ x: e.clientX, y: e.clientY });
  }
}
