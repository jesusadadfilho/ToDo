import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TarefaDetailComponent } from './tarefa-detail/tarefa-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    DashboardComponent,
    TarefaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
