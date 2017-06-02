import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApiService } from './api.service';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [SideBarComponent],
  exports: [
    // angular modules
    CommonModule,
    FormsModule,
    // angular material modules
    FlexLayoutModule,
    MdButtonModule,
    MdIconModule,
    // shared components/modules
    SideBarComponent,
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
