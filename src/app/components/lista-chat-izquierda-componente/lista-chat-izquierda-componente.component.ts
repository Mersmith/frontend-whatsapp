import { Component, OnInit } from '@angular/core';
import { ContactoSeleccionadoService } from 'src/app/services/contacto-seleccionado-service/contacto-seleccionado.service';
import { ContactoInteface } from 'src/app/models/contacto-item.model';
import { formatDistanceToNow, format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ChatService } from 'src/app/services/chat-service/chat.service';
import { IconoService } from 'src/app/services/icono-service/icono.service';
import { SesionService } from 'src/app/services/sesion/sesion.service';
import { FiltroRapidoCelularService } from 'src/app/services/filtro-rapido-celular/filtro-rapido-celular.service';

@Component({
  selector: 'app-lista-chat-izquierda-componente',
  templateUrl: './lista-chat-izquierda-componente.component.html',
  styleUrls: ['./lista-chat-izquierda-componente.component.css']
})
export class ListaChatIzquierdaComponenteComponent implements OnInit {

  public iconoArchivo = this.iconoService.IconoArchivo();

  contactoItems: ContactoInteface[] = [];

  contactoSeleccionado: ContactoInteface | null = null;

  constructor(
    private contactoSeleccionadoService: ContactoSeleccionadoService,
    private chatService: ChatService,
    private iconoService: IconoService,
    private sesionService: SesionService,
    private filtroRapidoCelularService: FiltroRapidoCelularService
  ) { }

  ngOnInit(): void {
    if (this.sesionService.isAuthenticatedUser()) {
      this.contactoItems = this.chatService.getMisSalas();
    }

    // FILTRO RÁPIDO POR NÚMERO DE CELULAR
    this.filtroRapidoCelularService.numeroFiltroContactoSubject.subscribe((numeroFiltroContacto: string) => {
      if (numeroFiltroContacto) {
        const contactosFiltrados = this.chatService.getMisSalas().filter((contacto) => {
          return contacto.number.toLowerCase().includes(numeroFiltroContacto.toLowerCase());
        });
        this.contactoItems = contactosFiltrados;
      } else {
        this.contactoItems = this.chatService.getMisSalas();
      }
    });

  }

  seleccionarContacto(contacto: ContactoInteface): void {
    this.contactoSeleccionadoService.setContactoSeleccionado(contacto);
    this.contactoSeleccionado = contacto;
    this.formatearContactoListaNotificacion(contacto.number);
  }

  formatearContactoListaNotificacion(numero_destinatario: string) {
    const contactoItems = this.chatService.getMisSalas();

    const selectedItem = contactoItems.find((item) => item.number === numero_destinatario);

    if (selectedItem) {
      selectedItem.notification = 0;
    }
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
