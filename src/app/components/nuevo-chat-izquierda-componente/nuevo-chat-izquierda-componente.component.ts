import { Component } from '@angular/core';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar.service';

@Component({
  selector: 'app-nuevo-chat-izquierda-componente',
  templateUrl: './nuevo-chat-izquierda-componente.component.html',
  styleUrls: ['./nuevo-chat-izquierda-componente.component.css']
})
export class NuevoChatIzquierdaComponenteComponent {

  constructor(
    private toogleSidebarService: ToogleSidebarService
  ) { }

  cerrarContenedorWhatsappNuevoChat() {
    this.toogleSidebarService.ocultarContenedor(3);
  }

}
