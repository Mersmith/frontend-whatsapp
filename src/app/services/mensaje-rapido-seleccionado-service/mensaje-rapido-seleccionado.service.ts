import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeRapidoSeleccionadoService {

  private _mensajeRapidoSeleccionado: string = "";
  private _mensajeRapidoSeleccionadoSubject = new Subject<string>();

  public mensajeRapidoSeleccionado$: Observable<string> = this._mensajeRapidoSeleccionadoSubject.asObservable();

  getMensajeRapidoSeleccionado(): string {
    return this._mensajeRapidoSeleccionado;
  }

  setMensajeRapidoSeleccionado(mensajeRapido: string) {
    this._mensajeRapidoSeleccionado = mensajeRapido;
    this._mensajeRapidoSeleccionadoSubject.next(mensajeRapido);
  }

  constructor() { }
}
