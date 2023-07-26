import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoChatIzquierdaComponenteComponent } from './nuevo-chat-izquierda-componente.component';

describe('NuevoChatIzquierdaComponenteComponent', () => {
  let component: NuevoChatIzquierdaComponenteComponent;
  let fixture: ComponentFixture<NuevoChatIzquierdaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoChatIzquierdaComponenteComponent]
    });
    fixture = TestBed.createComponent(NuevoChatIzquierdaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
