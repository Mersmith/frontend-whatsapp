import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToogleSidebarService {

  private mostrarContenedorValue1 = false;
  private mostrarContenedorValue2 = false;
  private mostrarContenedorValue3 = false;

  constructor() { }

  mostrarContenedor(sidebarNumber: number) {

    switch (sidebarNumber) {
      case 1:
        this.mostrarContenedorValue1 = true;
        break;
      case 2:
        this.mostrarContenedorValue2 = true;
        break;
      case 3:
        this.mostrarContenedorValue3 = true;
        break;
    }

  }

  ocultarContenedor(sidebarNumber: number) {

    switch (sidebarNumber) {
      case 1:
        this.mostrarContenedorValue1 = false; break;
      case 2:
        this.mostrarContenedorValue2 = false; break;
      case 3:
        this.mostrarContenedorValue3 = false; break;
    }

  }

  obtenerEstadoContenedor(sidebarNumber: number) {

    switch (sidebarNumber) {
      case 1:
        return this.mostrarContenedorValue1;
      case 2:
        return this.mostrarContenedorValue2;
      case 3:
        return this.mostrarContenedorValue3;
      default:
        return false;
    }
  }
}
