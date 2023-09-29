import { Component, OnInit } from '@angular/core';
import { IconoService } from 'src/app/services/icono-service/icono.service';
import { VisualizadorMultimediaService } from 'src/app/services/visualizador-multimedia/visualizador-multimedia.service';

@Component({
  selector: 'app-visualizador-multimedia-modal',
  templateUrl: './visualizador-multimedia-modal.component.html',
  styleUrls: ['./visualizador-multimedia-modal.component.css']
})
export class VisualizadorMultimediaModalComponent implements OnInit {

  public iconoCerrar = this.iconoService.IconoCerrar();

  multimediaMensaje: any;
  tipoMensaje: any = '';

  constructor(
    private visualizadorMultimediaService: VisualizadorMultimediaService,
    private iconoService: IconoService
  ) { }

  ngOnInit(): void {
    const mensaje = this.visualizadorMultimediaService.obtenerMultimediaMensajeChat();
    if (mensaje) {
      this.multimediaMensaje = mensaje;
      this.tipoMensaje = mensaje.type;
    }
  }

  cerrarVisualizadorMultimediaModal() {
    this.visualizadorMultimediaService.setEstadoModalVisualizadorChat(false);
  }

}
