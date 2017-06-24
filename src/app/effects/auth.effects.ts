import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth-core/services/auth.service';
import { UserService } from '../http-core/services/user.service';
import { User } from '../app-core/models';

import * as authActions from '../store/actions/auth.actions';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 * The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * Documentation on `toPayload` can be found here:
 * https://github.com/ngrx/effects/blob/master/docs/api.md#topayload
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class AuthEffects {

  @Effect()
  public authenticate: Observable<Action> = this.actions
    .ofType(authActions.ActionTypes.AUTHENTICATE)
    .debounceTime(500)
    .map(toPayload)
    .switchMap(payload => {
      console.log('authenticating...', payload);
      return this.authService.authenticate(payload.email, payload.password)
        .map(user => new authActions.AuthenticationSuccessAction({ user: user }))
        .catch(error => Observable.of(new authActions.AuthenticationErrorAction({ error: error })));
    });

  @Effect()
  public authenticated: Observable<Action> = this.actions
    .ofType(authActions.ActionTypes.AUTHENTICATED)
    .map(toPayload)
    .switchMap(payload => {
      return this.authService.isAuthenticatedUser()
        .map(user => new authActions.AuthenticatedSuccessAction({ authenticated: (user !== null), user: user }))
        .catch(error => Observable.of(new authActions.AuthenticatedErrorAction({ error: error })));
    });

  @Effect()
  public createUser: Observable<Action> = this.actions
    .ofType(authActions.ActionTypes.REGISTER)
    .debounceTime(500)
    .map(toPayload)
    .switchMap(payload => {
      return this.userService.create(payload.user)
        .map(user => new authActions.RegistrationSuccessAction({ user: user }))
        .catch(error => Observable.of(new authActions.RegistrationErrorAction({ error: error })));
    });

  @Effect()
  public signOut: Observable<Action> = this.actions
    .ofType(authActions.ActionTypes.SIGN_OUT)
    .map(toPayload)
    .switchMap(payload => {
      console.log('signing out...');
      return this.authService.signOut()
        .map(value => new authActions.SignOutSuccessAction())
        .catch(error => Observable.of(new authActions.SignOutErrorAction({ error: error })));
    });

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private userService: UserService
  ) { }
}
