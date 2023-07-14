import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaChatIzquierdaComponenteComponent } from './lista-chat-izquierda-componente.component';

describe('ListaChatIzquierdaComponenteComponent', () => {
  let component: ListaChatIzquierdaComponenteComponent;
  let fixture: ComponentFixture<ListaChatIzquierdaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaChatIzquierdaComponenteComponent]
    });
    fixture = TestBed.createComponent(ListaChatIzquierdaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
