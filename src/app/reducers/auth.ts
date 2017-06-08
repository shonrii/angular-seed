import * as auth from '../actions/auth';
import { User } from '../core/models';

export interface State {
  authenticated: boolean;
  error?: string;
  loaded: boolean;
  loading: boolean;
  user?: User;
}

const initialState: State = {
  authenticated: null,
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.ActionTypes.AUTHENTICATE:
      return Object.assign({}, state, {
        error: undefined,
        loading: true
      });

    case auth.ActionTypes.AUTHENTICATED_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loaded: true
      });

    case auth.ActionTypes.AUTHENTICATED_SUCCESS:
      return Object.assign({}, state, {
        authenticated: action.payload.authenticated,
        loaded: true,
        user: action.payload.user
      });

    case auth.ActionTypes.AUTHENTICATION_ERROR:
    case auth.ActionTypes.REGISTRATION_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loading: false
      });

    case auth.ActionTypes.AUTHENTICATION_SUCCESS:
    case auth.ActionTypes.REGISTRATION_SUCCESS:
      const user: User = action.payload.user;

      // verify user is not null
      if (user === null) {
        return state;
      }

      return Object.assign({}, state, {
        authenticated: true,
        error: undefined,
        loading: false,
        user: user
      });

    case auth.ActionTypes.SIGN_OUT_ERROR:
      return Object.assign({}, state, {
        authenticated: true,
        error: action.payload.error.message,
        user: undefined
      });

    case auth.ActionTypes.SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        authenticated: false,
        error: undefined,
        user: undefined
      });

    case auth.ActionTypes.REGISTER:
      return Object.assign({}, state, {
        authenticated: false,
        error: undefined,
        loading: true
      });

    default:
      return state;
  }
}

export const isAuthenticated = (state: State) => state.authenticated;
export const isAuthenticatedLoaded = (state: State) => state.loaded;
export const getAuthenticatedUser = (state: State) => state.user;
export const getAuthenticationError = (state: State) => state.error;
export const isLoading = (state: State) => state.loading;
export const getSignOutError = (state: State) => state.error;
export const getRegistrationError = (state: State) => state.error;
