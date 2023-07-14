import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraDerechaComponenteComponent } from './cabecera-derecha-componente.component';

describe('CabeceraDerechaComponenteComponent', () => {
  let component: CabeceraDerechaComponenteComponent;
  let fixture: ComponentFixture<CabeceraDerechaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabeceraDerechaComponenteComponent]
    });
    fixture = TestBed.createComponent(CabeceraDerechaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
