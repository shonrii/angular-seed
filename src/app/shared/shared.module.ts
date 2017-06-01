import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';


@NgModule({
  imports: [
    HttpModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
