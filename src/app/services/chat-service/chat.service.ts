import { Injectable } from '@angular/core';
import { contactoItems } from 'src/app/services/chat-service/data-contactos';
import { ContactoInteface } from 'src/app/models/contacto-item.model';
import { mensajes } from './data-mensajes';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  unirseSalaPorContacto(contactoSeleccionado:ContactoInteface) {
    console.log("UNIRSE");
  }

  dejarSalaPorContacto(contactoSeleccionado:ContactoInteface) {
    console.log("DEJAR");
  }

  getMisSalas(): ContactoInteface[] {
    return contactoItems;
  }

  getMensajesPorContacto(numeroContacto:any) {
    return mensajes[numeroContacto];
  }

}