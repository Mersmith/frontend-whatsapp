import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ContactoInteface } from 'src/app/models/contacto-item.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoSeleccionadoService {
  private _contactoSeleccionado: ContactoInteface | null = null;
  private _contactoSeleccionadoSubject = new Subject<ContactoInteface | null>();

  public contactoSeleccionado$: Observable<ContactoInteface | null> = this._contactoSeleccionadoSubject.asObservable();

  getContactoSeleccionado(): ContactoInteface | null {
    return this._contactoSeleccionado;
  }

  setContactoSeleccionado(contacto: ContactoInteface | null) {
    this._contactoSeleccionado = contacto;
    this._contactoSeleccionadoSubject.next(contacto);
  }

  constructor() { }
}
