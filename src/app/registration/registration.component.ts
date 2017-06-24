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
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import * as fromRoot from '../store';
import * as authActions from '../store/actions/auth.actions';

import { AuthService } from '../auth-core/services/auth.service';
import { User } from '../app-core/models';
import { AppUtils } from '../utils/app.utils';

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
    private fb: FormBuilder,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
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

  submit(form: User) {
    AppUtils.trimFields(form);
    const user: User = new User(form);

    const payload = {
      user: user
    };

    this.store.dispatch(new authActions.RegisterAction(payload));
  }

  goBack() {
    this.store.dispatch(go('/login'));
  }

}
