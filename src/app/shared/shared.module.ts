import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {
  MdButtonModule,
  MdIconModule,
  MdListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApiService } from './api.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    // angular modules
    CommonModule,
    FormsModule,
    // angular material modules
    FlexLayoutModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    // shared components/modules
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
