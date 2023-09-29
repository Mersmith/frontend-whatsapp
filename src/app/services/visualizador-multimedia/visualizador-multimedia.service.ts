import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisualizadorMultimediaService {

  private estadoModalVisualizadorChatSubject = new Subject<boolean>();
  private multimediaMensaje: any | null = null;

  constructor() {
    this.estadoModalVisualizadorChatSubject.next(false);
  }

  setEstadoModalVisualizadorChat(estado: boolean) {
    this.estadoModalVisualizadorChatSubject.next(estado);
  }

  obtenerEstadoModalVisualizadorChat(): Observable<boolean> {
    return this.estadoModalVisualizadorChatSubject.asObservable();
  }

  setMultimediaMensajeChat(mensaje: any) {
    this.multimediaMensaje = mensaje;
  }

  obtenerMultimediaMensajeChat(): any {
    return this.multimediaMensaje;
  }
  
}
