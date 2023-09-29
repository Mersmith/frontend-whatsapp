import { Component } from '@angular/core';
import { ContactoInteface } from '../../models/contacto-item.model';
import { ContactoSeleccionadoService } from 'src/app/services/contacto-seleccionado-service/contacto-seleccionado.service';
import { VisualizadorMultimediaService } from 'src/app/services/visualizador-multimedia/visualizador-multimedia.service';

@Component({
  selector: 'app-whatsapp-derecha-sidebar',
  templateUrl: './whatsapp-derecha-sidebar.component.html',
  styleUrls: ['./whatsapp-derecha-sidebar.component.css']
})
export class WhatsappDerechaSidebarComponent {

  contactoSeleccionado: ContactoInteface | null = null;

  estadoModalVisualizadorChat: boolean = false;

  constructor(
    private contactoSeleccionadoService: ContactoSeleccionadoService,
    private visualizadorMultimediaService: VisualizadorMultimediaService
  ) { }

  ngOnInit(): void {

    this.contactoSeleccionadoService.contactoSeleccionado$.subscribe(contacto => {
      this.contactoSeleccionado = contacto;
    });

    this.visualizadorMultimediaService.obtenerEstadoModalVisualizadorChat().subscribe((estado) => {
      this.estadoModalVisualizadorChat = estado;
    });

  }

}
