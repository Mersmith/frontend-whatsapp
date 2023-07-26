import { Component } from '@angular/core';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar.service';

@Component({
  selector: 'app-buscar-derecha-componente',
  templateUrl: './buscar-derecha-componente.component.html',
  styleUrls: ['./buscar-derecha-componente.component.css']
})
export class BuscarDerechaComponenteComponent {

  constructor(
    private toogleSidebarService: ToogleSidebarService
  ) { }

  cerrarContenedorWhatsappBuscar() {
    this.toogleSidebarService.ocultarContenedor(1);
  }

}
