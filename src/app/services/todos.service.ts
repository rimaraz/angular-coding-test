import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEnvironment } from 'src/environments/environment.model';
import { AppModule } from '../app.module';
import { map, Observable } from 'rxjs';
import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private urlContext = `${this.ENV_DATA.todoURL}/todos`;

  constructor(
    @Inject('ENV_DATA') private ENV_DATA: IEnvironment,
    private _httpService: HttpClient
  ) {}

  getTodos(): Observable<Todos[]> {
    return this._httpService.get<Todos[]>(this.urlContext);
  }
}
