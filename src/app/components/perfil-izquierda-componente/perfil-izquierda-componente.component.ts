import { Component } from '@angular/core';
import { ToogleSidebarService } from 'src/app/services/toogle-sidebar.service';

@Component({
  selector: 'app-perfil-izquierda-componente',
  templateUrl: './perfil-izquierda-componente.component.html',
  styleUrls: ['./perfil-izquierda-componente.component.css']
})
export class PerfilIzquierdaComponenteComponent {

  constructor(
    private toogleSidebarService: ToogleSidebarService
  ) { }

  cerrarContenedorWhatsappPerfil() {
    this.toogleSidebarService.ocultarContenedor(2);
  }

}
