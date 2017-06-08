import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Router,
  NavigationExtras
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import * as fromRoot from '../reducers';
import * as auth from '../actions/auth';

import { AuthService } from '../core/services/auth.service';
import { User } from '../core/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  public error$: Observable<string>;
  public loading$: Observable<boolean>;

  public signupForm: FormGroup;
  private isAlive = true;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.error$ = this.store.select(fromRoot.getRegistrationError);
    this.loading$ = this.store.select(fromRoot.isAuthenticationLoading);

    this.store.select(fromRoot.isAuthenticated)
      .takeWhile(() => this.isAlive)
      .filter(authenticated => authenticated)
      .subscribe(value => {
        this.store.dispatch(go('/home'));
      });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  submit() {
    const user: User = new User();
    user.email = this.signupForm.get('email').value;
    user.firstName = this.signupForm.get('firstName').value;
    user.lastName = this.signupForm.get('lastName').value;
    user.password = this.signupForm.get('password').value;

    user.email.trim();
    user.firstName.trim();
    user.lastName.trim();
    user.password.trim();

    const payload = {
      user: user
    };

    this.store.dispatch(new auth.RegisterAction(payload));
  }

}
