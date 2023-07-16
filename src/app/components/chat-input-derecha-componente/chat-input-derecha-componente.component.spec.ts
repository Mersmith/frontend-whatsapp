import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInputDerechaComponenteComponent } from './chat-input-derecha-componente.component';

describe('ChatInputDerechaComponenteComponent', () => {
  let component: ChatInputDerechaComponenteComponent;
  let fixture: ComponentFixture<ChatInputDerechaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatInputDerechaComponenteComponent]
    });
    fixture = TestBed.createComponent(ChatInputDerechaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
