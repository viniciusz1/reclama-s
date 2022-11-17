import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-avisos',
  templateUrl: './modal-avisos.component.html',
  styleUrls: ['./modal-avisos.component.css']
})
export class ModalAvisosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() fecharModal = new EventEmitter<string>();

  fecharModalAviso(texto: string) {
    this.fecharModal.emit(texto);
  }

}
