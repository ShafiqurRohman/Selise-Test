import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarParkingListComponent } from './car-parking-list.component';

describe('CarParkingListComponent', () => {
  let component: CarParkingListComponent;
  let fixture: ComponentFixture<CarParkingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarParkingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarParkingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
