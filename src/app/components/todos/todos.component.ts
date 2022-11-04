import { Component, Input, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  private _todos:Todos[] = [];

  @Input() set todos(value: any){
    console.log(value);
    if (value) {
      this._todos = value;
    }
  }

  get todos() {
    return this._todos;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
