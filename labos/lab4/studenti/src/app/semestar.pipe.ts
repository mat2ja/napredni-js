import { Student } from './students/students.component';
import { Pipe, PipeTransform } from '@angular/core';

const calculateSemestar = (ects: number) => {
  const semester = ects / 30 + 1;
  return Math.floor(semester);
};

@Pipe({
  name: 'semestar',
})
export class SemestarPipe implements PipeTransform {
  transform(students: Student[]): Student[] {
    return students.map((student) => {
      student.semestar = calculateSemestar(student.ects);
      return student;
    });
  }
}
