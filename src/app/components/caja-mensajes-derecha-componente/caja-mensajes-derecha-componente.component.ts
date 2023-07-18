import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ContactoInteface } from '../../models/contacto-item.model';
import { mensajes } from './data-mensajes';

@Component({
  selector: 'app-caja-mensajes-derecha-componente',
  templateUrl: './caja-mensajes-derecha-componente.component.html',
  styleUrls: ['./caja-mensajes-derecha-componente.component.css']
})
export class CajaMensajesDerechaComponenteComponent implements OnChanges {

  @Input() contactoSeleccionado: ContactoInteface | null = null;

  mensajes: any = [];

  ngOnChanges(changes: SimpleChanges): void {

    if (this.contactoSeleccionado?.number) {

      const numeroContacto = this.contactoSeleccionado.number;
      this.mensajes = mensajes[numeroContacto];

      if (this.mensajes) {
        this.verificarPropietarioMensajeRespuesta();
      }

    } else {
      this.mensajes = [];
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

}
