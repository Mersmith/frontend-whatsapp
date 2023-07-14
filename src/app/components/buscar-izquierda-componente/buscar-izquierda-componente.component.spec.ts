import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarIzquierdaComponenteComponent } from './buscar-izquierda-componente.component';

describe('BuscarIzquierdaComponenteComponent', () => {
  let component: BuscarIzquierdaComponenteComponent;
  let fixture: ComponentFixture<BuscarIzquierdaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarIzquierdaComponenteComponent]
    });
    fixture = TestBed.createComponent(BuscarIzquierdaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
