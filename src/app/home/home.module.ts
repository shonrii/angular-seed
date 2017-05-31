import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeDashboardComponent } from './home-dashboard.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeDashboardComponent
  ]
})
export class HomeModule { }
