import { Component, HostListener, OnInit } from '@angular/core';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar-servide/toogle-sidebar.service';
import { ContactoSeleccionadoService } from 'src/app/services/contacto-seleccionado-service/contacto-seleccionado.service';
import { SesionService } from 'src/app/services/sesion/sesion.service';
import { SesionInteface } from 'src/app/models/sesion-item.model';

@Component({
  selector: 'app-inicio-pagina',
  templateUrl: './inicio-pagina.component.html',
  styleUrls: ['./inicio-pagina.component.css']
})
export class InicioPaginaComponent implements OnInit{

  constructor(
    private toogleSidebarService: ToogleSidebarService,
    private contactoSeleccionadoService: ContactoSeleccionadoService,
    private sesionService: SesionService
  ) { }

  ngOnInit(): void {
    const usuario_sesion: SesionInteface = {
        "idusers": "3896",
        "username": "47485918",
        "idgroup": "60",
        "grupo": "Call Center Lab",
        "nombres": "ALEJANDRA PILAR",
        "apellidos": "JAUREGUI CONDORI",
        "avatar": "47485918-181200.png"
    }

    this.sesionService.setUserData(usuario_sesion);
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
