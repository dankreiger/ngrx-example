import { createReducer, on } from '@ngrx/store';

import { ICustomerState } from '../typings/customers.typings';
import {
  GetCustomersListSuccess,
  GetCustomersListFailure,
  GetCustomersList
} from '../actions/customers.actions';

const customersReducerInitialState: ICustomerState = {
  customers: [],
  loading: false,
  error: null
};

const reducer = createReducer(
  customersReducerInitialState,
  on(GetCustomersList, (state: ICustomerState) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(GetCustomersListSuccess, (state: ICustomerState, { payload }) => {
    return {
      ...state,
      loading: false,
      customers: payload.customers
    };
  }),
  on(GetCustomersListFailure, (state: ICustomerState, { payload }) => {
    return {
      ...state,
      loading: false,
      error: payload.error
    };
  })
);

export function customersReducer(state: ICustomerState, action) {
  return reducer(state, action);
}
