import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovoEventoComponent } from './modal-novo-evento.component';

describe('ModalNovoEventoComponent', () => {
  let component: ModalNovoEventoComponent;
  let fixture: ComponentFixture<ModalNovoEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNovoEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNovoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
