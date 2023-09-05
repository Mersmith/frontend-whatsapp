import { Component } from '@angular/core';
import { ContactoInteface } from '../../models/contacto-item.model';
import { ContactoSeleccionadoService } from 'src/app/services/contacto-seleccionado-service/contacto-seleccionado.service';

@Component({
  selector: 'app-whatsapp-derecha-sidebar',
  templateUrl: './whatsapp-derecha-sidebar.component.html',
  styleUrls: ['./whatsapp-derecha-sidebar.component.css']
})
export class WhatsappDerechaSidebarComponent {

  contactoSeleccionado: ContactoInteface | null = null;

  constructor(
    private contactoSeleccionadoService: ContactoSeleccionadoService
  ) { }

  ngOnInit(): void {

    this.contactoSeleccionadoService.contactoSeleccionado$.subscribe(contacto => {
      this.contactoSeleccionado = contacto;
    });

  }

}
