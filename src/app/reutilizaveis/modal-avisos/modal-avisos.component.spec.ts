import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAvisosComponent } from './modal-avisos.component';

describe('ModalAvisosComponent', () => {
  let component: ModalAvisosComponent;
  let fixture: ComponentFixture<ModalAvisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAvisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
