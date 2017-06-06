import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad,
  Route
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('canActivate');
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('canActivateChild');
    return this.canActivate(route, state);
  }

  canLoad(route: Route): Observable<boolean> {
    console.log('canLoad');
    const url = `/${route.path}`;

    return this.checkLogin(url);
  }

  // TODO: add permissions check
  checkLogin(url: string): Observable<boolean> {
    return this.authService.isAuthenticated()
      .do(authenticated => {
        console.log('guard.checkLogin:', authenticated);
        if (!authenticated) {
          // Store the attempted URL for redirecting
          this.authService.redirectUrl = url;

          // Create a dummy session id
          const sessionId = 123456789;

          // Set our navigation extras object
          // that contains our global query params and fragment
          const navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
          };

          // Navigate to the login page with extras
          this.router.navigate(['/login'], navigationExtras);
        }
      }).take(1);
  }
}
