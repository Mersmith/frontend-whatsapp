import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivoPausarChatModalComponent } from './motivo-pausar-chat-modal.component';

describe('MotivoPausarChatModalComponent', () => {
  let component: MotivoPausarChatModalComponent;
  let fixture: ComponentFixture<MotivoPausarChatModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotivoPausarChatModalComponent]
    });
    fixture = TestBed.createComponent(MotivoPausarChatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
