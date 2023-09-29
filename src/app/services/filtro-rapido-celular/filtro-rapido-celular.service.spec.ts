import { TestBed } from '@angular/core/testing';

import { FiltroRapidoCelularService } from './filtro-rapido-celular.service';

describe('FiltroRapidoCelularService', () => {
  let service: FiltroRapidoCelularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroRapidoCelularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
