import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarParkRoutingModule } from './car-parking-routing.module';
import { CreateCarParkingComponent } from './create-car-parking/create-car-parking.component';
import { CarParkingListComponent } from './car-parking-list/car-parking-list.component';
import { UpdateCarParkingComponent } from './update-car-parking/update-car-parking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavberComponent } from './navber/navber.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateCarParkingComponent,
    CarParkingListComponent,
    UpdateCarParkingComponent,
    DashboardComponent,
    NavberComponent
  ],
  imports: [
    CommonModule,
    CarParkRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class CarParkModule { }
