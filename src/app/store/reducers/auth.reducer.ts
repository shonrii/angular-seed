import * as authActions from '../actions/auth.actions';
import { User } from '../../app-core/models';

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

export function reducer(state = initialState, action: authActions.Actions): State {
  switch (action.type) {
    case authActions.ActionTypes.AUTHENTICATE:
      return Object.assign({}, state, {
        error: undefined,
        loading: true
      });

    case authActions.ActionTypes.AUTHENTICATED_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loaded: true
      });

    case authActions.ActionTypes.AUTHENTICATED_SUCCESS:
      return Object.assign({}, state, {
        authenticated: action.payload.authenticated,
        loaded: true,
        user: action.payload.user
      });

    case authActions.ActionTypes.REGISTER:
      return Object.assign({}, state, {
        authenticated: state.authenticated || false,
        error: undefined,
        loading: true
      });

    case authActions.ActionTypes.AUTHENTICATION_ERROR:
    case authActions.ActionTypes.REGISTRATION_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loading: false
      });

    case authActions.ActionTypes.AUTHENTICATION_SUCCESS:
    case authActions.ActionTypes.REGISTRATION_SUCCESS:
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

    case authActions.ActionTypes.SIGN_OUT:
    case authActions.ActionTypes.SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        authenticated: false,
        error: undefined,
        user: undefined
      });

    case authActions.ActionTypes.SIGN_OUT_ERROR:
      return Object.assign({}, state, {
        authenticated: true,
        error: action.payload.error.message,
        user: undefined
      });

    default:
      return state;
  }
}

export const isAuthenticated = (state: State) => state.authenticated;
export const isAuthenticatedLoaded = (state: State) => state.loaded;
export const getAuthenticatedUser = (state: State) => state.user;
export const isLoading = (state: State) => state.loading;
export const getAuthenticationError = (state: State) => state.error;
export const getRegistrationError = (state: State) => state.error;
export const getSignOutError = (state: State) => state.error;
