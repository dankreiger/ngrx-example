import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ViewState } from '../reducers/view.reducer';
import { AppState } from '../reducers';

export const selectViewState = createFeatureSelector<AppState, ViewState>(
  'viewReducer'
);

export const getCurrentView = createSelector(
  selectViewState,
  (state: ViewState) => state.ordersView
);
