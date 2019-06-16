import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppState } from '../reducers';
import { IViewState } from '../typings/view.typings';

export const selectIViewState = createFeatureSelector<IAppState, IViewState>(
  'viewReducer'
);

export const ordersViewVisible = createSelector(
  selectIViewState,
  (state: IViewState) => state.ordersView
);
