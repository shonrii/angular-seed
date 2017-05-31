/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/

import { Component } from '@angular/core';

@Component({
  template:  `
    <h2>HOME COMPONENT</h2>
    <router-outlet></router-outlet>
  `
})
export class HomeComponent { }
