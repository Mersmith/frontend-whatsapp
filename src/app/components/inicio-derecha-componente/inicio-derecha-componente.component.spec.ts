import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDerechaComponenteComponent } from './inicio-derecha-componente.component';

describe('InicioDerechaComponenteComponent', () => {
  let component: InicioDerechaComponenteComponent;
  let fixture: ComponentFixture<InicioDerechaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioDerechaComponenteComponent]
    });
    fixture = TestBed.createComponent(InicioDerechaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
