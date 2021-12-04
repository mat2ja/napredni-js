import { Student } from './../students/students.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  jmbagParam: any;
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
  student: Student | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.jmbagParam = params['jmbag'];
      const student = this.students.find(
        ({ jmbag }) => jmbag === this.jmbagParam
      );
      if (student) {
        this.student = student as Student;
      }
    });
  }
}
