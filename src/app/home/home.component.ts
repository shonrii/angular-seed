import { Component } from '@angular/core';

// TODO: seamless transition between static sidebar into fully extended material sidebar
@Component({
  template:  `
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
