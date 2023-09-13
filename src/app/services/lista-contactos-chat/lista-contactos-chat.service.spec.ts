import { TestBed } from '@angular/core/testing';

import { ListaContactosChatService } from './lista-contactos-chat.service';

describe('ListaContactosChatService', () => {
  let service: ListaContactosChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaContactosChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
