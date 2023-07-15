import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ContactoInteface } from '../../models/contacto-item.model';
import { mensajes } from './data-mensajes';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
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

  formatearHora(timeString: string): string {
    const date = new Date(`2000-01-01T${timeString}`);
    let hora = format(date, 'h:mm a', { locale: es }).toLowerCase();
    hora = hora.replace(/pm/, 'p.m.');
    hora = hora.replace(/am/, 'a.m.');
    return hora;
  }

}
