import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraIzquierdaComponenteComponent } from './cabecera-izquierda-componente.component';

describe('CabeceraIzquierdaComponenteComponent', () => {
  let component: CabeceraIzquierdaComponenteComponent;
  let fixture: ComponentFixture<CabeceraIzquierdaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabeceraIzquierdaComponenteComponent]
    });
    fixture = TestBed.createComponent(CabeceraIzquierdaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
