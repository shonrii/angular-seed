import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as auth from '../actions/auth';

@Injectable()
export class AuthService {

  isLoggedIn$: Observable<boolean>;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>
  ) {
    this.isLoggedIn$ = this.store.select(fromRoot.isLoggedIn);
    if (sessionStorage.getItem('seed-app-logged-in') === 'true') {
      this.store.dispatch(new auth.LogInAction());
    }
  }

  login(): Observable<boolean> {
    this.store.dispatch(new auth.LogInAction());
    return Observable.of(true);
  }

  logout(): void {
    this.store.dispatch(new auth.LogOutAction());
    this.router.navigate(['/login']);
  }
}
