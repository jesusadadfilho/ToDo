import { Component, OnInit, Input } from '@angular/core';
import { Tarefa } from '../tarefa/tarefa';
import {TarefaService} from '../tarefa.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { parse } from 'querystring';

@Component({
  selector: 'app-tarefa-detail',
  templateUrl: './tarefa-detail.component.html',
  styleUrls: ['./tarefa-detail.component.css']
})


export class TarefaDetailComponent implements OnInit {

  tarefa : Tarefa;

  constructor(
    private route :ActivatedRoute,
    private tarefaService : TarefaService,
    private location : Location
  ) {  }

  ngOnInit() {
    this.getTarefa();
  }

  getTarefa(){
    const descricao = this.route.snapshot.paramMap.get('descricao');
    this.tarefaService.getTarefa(descricao).subscribe(tarefa => this.tarefa = tarefa);
  }

  goBack(): void {
    this.location.back();
  }

}


