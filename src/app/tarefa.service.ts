import { Injectable } from '@angular/core';
import {Tarefa} from './tarefa/tarefa';
import {TAREFAS} from './mock-tarefas';

import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  getTarefas() : Observable<Tarefa[]>{
    return of(TAREFAS);
  }

  getTarefa(descricao : String): Observable<Tarefa>{
    return of(TAREFAS.find(tarefa => tarefa.descricao === descricao ));

  }
}
