import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaMensajesDerechaComponenteComponent } from './caja-mensajes-derecha-componente.component';

describe('CajaMensajesDerechaComponenteComponent', () => {
  let component: CajaMensajesDerechaComponenteComponent;
  let fixture: ComponentFixture<CajaMensajesDerechaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CajaMensajesDerechaComponenteComponent]
    });
    fixture = TestBed.createComponent(CajaMensajesDerechaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
