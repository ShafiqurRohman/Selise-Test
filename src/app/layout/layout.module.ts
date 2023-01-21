import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HomeLayoutComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
