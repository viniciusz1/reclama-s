import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReclamacaoComponent } from './modal-reclamacao.component';

describe('ModalReclamacaoComponent', () => {
  let component: ModalReclamacaoComponent;
  let fixture: ComponentFixture<ModalReclamacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReclamacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReclamacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
