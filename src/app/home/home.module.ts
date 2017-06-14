import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdDialogModule,
  MdTabsModule
} from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home.component';
import { DialogComponent } from './dialog/dialog.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MdDialogModule,
    MdTabsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    DashboardHomeComponent,
    DialogComponent
  ]
})
export class HomeModule { }
