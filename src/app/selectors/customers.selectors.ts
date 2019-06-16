import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppState } from '../reducers';
import { ICustomerState, ICustomer } from '../typings/customers.typings';

export const selectCustomersState = createFeatureSelector<
  IAppState,
  ICustomerState
>('customersReducer');

export const selectCustomersList = createSelector(
  selectCustomersState,
  (state: ICustomerState) => state.customers
);
