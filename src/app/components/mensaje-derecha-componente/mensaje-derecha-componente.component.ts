import { Component, Input, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { IconoService } from 'src/app/services/icono-service/icono.service';
import { VisualizadorMultimediaService } from 'src/app/services/visualizador-multimedia/visualizador-multimedia.service';

@Component({
  selector: 'app-mensaje-derecha-componente',
  templateUrl: './mensaje-derecha-componente.component.html',
  styleUrls: ['./mensaje-derecha-componente.component.css']
})
export class MensajeDerechaComponenteComponent implements OnInit {

  public iconoCheck = this.iconoService.IconoCheck();
  public iconoCheckDoble = this.iconoService.IconoCheckDoble();
  public iconoDocumentoTxt = this.iconoService.IconoDocumentoTxt();
  public iconoDocumentoPdf = this.iconoService.IconoDocumentoPdf();
  public iconoDocumentoWord = this.iconoService.IconoDocumentoWord();
  public iconoDocumentoExcel = this.iconoService.IconoDocumentoExcel();
  public iconoDocumentoComprimido = this.iconoService.IconoDocumentoComprimido();
  public iconoDocumentoMp3 = this.iconoService.IconoDocumentoMp3();
  public iconoDocumentoAudio = this.iconoService.IconoDocumentoAudio();
  public iconoPlay = this.iconoService.IconoPlay();

  @Input() mensaje: any;
  @Input() mensajeRespuesta: boolean = false;

  tipoMensaje: any = '';

  constructor(
    private iconoService: IconoService,
    private visualizadorMultimediaService: VisualizadorMultimediaService,
  ) { }

  formatearHora(timeString: string): string {
    const date = new Date(`2000-01-01T${timeString}`);
    let hora = format(date, 'h:mm a', { locale: es }).toLowerCase();
    hora = hora.replace(/pm/, 'p.m.');
    hora = hora.replace(/am/, 'a.m.');
    return hora;
  }

  ngOnInit(): void {
    this.tipoMensaje = this.mensaje.type;

    if (this.tipoMensaje === 'document') {
      const url = this.mensaje.content;

      const extension = this.getFileExtensionFromUrl(url);
      this.mensaje.extension = extension;

      const partes = url.split('/');
      this.mensaje.nombreArchivo = partes[partes.length - 1];

      if (extension === 'txt') {
        this.mensaje.icono = this.iconoDocumentoTxt;
        this.mensaje.color = "icono_documento_txt";
      } else if (extension === 'pdf') {
        this.mensaje.icono = this.iconoDocumentoPdf;
        this.mensaje.color = "icono_documento_pdf";
      } else if (extension === 'docx') {
        this.mensaje.icono = this.iconoDocumentoWord;
        this.mensaje.color = "icono_documento_docx";
      } else if (extension === 'xlsx') {
        this.mensaje.icono = this.iconoDocumentoExcel;
        this.mensaje.color = "icono_documento_xlsx";
      } else if (extension === 'mp3') {
        this.mensaje.icono = this.iconoDocumentoExcel;
        this.mensaje.color = "icono_documento_mp3";
      } else if (extension === 'ogg') {
        this.mensaje.icono = this.iconoDocumentoAudio;
        this.mensaje.color = "icono_documento_ogg";
      } else if (extension === 'rar' || extension === 'zip') {
        this.mensaje.icono = this.iconoDocumentoComprimido;
        this.mensaje.color = "icono_documento_comprimido";
      } else {
        this.mensaje.icono = this.iconoDocumentoTxt;
      }
    }
  }

  getFileExtensionFromUrl(url: string): string {
    const segments = url.split('.');
    if (segments.length > 1) {
      return segments.pop()!.toLowerCase();
    }
    return '';
  }

  abrirMultimedia(mensaje: any) {
    this.visualizadorMultimediaService.setMultimediaMensajeChat(mensaje);
    this.visualizadorMultimediaService.setEstadoModalVisualizadorChat(true);
  }

  scrollMensajeContexto(context: string | null): void {
    if (context) {
      const mensajeDiv = document.getElementById(context);

      if (mensajeDiv) {

        mensajeDiv.scrollIntoView({ behavior: 'smooth' });

        const estiloContenedorMensaje = mensajeDiv.querySelector('.contenedor_mensaje') as HTMLElement;

        if (estiloContenedorMensaje instanceof HTMLElement) {
          const estilosCalculados = getComputedStyle(estiloContenedorMensaje);
          const backgroundColorReal = estilosCalculados.backgroundColor;

          estiloContenedorMensaje.style.setProperty('--background-color-mi-mensaje', this.oscurecerColorRGB(backgroundColorReal, 20));
          estiloContenedorMensaje.style.setProperty('--background-color-amigo-mensaje', this.oscurecerColorRGB(backgroundColorReal, 20));

          setTimeout(() => {
            estiloContenedorMensaje.style.setProperty('--background-color-mi-mensaje', backgroundColorReal);
            estiloContenedorMensaje.style.setProperty('--background-color-amigo-mensaje', backgroundColorReal);
          }, 1000);

        }

      }
    }
  }

  oscurecerColorRGB(rgbColor: string, amount: number): string {
    const colorValues = rgbColor.match(/\d+/g);
    if (colorValues && colorValues.length === 3) {
      const r = parseInt(colorValues[0]);
      const g = parseInt(colorValues[1]);
      const b = parseInt(colorValues[2]);

      const newR = Math.max(r - amount, 0);
      const newG = Math.max(g - amount, 0);
      const newB = Math.max(b - amount, 0);

      return `rgb(${newR}, ${newG}, ${newB})`;
    }

    return rgbColor;
  }

}
