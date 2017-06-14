import { Component } from '@angular/core';

// TODO: seamless transition between static sidebar into fully extended material sidebar
@Component({
  template:  `
  <div class="flex-container" fxFlex fxLayout="column">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
