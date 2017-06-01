import { Component } from '@angular/core';

// TODO: seamless transition between static sidebar into fully extended material sidebar
@Component({
  template:  `
    <div fxLayout="row" fxLayoutAlign="space-between center">
      <div fxFlex="5%">
        <!--<app-side-bar *ngIf="!sidenav.opened"></app-side-bar>-->
        <app-side-bar></app-side-bar>
      </div>
      <div fxFlex="94%">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class HomeComponent { }
