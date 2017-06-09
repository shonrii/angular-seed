import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as auth from '../../actions/auth';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class AppToolbarComponent {
  @Input() visible = true;
  @Output() toggleSideNav = new EventEmitter();
  constructor(private store: Store<fromRoot.State>) { }

  signOut() {
    this.store.dispatch(new auth.SignOutAction());
  }
}
