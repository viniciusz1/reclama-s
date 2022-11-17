import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-reclamacao',
  templateUrl: './modal-reclamacao.component.html',
  styleUrls: ['./modal-reclamacao.component.css']
})
export class ModalReclamacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() fecharModal = new EventEmitter<string>();

  fecharModalReclamacao(texto: string) {
    this.fecharModal.emit(texto);
  }
}
