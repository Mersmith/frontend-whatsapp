import { Component, Input } from '@angular/core';
import { MotivoPausarChatService } from 'src/app/services/motivo_pausar_chat/motivo-pausar-chat.service';

@Component({
  selector: 'app-motivo-pausar-chat-modal',
  templateUrl: './motivo-pausar-chat-modal.component.html',
  styleUrls: ['./motivo-pausar-chat-modal.component.css']
})
export class MotivoPausarChatModalComponent {

  @Input() motivosDePausa: any;

  estadoPlayChat: boolean = true;

  motivoSeleccionado: any = null;

  constructor(
    private motivoPausarChatService: MotivoPausarChatService,
  ) { }

  cancelarMotivoPausar() {
    this.motivoPausarChatService.setModalPausarChat(false);
    this.motivoPausarChatService.setEstadoPausadoChat(false);
  }

  aceptarMotivoPausar() {
    this.estadoPlayChat = false;
    this.motivoPausarChatService.setEstadoPausadoChat(true);
    this.motivoPausarChatService.setMotivoPausarChat(this.motivoSeleccionado);
  }

  activarChatMotivo() {
    this.motivoPausarChatService.setEstadoPausadoChat(false);
    this.motivoPausarChatService.setModalPausarChat(false);
    this.motivoPausarChatService.setMotivoPausarChat(null);
  }

}
