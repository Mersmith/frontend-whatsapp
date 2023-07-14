import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDerechaComponenteComponent } from './buscar-derecha-componente.component';

describe('BuscarDerechaComponenteComponent', () => {
  let component: BuscarDerechaComponenteComponent;
  let fixture: ComponentFixture<BuscarDerechaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarDerechaComponenteComponent]
    });
    fixture = TestBed.createComponent(BuscarDerechaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
