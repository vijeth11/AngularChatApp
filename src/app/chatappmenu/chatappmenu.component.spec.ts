import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatappmenuComponent } from './chatappmenu.component';

describe('ChatappmenuComponent', () => {
  let component: ChatappmenuComponent;
  let fixture: ComponentFixture<ChatappmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatappmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatappmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
