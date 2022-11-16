import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem/mensagem.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ModalReclamacaoComponent } from './modal-reclamacao/modal-reclamacao.component';
import { ModalAvisosComponent } from './modal-avisos/modal-avisos.component';
import { ModalNovoEventoComponent } from './modal-novo-evento/modal-novo-evento.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MensagemComponent, PerfilComponent, ModalReclamacaoComponent, ModalAvisosComponent, ModalNovoEventoComponent, HeaderComponent],
  exports: [MensagemComponent, PerfilComponent, ModalReclamacaoComponent, ModalAvisosComponent, ModalNovoEventoComponent, HeaderComponent]
})
export class ReutilizaveisModule { }
