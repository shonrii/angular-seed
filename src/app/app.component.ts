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

  constructor(
    public authService: AuthService,
    iconRegistry: MdIconRegistry,
    sanitizer: DomSanitizer,
    private sms: SideMenuOptionsService,
    private store: Store<fromRoot.State>
  ) {
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }

  ngOnInit() {
    this.store.select(fromRoot.getRouterPath)
      .subscribe(path => {
        // console.log('router path', path);
        this.views = [];
        this.views = this.sms.getMenuOptions(path);
      });
  }

}
