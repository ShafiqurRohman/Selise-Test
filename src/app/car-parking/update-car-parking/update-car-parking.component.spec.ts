import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarParkingComponent } from './update-car-parking.component';

describe('UpdateCarParkingComponent', () => {
  let component: UpdateCarParkingComponent;
  let fixture: ComponentFixture<UpdateCarParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCarParkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCarParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
