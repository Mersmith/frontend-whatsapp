import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizadorMultimediaModalComponent } from './visualizador-multimedia-modal.component';

describe('VisualizadorMultimediaModalComponent', () => {
  let component: VisualizadorMultimediaModalComponent;
  let fixture: ComponentFixture<VisualizadorMultimediaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizadorMultimediaModalComponent]
    });
    fixture = TestBed.createComponent(VisualizadorMultimediaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
