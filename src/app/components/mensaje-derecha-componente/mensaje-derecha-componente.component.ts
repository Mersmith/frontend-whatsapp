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

}
