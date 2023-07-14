import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ContactoSeleccionadoService } from 'src/app/services/contacto-seleccionado.service';
import { ContactoInteface } from 'src/app/models/contacto-item.model';
import { formatDistanceToNow, format } from 'date-fns';
import { es } from 'date-fns/locale';
@Component({
  selector: 'app-lista-chat-izquierda-componente',
  templateUrl: './lista-chat-izquierda-componente.component.html',
  styleUrls: ['./lista-chat-izquierda-componente.component.css']
})
export class ListaChatIzquierdaComponenteComponent {

  @Input() contactoItems: ContactoInteface[] = [];

  contactoSeleccionado: ContactoInteface | null = null;

  constructor(
    private contactoSeleccionadoService: ContactoSeleccionadoService
  ) { }

  seleccionarContacto(contacto: ContactoInteface): void {
    this.contactoSeleccionadoService.contactoSeleccionado = contacto;
    this.contactoSeleccionado = contacto;
  }

  formatearFechaRecien(updatedat: string): string {
    const fechaChat = new Date(updatedat);
    const fechaActual = new Date();
    const diferenciaEnDias = Math.floor((fechaActual.getTime() - fechaChat.getTime()) / (1000 * 60 * 60 * 24));

    if (diferenciaEnDias >= 1) {
      return format(fechaChat, 'yyyy/MM/dd', { locale: es });
    }

    const options = {
      locale: es,
      addSuffix: true,
      includeSeconds: false,
      addSpace: false
    };

    let distanciaTiempo = formatDistanceToNow(fechaChat, options);

    distanciaTiempo = distanciaTiempo.replace(/alrededor de /, '');

    return distanciaTiempo.charAt(0).toUpperCase() + distanciaTiempo.slice(1);
  }

}
