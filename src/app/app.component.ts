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
  constructor(public authService: AuthService) { }
}
