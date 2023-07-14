import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ContactoInteface } from 'src/app/models/contacto-item.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoSeleccionadoService {

  private _contactoSeleccionado: ContactoInteface | null = null;
  private _contactoSeleccionadoSubject = new Subject<ContactoInteface | null>();

  public contactoSeleccionado$ = this._contactoSeleccionadoSubject.asObservable();

  get contactoSeleccionado(): ContactoInteface | null {
    return this._contactoSeleccionado;
  }

  set contactoSeleccionado(contacto: ContactoInteface | null) {
    this._contactoSeleccionado = contacto;
    this._contactoSeleccionadoSubject.next(contacto);
  }

  constructor() { }
}
