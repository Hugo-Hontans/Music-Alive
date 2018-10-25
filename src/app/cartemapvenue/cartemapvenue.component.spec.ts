import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartemapvenueComponent } from './cartemapvenue.component';

describe('CartemapvenueComponent', () => {
  let component: CartemapvenueComponent;
  let fixture: ComponentFixture<CartemapvenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartemapvenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartemapvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
