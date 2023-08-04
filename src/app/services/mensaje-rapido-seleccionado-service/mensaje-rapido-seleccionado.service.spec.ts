import { TestBed } from '@angular/core/testing';

import { MensajeRapidoSeleccionadoService } from './mensaje-rapido-seleccionado.service';

describe('MensajeRapidoSeleccionadoService', () => {
  let service: MensajeRapidoSeleccionadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeRapidoSeleccionadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
