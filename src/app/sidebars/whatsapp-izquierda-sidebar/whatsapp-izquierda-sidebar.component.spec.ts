import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappIzquierdaSidebarComponent } from './whatsapp-izquierda-sidebar.component';

describe('WhatsappIzquierdaSidebarComponent', () => {
  let component: WhatsappIzquierdaSidebarComponent;
  let fixture: ComponentFixture<WhatsappIzquierdaSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsappIzquierdaSidebarComponent]
    });
    fixture = TestBed.createComponent(WhatsappIzquierdaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
