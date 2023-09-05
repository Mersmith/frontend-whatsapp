import { Component } from '@angular/core';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar-servide/toogle-sidebar.service';
import { IconoService } from 'src/app/services/icono-service/icono.service';

@Component({
  selector: 'app-buscar-sidebar',
  templateUrl: './buscar-sidebar.component.html',
  styleUrls: ['./buscar-sidebar.component.css']
})
export class BuscarSidebarComponent {
  
  public iconoCerrar = this.iconoService.IconoCerrar();

  constructor(
    private toogleSidebarService: ToogleSidebarService,
    private iconoService: IconoService
  ) { }

  cerrarContenedorWhatsappBuscar() {
    this.toogleSidebarService.ocultarContenedor(1);
  }

}
