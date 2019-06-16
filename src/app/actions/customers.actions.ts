import { createAction, props } from '@ngrx/store';
import {
  ECustomersActionTypes,
  ICustomersActionPayload
} from '../typings/customers.typings';

export const GetCustomersList = createAction(
  ECustomersActionTypes.GetCustomersList
);

export const GetCustomersListSuccess = createAction(
  ECustomersActionTypes.GetCustomersListSuccess,
  props<{ payload: ICustomersActionPayload }>()
);

export const GetCustomersListFailure = createAction(
  ECustomersActionTypes.GetCustomersListFailure,
  props<{ payload: { error: any } }>()
);
