import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    DashboardHomeComponent
  ]
})
export class HomeModule { }
