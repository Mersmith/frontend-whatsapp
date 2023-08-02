import { Component, HostListener, ViewChild, ElementRef, Input } from '@angular/core';
import { ContactoInteface } from 'src/app/models/contacto-item.model';
import { ContactoSeleccionadoService } from 'src/app/services/contacto-seleccionado.service';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar.service';

@Component({
  selector: 'app-cabecera-derecha-componente',
  templateUrl: './cabecera-derecha-componente.component.html',
  styleUrls: ['./cabecera-derecha-componente.component.css']
})
export class CabeceraDerechaComponenteComponent {

  @Input() contactoSeleccionado: ContactoInteface | null = null;

  estadoOpcionesInfo: Boolean = false;

  @ViewChild('contenedorOpcionesInfo', { static: true })
  contenedorOpcionesInfoRef!: ElementRef;

  constructor(
    private toogleSidebarService: ToogleSidebarService,
    private contactoSeleccionadoService: ContactoSeleccionadoService
  ) { }

  toggleContenedorWhatsappBuscar() {
    if (this.toogleSidebarService.obtenerEstadoContenedor(1)) {
      this.toogleSidebarService.ocultarContenedor(1);
    } else {
      this.toogleSidebarService.mostrarContenedor(1);
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
