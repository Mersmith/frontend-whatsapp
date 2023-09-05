import { Component } from '@angular/core';
import { IconoService } from 'src/app/services/icono-service/icono.service';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar-servide/toogle-sidebar.service';

@Component({
  selector: 'app-nuevo-chat-sidebar',
  templateUrl: './nuevo-chat-sidebar.component.html',
  styleUrls: ['./nuevo-chat-sidebar.component.css']
})
export class NuevoChatSidebarComponent {

  public iconoRetroceder = this.iconoService.IconoRetroceder();

  constructor(
    private toogleSidebarService: ToogleSidebarService,
    private iconoService: IconoService,
  ) { }

  cerrarContenedorWhatsappNuevoChat() {
    this.toogleSidebarService.ocultarContenedor(3);
  }

}
