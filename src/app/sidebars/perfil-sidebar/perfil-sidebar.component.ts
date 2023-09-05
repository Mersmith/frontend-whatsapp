import { Component } from '@angular/core';
import { IconoService } from 'src/app/services/icono-service/icono.service';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar-servide/toogle-sidebar.service';

@Component({
  selector: 'app-perfil-sidebar',
  templateUrl: './perfil-sidebar.component.html',
  styleUrls: ['./perfil-sidebar.component.css']
})
export class PerfilSidebarComponent {

  public iconoRetroceder = this.iconoService.IconoRetroceder();

  constructor(
    private toogleSidebarService: ToogleSidebarService,
    private iconoService: IconoService,
  ) { }

  cerrarContenedorWhatsappPerfil() {
    this.toogleSidebarService.ocultarContenedor(2);
  }

}
