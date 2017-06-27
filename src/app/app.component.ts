import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import './operators';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from './store';
import * as layoutActions from './store/actions/layout.actions';

import { AuthService } from './auth-core/services/auth.service';
import { SideMenuOptionsService } from './app-core/services/side-menu-options.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showSidenav$: Observable<boolean>;
  views: any[] = [];

  private routerPath$: Observable<string>;
  private showSideNav: boolean;

  constructor(
    public authService: AuthService,
    iconRegistry: MdIconRegistry,
    sanitizer: DomSanitizer,
    private sms: SideMenuOptionsService,
    private store: Store<fromRoot.State>
  ) {
    this.routerPath$ = this.store.select(fromRoot.getRouterPath);
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }

  ngOnInit() {
    this.routerPath$
      .subscribe(path => {
        // console.log('router path', path);
        this.views = [];
        this.views = this.sms.getMenuOptions(path);
      });

    this.showSidenav$
      .subscribe(showSideNav => this.showSideNav = showSideNav);
  }

  toggleSidenav() {
    if (this.showSideNav) {
      this.store.dispatch(new layoutActions.CloseSidenavAction());
    } else {
      this.store.dispatch(new layoutActions.OpenSidenavAction());
    }
  }

}
