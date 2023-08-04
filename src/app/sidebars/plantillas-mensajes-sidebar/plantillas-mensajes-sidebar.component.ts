import { Component, OnInit } from '@angular/core';
import { IconoService } from 'src/app/services/icono-service/icono.service';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar-servide/toogle-sidebar.service';
import { mensajesRapidosItems } from './data-mensajes-rapidos';
import { MensajeRapidoSeleccionadoService } from 'src/app/services/mensaje-rapido-seleccionado-service/mensaje-rapido-seleccionado.service';

@Component({
  selector: 'app-plantillas-mensajes-sidebar',
  templateUrl: './plantillas-mensajes-sidebar.component.html',
  styleUrls: ['./plantillas-mensajes-sidebar.component.css']
})
export class PlantillasMensajesSidebarComponent implements OnInit {

  public iconoCerrar = this.iconoService.IconoCerrar();

  mensajesRapidosItems: any[] = [];

  mensajeRapidoSeleccionado: string = "";

  constructor(
    private toogleSidebarService: ToogleSidebarService,
    private iconoService: IconoService,
    private mensajeRapidoSeleccionadoService: MensajeRapidoSeleccionadoService,
  ) { }

  ngOnInit(): void {
    this.mensajesRapidosItems = mensajesRapidosItems;
  }

  seleccionarMensajeRapido(mensajeRapidoItem: any): void {
    this.mensajeRapidoSeleccionadoService.setMensajeRapidoSeleccionado(mensajeRapidoItem.texto);
    this.mensajeRapidoSeleccionado = mensajeRapidoItem.texto;
  }

  cerrarPlantillasMensajesSidebar() {
    this.toogleSidebarService.ocultarContenedor(5);
  }

}
