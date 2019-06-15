import { createReducer, on } from '@ngrx/store';
import { changeView, ViewAction } from '../actions/view.actions';

/**
 * @description declarations
 */

export interface ViewState {
  ordersView: boolean;
}

export const viewReducerInitialState: ViewState = {
  ordersView: false
};

/**
 * @description reducer
 */
const reducer = createReducer(
  viewReducerInitialState,
  on(changeView, (state: ViewState) => {
    return {
      ...state,
      ordersView: !state.ordersView
    };
  })
);

export function viewReducer(state: ViewState | undefined, action: ViewAction) {
  return reducer(state, action);
}
