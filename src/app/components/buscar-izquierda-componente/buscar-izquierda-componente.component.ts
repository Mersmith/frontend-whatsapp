import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { IconoService } from 'src/app/services/icono-service/icono.service';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar-servide/toogle-sidebar.service';
import { FiltroRapidoCelularService } from 'src/app/services/filtro-rapido-celular/filtro-rapido-celular.service';

@Component({
  selector: 'app-buscar-izquierda-componente',
  templateUrl: './buscar-izquierda-componente.component.html',
  styleUrls: ['./buscar-izquierda-componente.component.css']
})
export class BuscarIzquierdaComponenteComponent {

  public iconoFiltro = this.iconoService.IconoFiltro();
  public iconoBuscar = this.iconoService.IconoBuscar();
  public iconoChatNoLeido = this.iconoService.IconoChatNoLeido();
  public iconoContacto = this.iconoService.IconoContacto();
  public iconoContactoNoGuardado = this.iconoService.IconoContactoNoGuardado();
  public iconoGrupo = this.iconoService.IconoGrupo();
  public iconoEtiqueta = this.iconoService.IconoEtiqueta();
  public iconoFiltroComplejo = this.iconoService.IconoFiltroComplejo();
  public iconoCerrar = this.iconoService.IconoCerrar();

  estadoOpcionesChats: Boolean = false;

  numeroInput = '';

  @ViewChild('contenedorOpcionesChats', { static: true })
  contenedorOpcionesChatsRef!: ElementRef;

  constructor(
    private iconoService: IconoService,
    private toogleSidebarService: ToogleSidebarService,
    private filtroRapidoCelularService: FiltroRapidoCelularService
  ) { }

  buscarFiltroPorNumero() {
    if (this.numeroInput) {
      this.filtroRapidoCelularService.numeroFiltroContactoSubject.next(this.numeroInput);
    }
  }

  borrarFiltroPorNumero() {
    this.numeroInput = '';
    this.filtroRapidoCelularService.numeroFiltroContactoSubject.next(this.numeroInput);
  }

  toggleEstadoOpcionesChats() {
    this.estadoOpcionesChats = !this.estadoOpcionesChats;
  }

  toogleFiltroSidebar() {
    if (this.toogleSidebarService.obtenerEstadoContenedor(4)) {
      this.toogleSidebarService.ocultarContenedor(4);
    } else {
      this.toogleSidebarService.mostrarContenedor(4);
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const opcionesElement = this.contenedorOpcionesChatsRef.nativeElement;

    if (opcionesElement && !opcionesElement.contains(target)) {
      this.estadoOpcionesChats = false;
    }
  }

}
