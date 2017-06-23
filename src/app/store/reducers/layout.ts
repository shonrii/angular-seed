import * as layout from '../actions/layout';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.CLOSE_SIDENAV:
      return Object.assign({}, state, {
        showSidenav: false
      });

    case layout.OPEN_SIDENAV:
      return Object.assign({}, state, {
        showSidenav: true
      });

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
