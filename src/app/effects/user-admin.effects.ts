import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../http-core/services/user.service';
import { User } from '../app-core/models';

import * as userActions from '../store/actions/user-admin.actions';

@Injectable()
export class UserAdminEffects {

  @Effect()
  public createUser: Observable<Action> = this.actions
    .ofType(userActions.ActionTypes.CREATE_USER)
    .map(toPayload)
    .switchMap(payload => {
      return this.userService.create(payload.user)
        .map(user => new userActions.CreateUserSuccessAction({ user: user }))
        .catch(error => Observable.of(new userActions.CreateUserErrorAction({ error: error })));
    });

  @Effect()
  public updateUser: Observable<Action> = this.actions
    .ofType(userActions.ActionTypes.UPDATE_USER)
    .map(toPayload)
    .switchMap(payload => {
      return this.userService.update(payload.user)
        .map(user => new userActions.UpdateUserSuccessAction({ user: user }))
        .catch(error => Observable.of(new userActions.UpdateUserErrorAction({ error: error })));
    });

  @Effect()
  public deleteUser: Observable<Action> = this.actions
    .ofType(userActions.ActionTypes.DELETE_USER)
    .map(toPayload)
    .switchMap(payload => {
      return this.userService.delete(payload.id)
        .map(user => new userActions.DeleteUserSuccessAction({ id: payload.id }))
        .catch(error => Observable.of(new userActions.DeleteUserErrorAction({ error: error })));
    });

  @Effect()
  public loadUser: Observable<Action> = this.actions
    .ofType(userActions.ActionTypes.LOAD_USER)
    .map(toPayload)
    .switchMap(payload => {
      return this.userService.findUser(payload.id)
        .map(user => new userActions.LoadUserSuccessAction({ user: user }))
        .catch(error => Observable.of(new userActions.LoadUserErrorAction({ error: error })));
    });

  @Effect()
  public loadUsers: Observable<Action> = this.actions
    .ofType(userActions.ActionTypes.LOAD_USERS)
    .switchMap(payload => {
      return this.userService.getUsers()
        .map(userList => new userActions.LoadUsersSuccessAction({ users: userList }))
        .catch(error => Observable.of(new userActions.LoadUsersErrorAction({ error: error })));
    });

  constructor(
    private actions: Actions,
    private userService: UserService
  ) { }
}
