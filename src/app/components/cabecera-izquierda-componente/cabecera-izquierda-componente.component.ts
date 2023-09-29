import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { IconoService } from 'src/app/services/icono-service/icono.service';
import { MotivoPausarChatService } from 'src/app/services/motivo_pausar_chat/motivo-pausar-chat.service';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar-servide/toogle-sidebar.service';

@Component({
  selector: 'app-cabecera-izquierda-componente',
  templateUrl: './cabecera-izquierda-componente.component.html',
  styleUrls: ['./cabecera-izquierda-componente.component.css']
})
export class CabeceraIzquierdaComponenteComponent implements OnInit {
  public iconoOpciones = this.iconoService.IconoOpciones();
  public iconoChat = this.iconoService.IconoChat();
  public iconoEstado = this.iconoService.IconoEstado();
  public iconoPlay = this.iconoService.IconoPlay();
  public iconoPausa = this.iconoService.IconoPausa();

  estadoOpcionesPerfil: Boolean = false;

  estadoModalPausarChat: boolean = false;
  estadoPausadoChat: boolean = false;

  motivosDePausa: any;

  @ViewChild('contenedorOpcionesPerfil', { static: true })
  contenedorOpcionesPerfilRef!: ElementRef;

  constructor(
    private toogleSidebarService: ToogleSidebarService,
    private iconoService: IconoService,
    private motivoPausarChatService: MotivoPausarChatService,
  ) { }

  ngOnInit(): void {
    this.traerMotivosPausaChat();

    this.motivoPausarChatService.obtenerModalPausarChat().subscribe((estado) => {
      this.estadoModalPausarChat = estado;
    });

    this.motivoPausarChatService.obtenerEstadoPausadoChat().subscribe((estado) => {
      this.estadoPausadoChat = estado;
    });
  }

  abrirModalPausarChat() {
    this.motivoPausarChatService.setModalPausarChat(true);
  }

  traerMotivosPausaChat() {
    this.motivosDePausa = this.motivoPausarChatService.traerMotivosPausarChat();
  }

  toggleContenedorWhatsappPerfil() {
    if (this.toogleSidebarService.obtenerEstadoContenedor(2)) {
      this.toogleSidebarService.ocultarContenedor(2);
    } else {
      this.toogleSidebarService.mostrarContenedor(2);
    }
  }

  toggleContenedorWhatsappNuevoChat() {
    if (this.toogleSidebarService.obtenerEstadoContenedor(3)) {
      this.toogleSidebarService.ocultarContenedor(3);
    } else {
      this.toogleSidebarService.mostrarContenedor(3);
    }
  }

  toggleEstadoOpcionesPerfil() {
    this.estadoOpcionesPerfil = !this.estadoOpcionesPerfil;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const opcionesElement = this.contenedorOpcionesPerfilRef.nativeElement;

    if (opcionesElement && !opcionesElement.contains(target)) {
      this.estadoOpcionesPerfil = false;
    }
  }

}
