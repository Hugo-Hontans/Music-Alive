import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescIconComponent } from './desc-icon.component';

describe('DescIconComponent', () => {
  let component: DescIconComponent;
  let fixture: ComponentFixture<DescIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
