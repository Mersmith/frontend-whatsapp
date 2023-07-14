import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappDerechaComponenteComponent } from './whatsapp-derecha-componente.component';

describe('WhatsappDerechaComponenteComponent', () => {
  let component: WhatsappDerechaComponenteComponent;
  let fixture: ComponentFixture<WhatsappDerechaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsappDerechaComponenteComponent]
    });
    fixture = TestBed.createComponent(WhatsappDerechaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
