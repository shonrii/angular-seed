import { Component } from '@angular/core';
import './operators';
import 'hammerjs';

import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // TODO: subscribe to router state and use some service to determine sidenav view links available
  views: any[] = [
    {
      name: 'link1',
      icon: 'business'
    },
    {
      name: 'link2',
      icon: 'local_convenience_store'
    },
    {
      name: 'link3',
      icon: 'group_add'
    },
  ];

  constructor(public authService: AuthService) { }
}
