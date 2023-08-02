import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { IconoService } from 'src/app/services/icono-service/icono.service';

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

  estadoOpcionesChats: Boolean = false;

  @ViewChild('contenedorOpcionesChats', { static: true })
  contenedorOpcionesChatsRef!: ElementRef;

  constructor(
    private iconoService: IconoService
  ) {}

  toggleEstadoOpcionesChats() {
    this.estadoOpcionesChats = !this.estadoOpcionesChats;
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
