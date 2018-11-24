import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLocationComponent } from './content-location.component';

describe('ContentLocationComponent', () => {
  let component: ContentLocationComponent;
  let fixture: ComponentFixture<ContentLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
