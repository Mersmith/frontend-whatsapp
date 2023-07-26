import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ContactoInteface } from '../../models/contacto-item.model';
import { ChatService } from 'src/app/services/chat-service/chat.service';

@Component({
  selector: 'app-caja-mensajes-derecha-componente',
  templateUrl: './caja-mensajes-derecha-componente.component.html',
  styleUrls: ['./caja-mensajes-derecha-componente.component.css']
})
export class CajaMensajesDerechaComponenteComponent implements OnChanges, AfterViewInit, OnDestroy {

  @Input() contactoSeleccionado: ContactoInteface | null = null;

  mensajes: any = [];

  @ViewChild('mensaje_contenedor')
  mensaje_contenedor!: ElementRef;

  constructor(
    private chatService: ChatService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    this.chatService.dejarSalaPorContacto(changes['contactoSeleccionado'].previousValue);

    if (this.contactoSeleccionado?.number) {

      const numeroContacto = this.contactoSeleccionado.number;
      this.mensajes = this.chatService.getMensajesPorContacto(numeroContacto);

      if (this.mensajes) {
        this.verificarPropietarioMensajeRespuesta();
        this.scrollToBottom();
      }

      this.chatService.unirseSalaPorContacto(this.contactoSeleccionado);

    }

  }

  ngAfterViewInit() {
    if (this.mensaje_contenedor && this.mensaje_contenedor.nativeElement) {
      this.scrollToBottom();
    }
  }


  ngOnDestroy() {
    if (this.contactoSeleccionado) {
      this.chatService.dejarSalaPorContacto(this.contactoSeleccionado);
    }
  }

  private verificarPropietarioMensajeRespuesta(): void {
    this.mensajes.forEach((mensaje: any) => {
      if (mensaje.mensaje_respuesta && mensaje.context) {
        const mensajeRespondido = this.mensajes.find((m: any) => m.wamid === mensaje.context);
        if (mensajeRespondido) {
          mensaje.respondidoPor = mensajeRespondido.envio === 1 ? 'Tú' : this.contactoSeleccionado?.name;
        }
      }
    });
  }

  scrollToBottom(): void {
    try {
      setTimeout(() => {
        this.mensaje_contenedor.nativeElement.scrollTop = this.mensaje_contenedor.nativeElement.scrollHeight;
      }, 1);
    } catch { }
  }

}
