import { Component, HostListener } from '@angular/core';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar-servide/toogle-sidebar.service';
import { ContactoSeleccionadoService } from 'src/app/services/contacto-seleccionado-service/contacto-seleccionado.service';
@Component({
  selector: 'app-inicio-pagina',
  templateUrl: './inicio-pagina.component.html',
  styleUrls: ['./inicio-pagina.component.css']
})
export class InicioPaginaComponent {

  constructor(
    private toogleSidebarService: ToogleSidebarService,
    private contactoSeleccionadoService: ContactoSeleccionadoService
  ) { }

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

  obtenerEstadoFiltroSidebar() {
    return this.toogleSidebarService.obtenerEstadoContenedor(4);
  }

  obtenerEstadoPlantillasMensajesSidebar() {
    return this.toogleSidebarService.obtenerEstadoContenedor(5);
  }

  existeContactoSeleccionado() {
    return this.contactoSeleccionadoService.getContactoSeleccionado();
  }

}
