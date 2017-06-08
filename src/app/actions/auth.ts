import { Action } from '@ngrx/store';
import { User } from '../core/models';

export const ActionTypes = {
  AUTHENTICATE: '[Auth] Authenticate',
  AUTHENTICATION_ERROR: '[Auth] Authentication Error',
  AUTHENTICATION_SUCCESS: '[Auth] Authentication Success',
  AUTHENTICATED: '[Auth] Authenticated',
  AUTHENTICATED_ERROR: '[Auth] Authenticated Error',
  AUTHENTICATED_SUCCESS: '[Auth] Authenticated Success',
  REGISTER: '[Auth] Register',
  REGISTRATION_ERROR: '[Auth] Registration Error',
  REGISTRATION_SUCCESS: '[Auth] Registration Success',
  SIGN_OUT: '[Auth] Sign Out',
  SIGN_OUT_ERROR: '[Auth] Sign Out Error',
  SIGN_OUT_SUCCESS: '[Auth] Sign Out Success',
};

export class AuthenticateAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATE;
  constructor(public payload: {email: string, password: string}) {}
}

export class AuthenticatedAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATED;
  constructor(public payload?: {token?: string}) {}
}

export class AuthenticatedSuccessAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATED_SUCCESS;
  constructor(public payload: {authenticated: boolean, user: User}) {}
}

export class AuthenticatedErrorAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATED_ERROR;
  constructor(public payload?: any) {}
}

export class AuthenticationErrorAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATION_ERROR;
  constructor(public payload?: any) {}
}

export class AuthenticationSuccessAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATION_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export class SignOutAction implements Action {
  readonly type: string = ActionTypes.SIGN_OUT;
  constructor(public payload?: any) {}
}

export class SignOutErrorAction implements Action {
  readonly type: string = ActionTypes.SIGN_OUT_SUCCESS;
  constructor(public payload?: any) {}
}

export class SignOutSuccessAction implements Action {
  readonly type: string = ActionTypes.SIGN_OUT_SUCCESS;
  constructor(public payload?: any) {}
}

export class RegisterAction implements Action {
  readonly type: string = ActionTypes.REGISTER;
  constructor(public payload: { user: User }) {}
}

export class RegistrationErrorAction implements Action {
  readonly type: string = ActionTypes.REGISTRATION_ERROR;
  constructor(public payload?: any) {}
}

export class RegistrationSuccessAction implements Action {
  readonly type: string = ActionTypes.REGISTRATION_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export type Actions
  =
  AuthenticateAction
  | AuthenticatedAction
  | AuthenticatedErrorAction
  | AuthenticatedSuccessAction
  | AuthenticationErrorAction
  | AuthenticationSuccessAction
  | RegisterAction
  | RegistrationErrorAction
  | RegistrationSuccessAction;
