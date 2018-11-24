import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentVenueComponent } from './content-venue.component';

describe('ContentVenueComponent', () => {
  let component: ContentVenueComponent;
  let fixture: ComponentFixture<ContentVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
