import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fundoPretoModais: boolean = false;
  modalReclamacao: boolean = false;
  modalAviso: boolean = false;

  abrirModalReclamacoes() {
    this.fundoPretoModais = !this.fundoPretoModais
    this.modalReclamacao = !this.modalReclamacao;
  }

  abrirModalAvisos() {
    this.fundoPretoModais = !this.fundoPretoModais
    this.modalAviso = !this.modalAviso;
  }

  toggleOverflow() {
    document.documentElement.style.overflow == "auto" ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = "auto";
  }

  fecharModais(numero: number) {
    this.toggleOverflow();
    switch (numero) {
      case 1:
        this.abrirModalReclamacoes();
        break;
      case 2:
        this.abrirModalAvisos();
        break;
    }
  }
}
