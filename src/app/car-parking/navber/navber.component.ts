import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.css']
})
export class NavberComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  goToDashboard(): void {
    this.router.navigate(['']); 
  }
  goToCreate(): void {
    this.router.navigate(['/create']);
  }
  goToList(): void {
    this.router.navigate(['/park-list']);
  }
}
