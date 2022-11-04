import { Component } from '@angular/core';
import { TodosService } from './services/todos.service';
import { Observable } from 'rxjs';
import { Todos } from './models/todos';
import { delay, filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todosFiltered$: Observable<Todos[]>;
  limit = 15;

  constructor(private _todosService: TodosService) {
    this.todosFiltered$ = this._todosService.getTodos().pipe(
      map((result) => {
        return result.splice(0, this.limit);
      })
    );
  }

  ngOnInit(): void {
  }
}
