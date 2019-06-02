import { Component, OnInit } from '@angular/core';
import { Tarefa } from './tarefa';
import {TarefaService} from '../tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})


export class TarefaComponent implements OnInit {


  tarefas : Tarefa[];
  selectTarefa: Tarefa;


  constructor(private tarefaService : TarefaService) { }

  ngOnInit() {
    this.getTarefas();
  }


  getTarefas() : void{
    this.tarefaService.getTarefas().subscribe(Tarefas => this.tarefas = Tarefas)
  }

}
