import { TestBed } from '@angular/core/testing';

import { PausarChatService } from './pausar-chat.service';

describe('PausarChatService', () => {
  let service: PausarChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PausarChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
