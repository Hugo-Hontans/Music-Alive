import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemessageComponent } from './homemessage.component';

describe('HomemessageComponent', () => {
  let component: HomemessageComponent;
  let fixture: ComponentFixture<HomemessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomemessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
