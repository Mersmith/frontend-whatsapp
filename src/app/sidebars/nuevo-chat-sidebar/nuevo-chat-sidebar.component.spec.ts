import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoChatSidebarComponent } from './nuevo-chat-sidebar.component';

describe('NuevoChatSidebarComponent', () => {
  let component: NuevoChatSidebarComponent;
  let fixture: ComponentFixture<NuevoChatSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoChatSidebarComponent]
    });
    fixture = TestBed.createComponent(NuevoChatSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
