import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappIzquierdaComponenteComponent } from './whatsapp-izquierda-componente.component';

describe('WhatsappIzquierdaComponenteComponent', () => {
  let component: WhatsappIzquierdaComponenteComponent;
  let fixture: ComponentFixture<WhatsappIzquierdaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsappIzquierdaComponenteComponent]
    });
    fixture = TestBed.createComponent(WhatsappIzquierdaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
