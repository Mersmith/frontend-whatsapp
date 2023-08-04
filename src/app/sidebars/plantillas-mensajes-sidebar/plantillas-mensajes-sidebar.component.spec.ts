import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillasMensajesSidebarComponent } from './plantillas-mensajes-sidebar.component';

describe('PlantillasMensajesSidebarComponent', () => {
  let component: PlantillasMensajesSidebarComponent;
  let fixture: ComponentFixture<PlantillasMensajesSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantillasMensajesSidebarComponent]
    });
    fixture = TestBed.createComponent(PlantillasMensajesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
