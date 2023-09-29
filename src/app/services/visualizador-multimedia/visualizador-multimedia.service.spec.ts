import { TestBed } from '@angular/core/testing';

import { VisualizadorMultimediaService } from './visualizador-multimedia.service';

describe('VisualizadorMultimediaService', () => {
  let service: VisualizadorMultimediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualizadorMultimediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
