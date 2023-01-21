import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from '../layout/home-layout/home-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCarParkingComponent } from './create-car-parking/create-car-parking.component';
import { CarParkingListComponent } from './car-parking-list/car-parking-list.component';
import { UpdateCarParkingComponent } from './update-car-parking/update-car-parking.component';

const routers: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'create',
    component: CreateCarParkingComponent
  },
  {
    path: 'park-list',
    component: CarParkingListComponent
  },
  {
    path: 'update-parking',
    component: UpdateCarParkingComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class CarParkRoutingModule { }
