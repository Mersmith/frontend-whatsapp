import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-buscar-izquierda-componente',
  templateUrl: './buscar-izquierda-componente.component.html',
  styleUrls: ['./buscar-izquierda-componente.component.css']
})
export class BuscarIzquierdaComponenteComponent {

  estadoOpcionesChats: Boolean = false;

  @ViewChild('contenedorOpcionesChats', { static: true })
  contenedorOpcionesChatsRef!: ElementRef;

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
