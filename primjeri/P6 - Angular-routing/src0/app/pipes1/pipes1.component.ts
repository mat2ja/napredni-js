import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes1',
  templateUrl: './pipes1.component.html',
  styleUrls: ['./pipes1.component.css']
})
export class Pipes1Component implements OnInit {


  data=[
    {id: 1, name: "Tekst", datum:(new Date()), money:1000},
    {id: 2, name: "Nesto", datum:"09/10/2016", money:"3000"},
    {id: 3, name: "Primjer", datum:"09-10-2016", money:"2000"},
    {id: 4, name: "Filteri", datum:(new Date()), money:"4000"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
