import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Router,
  NavigationExtras
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as auth from '../actions/auth';

import { AuthService } from '../core/auth.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  authSub: any;
  isLoggedIn = false;
  message: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.authSub = this.authService.isLoggedIn$
      .subscribe(
      isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
        this.setMessage();
      },
      error => {
        this.isLoggedIn = false;
        this.setMessage();
      });
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

  setMessage() {
    this.message = 'Logged ' + (this.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
