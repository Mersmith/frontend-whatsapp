import { Component, Input, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

@Component({
  selector: 'app-mensaje-derecha-componente',
  templateUrl: './mensaje-derecha-componente.component.html',
  styleUrls: ['./mensaje-derecha-componente.component.css']
})
export class MensajeDerechaComponenteComponent implements OnInit {
  @Input() mensaje: any;
  @Input() mensajeRespuesta: boolean = false;

  tipoMensaje: any = '';

  formatearHora(timeString: string): string {
    const date = new Date(`2000-01-01T${timeString}`);
    let hora = format(date, 'h:mm a', { locale: es }).toLowerCase();
    hora = hora.replace(/pm/, 'p.m.');
    hora = hora.replace(/am/, 'a.m.');
    return hora;
  }

  ngOnInit(): void {
    this.tipoMensaje = this.mensaje.type;
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
