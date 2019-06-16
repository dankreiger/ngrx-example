import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { ICustomer, ICustomerState } from '../typings/customers.typings';
import {
  GetCustomersListSuccess,
  GetCustomersListFailure
} from '../actions/customers.actions';

export const customerAdapter: EntityAdapter<ICustomer> = createEntityAdapter();

const customersReducerInitialState: ICustomerState = customerAdapter.getInitialState(
  {
    customers: [],
    selectedCustomer: null,
    loading: false,
    error: null
  }
);

// export const customerReducerInitialState: ICustomerState = {
//   customers: [],
//   selectedCustomer: null,
//   loading: false,
//   error: null
// };

//!!! TODO: remove adapter if it isn't necessary here
const reducer = createReducer(
  customersReducerInitialState,
  on(GetCustomersListSuccess, (state: ICustomerState, { payload }) => {
    return {
      ...customerAdapter.addAll(payload.customers, state),
      // ...state,
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
