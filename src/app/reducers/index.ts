import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from './../../environments/environment';

import { viewReducer } from './view.reducer';
import { customersReducer } from './customers.reducer';
import { ordersReducer } from './orders.reducer';

import { IViewState } from '../typings/view.typings';
import { ICustomerState } from '../typings/customers.typings';
import { IOrderState } from '../typings/orders.typings';

export interface IAppState {
  viewReducer: IViewState;
  customersReducer: ICustomerState;
  ordersReducer: IOrderState;
}

export const appInitialState = {
  viewReducer,
  customersReducer,
  ordersReducer
};

export const reducers: ActionReducerMap<IAppState> = appInitialState;

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? []
  : [];
