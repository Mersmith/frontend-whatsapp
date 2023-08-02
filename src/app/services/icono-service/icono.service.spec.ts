import { TestBed } from '@angular/core/testing';

import { IconoService } from './icono.service';

describe('IconoService', () => {
  let service: IconoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
