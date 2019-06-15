import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ViewState, viewReducer } from './view.reducer';

export interface AppState {
  viewReducer: ViewState;
}

export const reducers: ActionReducerMap<AppState> = {
  viewReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
