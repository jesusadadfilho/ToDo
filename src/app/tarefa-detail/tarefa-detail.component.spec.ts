import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaDetailComponent } from './tarefa-detail.component';

describe('TarefaDetailComponent', () => {
  let component: TarefaDetailComponent;
  let fixture: ComponentFixture<TarefaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
