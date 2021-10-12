import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCarsComponent } from './carousel-cars.component';

describe('CarouselCarsComponent', () => {
  let component: CarouselCarsComponent;
  let fixture: ComponentFixture<CarouselCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
