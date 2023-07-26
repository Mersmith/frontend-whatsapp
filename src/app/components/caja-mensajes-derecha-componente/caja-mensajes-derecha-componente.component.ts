import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ContactoInteface } from '../../models/contacto-item.model';
import { mensajes } from './data-mensajes';

@Component({
  selector: 'app-caja-mensajes-derecha-componente',
  templateUrl: './caja-mensajes-derecha-componente.component.html',
  styleUrls: ['./caja-mensajes-derecha-componente.component.css']
})
export class CajaMensajesDerechaComponenteComponent implements OnChanges, AfterViewInit, AfterViewChecked {

  @Input() contactoSeleccionado: ContactoInteface | null = null;

  mensajes: any = [];

  @ViewChild('mensaje_contenedor')
  mensaje_contenedor!: ElementRef;

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

  ngAfterViewInit(): void {
    this.scrollToBottom();
    console.log(1);
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
    console.log(2);
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

  private scrollToBottom(): void {
    try {
      this.mensaje_contenedor.nativeElement.scrollTop = 0;
      //this.mensaje_contenedor.nativeElement.scrollTop = this.mensaje_contenedor.nativeElement.scrollHeight;

      const scrollHeight = this.mensaje_contenedor.nativeElement.scrollHeight;
      const visibleHeight = this.mensaje_contenedor.nativeElement.clientHeight;
      const scrollPosition = scrollHeight - visibleHeight;

      this.mensaje_contenedor.nativeElement.scrollTop = scrollPosition;
    } catch (err) { }
  }

}
