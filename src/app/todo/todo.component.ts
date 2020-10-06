import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  // todoList contains all todos
  todoList: any=[];
  todoText: string = "";
  isTodoListEmpty = false;
  constructor() {
    
   }

  ngOnInit() {
    this.isTodoListEmpty = true;
  }
  // write logic to the onAddTodo method is to add a new todo to list
  // get maximum id in list and assign maximum id plus one while adding a todo
  onAddTodo(todoText: any) {
    if (this.todoText != "") {
      console.log("adding text", this.todoText);
      let todoObj = { todoObj: this.todoList.length, text: this.todoText, isCompleted: false, buttonText: "Done" };
      this.todoList.push(todoObj);
      this.todoText = "";
      this.isTodoListEmpty = false;
    }
  }
  // write logic to the onClearTodos method to delete the all todos in the todoList
  onClearTodos() {
    this.todoList = [];
    this.todoText = "";
    this.isTodoListEmpty = true;
  }
  // write logic to method onCompletingTask, to mark todo as as completed or not
  onCompletingTodo(todo: any) {
    if(this.todoList[todo].isCompleted){
      this.todoList[todo].isCompleted=false;
      this.todoList[todo].buttonText="Done";
    }
    else{
      this.todoList[todo].isCompleted=true;
      this.todoList[todo].buttonText="Undone";
    }
  }
  // write logic to method onDeletingTask, to delete the todo
  onDeletingTodo(todoId) {
    this.todoList.delete(todoId);
  }
}
