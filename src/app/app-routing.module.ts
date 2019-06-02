import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TarefaComponent} from './tarefa/tarefa.component'
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TarefaDetailComponent }  from './tarefa-detail/tarefa-detail.component';

const routes: Routes = [
  {path : 'tarefas', component : TarefaComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:descricao', component: TarefaDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
