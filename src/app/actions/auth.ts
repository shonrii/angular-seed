import { Action } from '@ngrx/store';

export const LOG_IN =   '[Auth] Log In';
export const LOG_OUT =  '[Auth] Log Out';

export class LogInAction implements Action {
  readonly type = LOG_IN;
}

export class LogOutAction implements Action {
  readonly type = LOG_OUT;
}

export type Actions
  = LogInAction
  | LogOutAction;
