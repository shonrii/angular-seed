import { Component, ChangeDetectionStrategy } from '@angular/core';
import './operators';
import 'hammerjs';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import * as layout from './actions/layout';

import { AuthService } from './auth-core/services/auth.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showSidenav$: Observable<boolean>;
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

  constructor(
    public authService: AuthService,
    private store: Store<fromRoot.State>
  ) {
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
  }

  closeSidenav() {
    this.store.dispatch(new layout.CloseSidenavAction());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenavAction());
  }

}
