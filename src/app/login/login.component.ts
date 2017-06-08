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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  error$: Observable<string>;
  loading$: Observable<boolean>;

  form: FormGroup;
  private isAlive = true;

  constructor(
    public authService: AuthService,
    public router: Router,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.error$ = this.store.select(fromRoot.getAuthenticationError);
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

  register() {
    this.store.dispatch(go('/register'));
  }

  submit(form: any) {
    this.store.dispatch(new auth.AuthenticateAction(form));
  }
}
