import { TestBed } from '@angular/core/testing';

import { MotivoPausarChatService } from './motivo-pausar-chat.service';

describe('MotivoPausarChatService', () => {
  let service: MotivoPausarChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotivoPausarChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
