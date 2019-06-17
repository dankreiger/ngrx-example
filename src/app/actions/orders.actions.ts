import { createAction, props } from '@ngrx/store';
import {
  EOrdersActionTypes,
  IOrdersActionPayload
} from '../typings/orders.typings';

export const GetOrdersList = createAction(
  EOrdersActionTypes.GetOrdersList,
  props<{ payload: IOrdersActionPayload }>()
);

export const GetOrdersListSuccess = createAction(
  EOrdersActionTypes.GetOrdersListSuccess,
  props<{ payload: IOrdersActionPayload }>()
);

export const GetOrdersListFailure = createAction(
  EOrdersActionTypes.GetOrdersListFailure,
  props<{ payload: { error: any } }>()
);
