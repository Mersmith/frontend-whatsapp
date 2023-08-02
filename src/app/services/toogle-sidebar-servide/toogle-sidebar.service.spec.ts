import { TestBed } from '@angular/core/testing';

import { ToogleSidebarService } from './toogle-sidebar.service';

describe('ToogleSidebarService', () => {
  let service: ToogleSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToogleSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
