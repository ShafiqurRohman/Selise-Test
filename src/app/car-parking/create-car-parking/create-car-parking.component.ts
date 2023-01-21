import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-car-parking',
  templateUrl: './create-car-parking.component.html',
  styleUrls: ['./create-car-parking.component.css']
})
export class CreateCarParkingComponent implements OnInit {

  ParkingForm!: FormGroup;


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  get f() {
    return this.ParkingForm
  }

  createForm() {
    this.ParkingForm = this.fb.group({
      ownerName: ['', [Validators.required]],
      ownerPhone: ['', [Validators.required]],
      vihicleType: ['', [Validators.required]],
      carLicenseNo: ['', [Validators.required]],
      status: ['', [Validators.required]],
      ownerAddress: ['', [Validators.required]],
      entryTime: ['', [Validators.required]],
      exitTime: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    console.log(this.ParkingForm?.value);
  }

}
