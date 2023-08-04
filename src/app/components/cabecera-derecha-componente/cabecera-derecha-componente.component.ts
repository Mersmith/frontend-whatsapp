import { Component, HostListener, ViewChild, ElementRef, Input } from '@angular/core';
import { ContactoInteface } from 'src/app/models/contacto-item.model';
import { ContactoSeleccionadoService } from 'src/app/services/contacto-seleccionado-service/contacto-seleccionado.service';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar-servide/toogle-sidebar.service'; 
import { IconoService } from 'src/app/services/icono-service/icono.service';

@Component({
  selector: 'app-cabecera-derecha-componente',
  templateUrl: './cabecera-derecha-componente.component.html',
  styleUrls: ['./cabecera-derecha-componente.component.css']
})
export class CabeceraDerechaComponenteComponent {

  public iconoBuscar = this.iconoService.IconoBuscar();
  public iconoOpciones = this.iconoService.IconoOpciones();
  public iconoCerrar = this.iconoService.IconoCerrar();
  public iconoChatLista = this.iconoService.IconoChatLista();

  @Input() contactoSeleccionado: ContactoInteface | null = null;

  estadoOpcionesInfo: Boolean = false;

  @ViewChild('contenedorOpcionesInfo', { static: true })
  contenedorOpcionesInfoRef!: ElementRef;

  constructor(
    private toogleSidebarService: ToogleSidebarService,
    private contactoSeleccionadoService: ContactoSeleccionadoService,
    private iconoService: IconoService
  ) { }

  toggleContenedorWhatsappBuscar() {
    if (this.toogleSidebarService.obtenerEstadoContenedor(1)) {
      this.toogleSidebarService.ocultarContenedor(1);
    } else {
      this.toogleSidebarService.mostrarContenedor(1);
    }
  }

  togglePlantillasMensajesSidebar() {
    if (this.toogleSidebarService.obtenerEstadoContenedor(5)) {
      this.toogleSidebarService.ocultarContenedor(5);
    } else {
      this.toogleSidebarService.mostrarContenedor(5);
    }
  }

  toggleEstadoOpcionesInfo() {
    this.estadoOpcionesInfo = !this.estadoOpcionesInfo;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const opcionesElement = this.contenedorOpcionesInfoRef.nativeElement;

    if (opcionesElement && !opcionesElement.contains(target)) {
      this.estadoOpcionesInfo = false;
    }
  }

  cerrarContenedorWhatsappDerecha(){
    this.contactoSeleccionadoService.setContactoSeleccionado(null);
  }

}
