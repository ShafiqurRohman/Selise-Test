import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoDataService } from '../../services/demo-data/demo-data.service';


@Component({
  selector: 'app-car-parking-list',
  templateUrl: './car-parking-list.component.html',
  styleUrls: ['./car-parking-list.component.css']
})
export class CarParkingListComponent implements OnInit {

  parkInfo: any;
  
  constructor(
    //private parkLIst: ParkListService,
    private demoData: DemoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // if I have a api, I will call it here.
    //this.parkLIst.getParkList().subscribe((data) => {
     // this.parkInfo = data;
    //}
    this.parkInfo = this.demoData.vehicleInfo;
  
  }
  goToEdit(): void {
    this.router.navigate(['/update-parking']);
  }

}
