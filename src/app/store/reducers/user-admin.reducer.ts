import * as userAdminActions from '../actions/user-admin.actions';
import { User } from '../../app-core/models';

export interface State {
  error?: string;
  loaded: boolean;
  loading: boolean;
  selectedUser?: User;
  userList?: User[];
}

const initialState: State = {
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: userAdminActions.Actions): State {
  switch (action.type) {
    case userAdminActions.ActionTypes.CREATE_USER:
    case userAdminActions.ActionTypes.UPDATE_USER:
    case userAdminActions.ActionTypes.DELETE_USER:
    case userAdminActions.ActionTypes.LOAD_USER:
    case userAdminActions.ActionTypes.LOAD_USERS:
      return Object.assign({}, state, {
        error: undefined,
        loading: true,
        loaded: false
      });

    case userAdminActions.ActionTypes.CREATE_USER_SUCCESS:
    case userAdminActions.ActionTypes.UPDATE_USER_SUCCESS:
    case userAdminActions.ActionTypes.DELETE_USER_SUCCESS:
      return Object.assign({}, state, {
        error: undefined,
        loading: false,
        loaded: true
      });

    case userAdminActions.ActionTypes.LOAD_USER_SUCCESS:
      return Object.assign({}, state, {
        error: undefined,
        loading: false,
        loaded: true,
        selectedUser: action.payload.user
      });

    case userAdminActions.ActionTypes.LOAD_USERS_SUCCESS:
      return Object.assign({}, state, {
        error: undefined,
        loading: false,
        loaded: true,
        userList: action.payload.users
      });

    case userAdminActions.ActionTypes.CREATE_USER_ERROR:
    case userAdminActions.ActionTypes.UPDATE_USER_ERROR:
    case userAdminActions.ActionTypes.DELETE_USER_ERROR:
    case userAdminActions.ActionTypes.LOAD_USER_ERROR:
    case userAdminActions.ActionTypes.LOAD_USERS_ERROR:
      return Object.assign({}, state, {
        error: action.payload.error.message,
        loading: false
      });

    default:
      return state;
  }
}

export const getError = (state: State) => state.error;
export const getSelectedUser = (state: State) => state.selectedUser;
export const getUserList = (state: State) => state.userList;
export const isLoading = (state: State) => state.loading;
export const isLoaded = (state: State) => state.loaded;
