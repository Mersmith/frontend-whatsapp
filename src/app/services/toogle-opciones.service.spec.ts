import { TestBed } from '@angular/core/testing';

import { ToogleOpcionesService } from './toogle-opciones.service';

describe('ToogleOpcionesService', () => {
  let service: ToogleOpcionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToogleOpcionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
