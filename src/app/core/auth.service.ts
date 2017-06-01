import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private router: Router) {
    this.isLoggedIn = sessionStorage.getItem('seed-app-logged-in') === 'true';
  }

  login(): Observable<boolean> {
    return Observable
      .of(true)
      .delay(1000)
      .do(val => {
        this.isLoggedIn = true;
        sessionStorage.setItem('seed-app-logged-in', 'true');
      });
  }

  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.removeItem('seed-app-logged-in');
    this.router.navigate(['/login']);
  }
}
