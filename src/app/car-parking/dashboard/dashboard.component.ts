import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoDataService } from '../../services/demo-data/demo-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  parkInfo: any;
  totalCarPark: any;
  totalEmptySolt: number = 0;
  parkList: any;
  constructor(
    private demoData: DemoDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.parkInfo = this.demoData.vehicleInfo;
    this.totalCarPark = this.parkInfo.length;
    for (let i = 0; i < this.parkInfo.length; i++) {
      if (this.parkInfo[i].status === 'Empty') {
        this.totalEmptySolt++;
      }
    }
  }

  goToList(): void {
    this.router.navigate(['/park-list']);
    
  }

}
