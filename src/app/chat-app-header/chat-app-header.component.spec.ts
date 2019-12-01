import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAppHeaderComponent } from './chat-app-header.component';

describe('ChatAppHeaderComponent', () => {
  let component: ChatAppHeaderComponent;
  let fixture: ComponentFixture<ChatAppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAppHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
