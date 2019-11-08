import { Component, OnInit } from '@angular/core';
import { Todos } from '../todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  newToDo: string = '';
  todoList: Array<Todos> = [];
  constructor() { }

  ngOnInit() {
  }
  addTodo = function() {
    if(this.newToDo == '') {
      alert("Todo must not be empty!");
      return false;
    }
    for (let x in this.todoList) {
      if (this.newToDo == this.todoList[x].name) {
        alert("Task already in the list!");
        return false;
      }
    }
    this.todoList.push({
      name: this.newToDo,
      done: false
    })
    this.newToDo = '';
    console.log(this.todoList);
  }
  isEmpty = function() {
    if(this.todoList.length > 0) {
      return false;
    }
    return true;
  }
  changeStatus = function(x: Todos) {
    x.done = !(x.done);
  }
  delete = function(x: Todos) {
    this.todoList.splice(this.todoList.indexOf(x), 1);
  }
}
