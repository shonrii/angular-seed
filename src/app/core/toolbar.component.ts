import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class AppToolbarComponent {
  @Input() visible = true;
  @Output() toggleSideNav = new EventEmitter();
  constructor(public authService: AuthService) { }
}
