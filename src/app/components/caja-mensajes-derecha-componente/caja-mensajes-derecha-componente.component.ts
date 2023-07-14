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
    } else {
      this.mensajes = [];
    }

  }

}
