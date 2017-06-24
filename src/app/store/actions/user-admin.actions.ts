import { Action } from '@ngrx/store';
import { User } from '../../app-core/models';

export const ActionTypes = {
  CREATE_USER: '[Users] Create User',
  CREATE_USER_SUCCESS: '[Users] Create User Success',
  CREATE_USER_ERROR: '[Users] Create User Success',
  UPDATE_USER: '[Users] Update User',
  UPDATE_USER_SUCCESS: '[Users] Create User Success',
  UPDATE_USER_ERROR: '[Users] Create User Success',
  DELETE_USER: '[Users] Delete User',
  DELETE_USER_SUCCESS: '[Users] Create User Success',
  DELETE_USER_ERROR: '[Users] Create User Success',
  LOAD_USER: '[Users] Load User',
  LOAD_USER_SUCCESS: '[Users] Load User Success',
  LOAD_USER_ERROR: '[Users] Load User Error',
  LOAD_USERS: '[Users] Load Users',
  LOAD_USERS_SUCCESS: '[Users] Load Users Success',
  LOAD_USERS_ERROR: '[Users] Load Users Error',
};

export class CreateUserAction implements Action {
  readonly type = ActionTypes.CREATE_USER;
  constructor(public payload: { user: User }) { };
}

export class CreateUserSuccessAction implements Action {
  readonly type = ActionTypes.CREATE_USER_SUCCESS;
  constructor(public payload: { user: User }) { };
}

export class CreateUserErrorAction implements Action {
  readonly type = ActionTypes.CREATE_USER_ERROR;
  constructor(public payload?: any) { };
}

export class UpdateUserAction implements Action {
  readonly type = ActionTypes.UPDATE_USER;
  constructor(public payload: { user: User }) { };
}

export class UpdateUserSuccessAction implements Action {
  readonly type = ActionTypes.UPDATE_USER_SUCCESS;
  constructor(public payload: { user: User }) { };
}

export class UpdateUserErrorAction implements Action {
  readonly type = ActionTypes.UPDATE_USER_ERROR;
  constructor(public payload?: any) { };
}

export class DeleteUserAction implements Action {
  readonly type = ActionTypes.DELETE_USER;
  constructor(public payload: { id: number }) { };
}

export class DeleteUserSuccessAction implements Action {
  readonly type = ActionTypes.DELETE_USER_SUCCESS;
  constructor(public payload?: any) { };
}

export class DeleteUserErrorAction implements Action {
  readonly type = ActionTypes.DELETE_USER_ERROR;
  constructor(public payload?: any) { };
}

export class LoadUserAction implements Action {
  readonly type = ActionTypes.LOAD_USER;
  constructor(public payload: { id: number }) { };
}

export class LoadUserSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_USER_SUCCESS;
  constructor(public payload: { user: User }) { };
}

export class LoadUserErrorAction implements Action {
  readonly type = ActionTypes.LOAD_USER_ERROR;
  constructor(public payload?: any) { };
}

export class LoadUsersAction implements Action {
  readonly type = ActionTypes.LOAD_USERS;
  constructor(public payload?: any) { };
}

export class LoadUsersSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_USERS_SUCCESS;
  constructor(public payload: { users: User[] }) { };
}

export class LoadUsersErrorAction implements Action {
  readonly type = ActionTypes.LOAD_USERS_ERROR;
  constructor(public payload?: any) { };
}

export type Actions
  = CreateUserAction
  | CreateUserSuccessAction
  | CreateUserErrorAction
  | UpdateUserAction
  | UpdateUserSuccessAction
  | UpdateUserErrorAction
  | DeleteUserAction
  | DeleteUserSuccessAction
  | DeleteUserErrorAction
  | LoadUserAction
  | LoadUserSuccessAction
  | LoadUserErrorAction
  | LoadUsersAction
  | LoadUsersSuccessAction
  | LoadUsersErrorAction;
