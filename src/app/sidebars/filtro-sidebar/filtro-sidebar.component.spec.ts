import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroSidebarComponent } from './filtro-sidebar.component';

describe('FiltroSidebarComponent', () => {
  let component: FiltroSidebarComponent;
  let fixture: ComponentFixture<FiltroSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroSidebarComponent]
    });
    fixture = TestBed.createComponent(FiltroSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
