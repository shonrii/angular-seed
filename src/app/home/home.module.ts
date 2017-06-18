import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTabsModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home.component';
import { AddUserDialogComponent } from './dialog/add-user-dialog.component';
import { HomeRoutingModule } from './home-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    SharedModule,
    MdTabsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    DashboardHomeComponent,
    AddUserDialogComponent,
    UserDetailsComponent
  ],
  entryComponents: [AddUserDialogComponent]
})
export class HomeModule { }
