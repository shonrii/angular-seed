import * as layoutActions from '../actions/layout.actions';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: layoutActions.Actions): State {
  switch (action.type) {
    case layoutActions.CLOSE_SIDENAV:
      return Object.assign({}, state, {
        showSidenav: false
      });

    case layoutActions.OPEN_SIDENAV:
      return Object.assign({}, state, {
        showSidenav: true
      });

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
