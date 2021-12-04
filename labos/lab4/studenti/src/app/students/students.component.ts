import { Component, OnInit } from '@angular/core';

export interface Student {
  ime: string;
  jmbag: string;
  ects: number;
  prosjek: number;
  semestar?: number;
}

export interface SortField {
  field: string | null;
  asc: boolean;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  semestarQuery: string = '';
  sortField: SortField = {
    field: null,
    asc: true,
  };
  students: Student[] = [
    {
      ime: 'matija',
      jmbag: '960551',
      ects: 102,
      prosjek: 4.78,
    },
    {
      ime: 'marin',
      jmbag: '864501',
      ects: 28,
      prosjek: 2.92,
    },
    {
      ime: 'mislav',
      jmbag: '411341',
      ects: 56,
      prosjek: 4.0,
    },
    {
      ime: 'robi',
      jmbag: '482311',
      ects: 50,
      prosjek: 3.9,
    },
    {
      ime: 'tomo',
      jmbag: '474891',
      ects: 122,
      prosjek: 2.55,
    },
    {
      ime: 'mateo',
      jmbag: '169941',
      ects: 166,
      prosjek: 3.96,
    },
    {
      ime: 'patrik',
      jmbag: '308171',
      ects: 142,
      prosjek: 4.4,
    },
    {
      ime: 'marian',
      jmbag: '180541',
      ects: 122,
      prosjek: 1.9,
    },
    {
      ime: 'tin',
      jmbag: '233681',
      ects: 30,
      prosjek: 3.0,
    },
    {
      ime: 'ivan',
      jmbag: '831821',
      ects: 0,
      prosjek: 1.2,
    },
    {
      ime: 'klara',
      jmbag: '588021',
      ects: 69,
      prosjek: 3.78,
    },
  ];

  setSort(field: string) {
    if (this.sortField.field === field) {
      this.sortField.asc = !this.sortField.asc;
    } else {
      this.sortField.field = field;
      this.sortField.asc = true;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
