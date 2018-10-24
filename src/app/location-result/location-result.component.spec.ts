import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationResultComponent } from './location-result.component';

describe('LocationResultComponent', () => {
  let component: LocationResultComponent;
  let fixture: ComponentFixture<LocationResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
