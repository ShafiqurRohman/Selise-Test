import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarParkingComponent } from './create-car-parking.component';

describe('CreateCarParkingComponent', () => {
  let component: CreateCarParkingComponent;
  let fixture: ComponentFixture<CreateCarParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCarParkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
