import { createReducer, on } from '@ngrx/store';
import { IOrderState } from '../typings/orders.typings';
import {
  GetOrdersListFailure,
  GetOrdersListSuccess,
  GetOrdersList
} from '../actions/orders.actions';

export const ordersReducerInitialState: IOrderState = {
  orders: [],
  selectedCustomerId: null,
  loading: false,
  error: null
};

const reducer = createReducer(
  ordersReducerInitialState,
  on(GetOrdersList, (state: IOrderState) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(GetOrdersListSuccess, (state: IOrderState, { payload }) => {
    return {
      ...state,
      loading: false,
      orders: payload.orders
    };
  }),
  on(GetOrdersListFailure, (state: IOrderState, { payload }) => {
    return {
      ...state,
      loading: false,
      error: payload.error
    };
  })
);

export function ordersReducer(state: IOrderState, action) {
  return reducer(state, action);
}
