import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAppFooterComponent } from './chat-app-footer.component';

describe('ChatAppFooterComponent', () => {
  let component: ChatAppFooterComponent;
  let fixture: ComponentFixture<ChatAppFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAppFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
