import { createReducer, on, Action } from '@ngrx/store';
import { ChangeView } from './../actions/view.actions';
import { IViewState } from '../typings/view.typings';

export const viewReducerInitialState: IViewState = {
  ordersView: false
};

const reducer = createReducer(
  viewReducerInitialState,
  on(ChangeView, (state: IViewState) => {
    return {
      ...state,
      ordersView: !state.ordersView
    };
  })
);

export function viewReducer(state: IViewState, action: Action) {
  return reducer(state, action);
}
