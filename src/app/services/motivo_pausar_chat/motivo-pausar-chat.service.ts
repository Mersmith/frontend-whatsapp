import { Injectable } from '@angular/core';
import { motivosPausarChatItems } from './data-motivos-pausar-chat';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotivoPausarChatService {

  private modalPausarChatSubject = new Subject<boolean>();
  private pausarChatSubject = new Subject<boolean>();
  private motivoPausarChatSubject = new Subject<any>();

  constructor() {
    this.modalPausarChatSubject.next(false);
    this.pausarChatSubject.next(false);
  }

  traerMotivosPausarChat() {
    return motivosPausarChatItems;
  }

  setModalPausarChat(pausado: boolean) {
    this.modalPausarChatSubject.next(pausado);
  }

  obtenerModalPausarChat(): Observable<boolean> {
    return this.modalPausarChatSubject.asObservable();
  }

  setEstadoPausadoChat(pausado: boolean) {
    this.pausarChatSubject.next(pausado);
  }

  obtenerEstadoPausadoChat(): Observable<boolean> {
    return this.pausarChatSubject.asObservable();
  }

  setMotivoPausarChat(objeto: any) {
    this.motivoPausarChatSubject.next(objeto);
  }

  obtenerMotivoPausarChat(): Observable<any> {
    return this.motivoPausarChatSubject.asObservable();
  }

}
