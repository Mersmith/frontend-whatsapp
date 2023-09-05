import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarSidebarComponent } from './buscar-sidebar.component';

describe('BuscarSidebarComponent', () => {
  let component: BuscarSidebarComponent;
  let fixture: ComponentFixture<BuscarSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarSidebarComponent]
    });
    fixture = TestBed.createComponent(BuscarSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
