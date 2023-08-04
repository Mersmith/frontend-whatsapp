import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToogleSidebarService {

  private mostrarContenedorValue1 = false;//Buscar Derecha
  private mostrarContenedorValue2 = false;//Perfil
  private mostrarContenedorValue3 = false;//Nuevo Chat
  private mostrarContenedorValue4 = false;//Filtro
  private mostrarContenedorValue5 = true;//Plantilla Mensajes

  constructor() { }

  resetSidebars() {
    this.mostrarContenedorValue1 = false;
    this.mostrarContenedorValue2 = false;
    this.mostrarContenedorValue3 = false;
    this.mostrarContenedorValue4 = false;
    this.mostrarContenedorValue5 = false;
  }

  mostrarContenedor(sidebarNumber: number) {

    this.resetSidebars();

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
      case 4:
        this.mostrarContenedorValue4 = true;
        break;
      case 5:
        this.mostrarContenedorValue5 = true;
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
      case 4:
        this.mostrarContenedorValue4 = false; break;
      case 5:
        this.mostrarContenedorValue5 = false; break;
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
      case 4:
        return this.mostrarContenedorValue4;
      case 5:
        return this.mostrarContenedorValue5;
      default:
        return false;
    }

  }  

}
