import { Component } from '@angular/core';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar-servide/toogle-sidebar.service';
import { IconoService } from 'src/app/services/icono-service/icono.service';

@Component({
  selector: 'app-buscar-derecha-componente',
  templateUrl: './buscar-derecha-componente.component.html',
  styleUrls: ['./buscar-derecha-componente.component.css']
})
export class BuscarDerechaComponenteComponent {

  public iconoCerrar = this.iconoService.IconoCerrar();

  constructor(
    private toogleSidebarService: ToogleSidebarService,
    private iconoService: IconoService
  ) { }

  cerrarContenedorWhatsappBuscar() {
    this.toogleSidebarService.ocultarContenedor(1);
  }

}
