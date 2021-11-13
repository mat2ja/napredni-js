import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos = [
    { desc: 'Shopping', done: false },
    { desc: 'Napisati prezentaciju', done: true },
    { desc: 'Nazvati roditelje', done: false },
  ];

  newTask = '';
  adding = false;
  showAll = true;

  constructor() {}

  ngOnInit() {}

  addTask() {
    this.todos.push({
      desc: this.newTask,
      done: false,
    });
    this.newTask = '';
    this.adding = false;
  }

  clear() {
    this.todos = this.todos.filter((todo) => !todo.done);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
