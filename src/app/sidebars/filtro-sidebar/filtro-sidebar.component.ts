import { Component } from '@angular/core';
import { IconoService } from 'src/app/services/icono-service/icono.service';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar-servide/toogle-sidebar.service';

@Component({
  selector: 'app-filtro-sidebar',
  templateUrl: './filtro-sidebar.component.html',
  styleUrls: ['./filtro-sidebar.component.css']
})
export class FiltroSidebarComponent {

  public iconoFiltroComplejo = this.iconoService.IconoFiltroComplejo();
  public iconoBuscar = this.iconoService.IconoBuscar();

  value_celular: string = '';
  value_leido: string = '';
  value_estado: boolean = true;
  value_fecha_inicio: string = '';
  value_fecha_fin: string = '';

  datosFiltroEnviarPadre = {
    id_user: '',
    celular: '',
    fecha_inicio: '',
    fecha_fin: '',
    notification: 0,
    estado: 1,
  };

  constructor(
    private toogleSidebarService: ToogleSidebarService,
    private iconoService: IconoService,
  ) { }

  cerrarFiltroSidebar() {
    this.toogleSidebarService.ocultarContenedor(4);
  }

  botonFiltrar() {
    console.log(this.datosFiltroEnviarPadre);
  }

  buscarCelular() {
    this.datosFiltroEnviarPadre.celular = this.value_celular;
    this.botonFiltrar();
  }

  buscarNotificacion() {
    this.datosFiltroEnviarPadre.notification = parseInt(this.value_leido);
    this.botonFiltrar();
  }

  buscarLeido() {
    if (this.value_estado) {
      this.datosFiltroEnviarPadre.estado = 1;
    } else {
      this.datosFiltroEnviarPadre.estado = 2;
    }
    this.botonFiltrar();
  }

  buscarFecha() {
    this.datosFiltroEnviarPadre.fecha_inicio = this.value_fecha_inicio;
    this.datosFiltroEnviarPadre.fecha_fin = this.value_fecha_fin;
    this.botonFiltrar();
  }

  botonBorrarFiltro() {
    this.datosFiltroEnviarPadre = {
      id_user: '',
      celular: '',
      fecha_inicio: '',
      fecha_fin: '',
      notification: 0,
      estado: 1,
    };
    this.value_celular = '';
    this.value_leido = '';
    this.value_fecha_inicio = '';
    this.value_fecha_fin = '';
    this.botonFiltrar();
  }

}
