import { TestBed } from '@angular/core/testing';

import { ContactoSeleccionadoService } from './contacto-seleccionado.service';

describe('ContactoSeleccionadoService', () => {
  let service: ContactoSeleccionadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoSeleccionadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
