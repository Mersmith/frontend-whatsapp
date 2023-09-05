import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappDerechaSidebarComponent } from './whatsapp-derecha-sidebar.component';

describe('WhatsappDerechaSidebarComponent', () => {
  let component: WhatsappDerechaSidebarComponent;
  let fixture: ComponentFixture<WhatsappDerechaSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsappDerechaSidebarComponent]
    });
    fixture = TestBed.createComponent(WhatsappDerechaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
