import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeDerechaComponenteComponent } from './mensaje-derecha-componente.component';

describe('MensajeDerechaComponenteComponent', () => {
  let component: MensajeDerechaComponenteComponent;
  let fixture: ComponentFixture<MensajeDerechaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeDerechaComponenteComponent]
    });
    fixture = TestBed.createComponent(MensajeDerechaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
