import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoDataService {

  constructor() { }

  // we create demo data for showing frontend.

  vehicleInfo: any = [
    {
      serialNo: 1,
      ownerName: 'Shafiqur Rohman',
      vehicleType: 'Car',
      licenseNo: 'kha-13908662',
      entryTime: '01/21/2023 03:30 PM',
      exitTime: 'Not Exit',
      status: 'Parking',
      editable: false,
    },
    {
      serialNo: 2,
      ownerName: 'Rafiqul Islam',
      vehicleType: 'Car',
      licenseNo: 'K-13908662',
      entryTime: '01/21/2023 03:30 PM',
      exitTime: '01/21/2023 04:30 PM',
      status: 'Empty',
      editable: true,
    },
    {
      serialNo: 3,
      ownerName: 'Karim Hasan',
      vehicleType: 'Car',
      licenseNo: 'ka-1390866',
      entryTime: '01/21/2023 03:30 PM',
      exitTime: 'Not Exit',
      status: 'parking',
      editable: false,
    },
    {
      serialNo: 4,
      ownerName: 'Shafiqul Islam',
      vehicleType: 'Car',
      licenseNo: 'kha-3908662',
      entryTime: '01/21/2023 03:30 PM',
      exitTime: 'Not Exit',
      status: 'parking',
      editable: false,
    },
    {
      serialNo: 5,
      ownerName: 'sakib Al Hasan',
      vehicleType: 'Motocycle',
      licenseNo: 'kha-1390862',
      entryTime: '01/21/2023 03:30 PM',
      exitTime: '01/21/2023 06:30 PM',
      status: 'Empty',
      editable: true,
    },
    {
      serialNo: 6,
      ownerName: 'Roni Ahmed',
      vehicleType: 'Car',
      licenseNo: 'kha-1398662',
      entryTime: '01/21/2023 03:30 PM',
      exitTime: '01/21/2023 06:30 PM',
      status: 'Empty',
      editable: true,
    },
    {
      serialNo: 7,
      ownerName: 'Karimuddin Ahmed',
      vehicleType: 'Car',
      licenseNo: 'kha-13908662',
      entryTime: '01/21/2023 03:30 PM',
      exitTime: '01/21/2023 04:30 PM',
      status: 'Empty',
      editable: true,
    },
    {
      serialNo: 8,
      ownerName: 'Salman Khan',
      vehicleType: 'Car',
      licenseNo: 'kha-13908662',
      entryTime: '01/21/2023 03:30 PM',
      exitTime: 'Not Exit',
      status: 'Parking',
      editable: false,
    },
    {
      serialNo: 9,
      ownerName: 'Akash Khan',
      vehicleType: 'Truck',
      licenseNo: 'kha-13908662',
      entryTime: '01/21/2023 03:30 PM',
      exitTime: 'Not Exit',
      status: 'Paking',
      editable: false,
    },
    {
      serialNo: 10,
      ownerName: 'Sani Korim',
      vehicleType: 'Car',
      licenseNo: 'kha-13908662',
      entryTime: '01/21/2023 03:30 PM',
      exitTime: 'Not Exit',
      status: 'Parking',
      editable: false,
    }
  ]
  getDemoData(): Observable<any> {
    return this.vehicleInfo;
  }
  
}
