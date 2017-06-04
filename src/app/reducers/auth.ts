import * as auth from '../actions/auth';

export interface State {
  isLoggedIn: boolean;
}

const initialState: State = {
  isLoggedIn: false,
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.LOG_OUT:
      sessionStorage.removeItem('seed-app-logged-in');
      return {
        isLoggedIn: false
      };

    case auth.LOG_IN:
      sessionStorage.setItem('seed-app-logged-in', 'true');
      return {
        isLoggedIn: true
      };

    default:
      return state;
  }
}

export const isLoggedIn = (state: State) => state.isLoggedIn;
