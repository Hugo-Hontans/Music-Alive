import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartemapComponent } from './cartemap.component';

describe('CartemapComponent', () => {
  let component: CartemapComponent;
  let fixture: ComponentFixture<CartemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
