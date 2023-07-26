import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilIzquierdaComponenteComponent } from './perfil-izquierda-componente.component';

describe('PerfilIzquierdaComponenteComponent', () => {
  let component: PerfilIzquierdaComponenteComponent;
  let fixture: ComponentFixture<PerfilIzquierdaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilIzquierdaComponenteComponent]
    });
    fixture = TestBed.createComponent(PerfilIzquierdaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
