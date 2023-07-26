import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ContactoInteface } from '../../models/contacto-item.model';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar.service';
import { ChatService } from 'src/app/services/chat-service/chat.service';
import { ContactoSeleccionadoService } from 'src/app/services/contacto-seleccionado.service';
@Component({
  selector: 'app-inicio-pagina',
  templateUrl: './inicio-pagina.component.html',
  styleUrls: ['./inicio-pagina.component.css']
})
export class InicioPaginaComponent implements OnInit {

  contactoItems: ContactoInteface[] = [];

  @ViewChild('contenedorWhatsappPerfil', { static: true })
  contenedorWhatsappPerfilRef!: ElementRef<HTMLElement>;

  @ViewChild('contenedorWhatsappIzquierda', { static: true })
  contenedorWhatsappIzquierdaRef!: ElementRef<HTMLElement>;

  @ViewChild('contenedorWhatsappNuevoChat', { static: true })
  contenedorWhatsappNuevoChatRef!: ElementRef<HTMLElement>;

  constructor(
    private toogleSidebarService: ToogleSidebarService,
    private chatService: ChatService,
    private contactoSeleccionadoService: ContactoSeleccionadoService
  ) { }

  ngOnInit(): void {
    this.contactoItems = this.chatService.getMisSalas();
    this.ajustarAnchoContenedorPerfil();
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.contactoSeleccionadoService.setContactoSeleccionado(null);
  }

  obtenerEstadoContenedorWhatsappBuscar() {
    return this.toogleSidebarService.obtenerEstadoContenedor(1);
  }

  obtenerEstadoContenedorWhatsappPerfil() {
    return this.toogleSidebarService.obtenerEstadoContenedor(2);
  }

  obtenerEstadoContenedorWhatsappNuevoChat() {
    return this.toogleSidebarService.obtenerEstadoContenedor(3);
  }

  private ajustarAnchoContenedorPerfil() {
    const contenedorWhatsappIzquierda = this.contenedorWhatsappIzquierdaRef.nativeElement;
    const contenedorWhatsappPerfil = this.contenedorWhatsappPerfilRef.nativeElement;
    const contenedorWhatsappNuevoChat = this.contenedorWhatsappNuevoChatRef.nativeElement;

    const actualizarAnchoOpciones = () => {
      const ancho = getComputedStyle(contenedorWhatsappIzquierda).width;
      contenedorWhatsappPerfil.style.width = ancho;
      contenedorWhatsappNuevoChat.style.width = ancho;
      window.requestAnimationFrame(actualizarAnchoOpciones);
    };

    actualizarAnchoOpciones();
  }

}
