import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTabsModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardHomeComponent } from './containers/dashboard/dashboard-home.component';
import { AddUserDialogComponent } from './components/dialog/add-user-dialog.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


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
