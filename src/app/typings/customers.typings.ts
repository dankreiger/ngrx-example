import { ActionCreator } from '@ngrx/store';

/* actions */
export enum ECustomersActionTypes {
  GetCustomersList = '[Customer] Get Customer List',
  GetCustomersListSuccess = '[Customer] Get Customer List Success',
  GetCustomersListFailure = '[Customer] Get Customer List Failure'
}

export interface ICustomersActionPayload {
  customers?: ICustomer[];
}

export type CustomersAction = ActionCreator<ECustomersActionTypes, any>;

/* state */
export interface ICustomerState {
  customers: ICustomer[];
  loading: boolean;
  error: any;
}

export interface ICustomer {
  id: string;
  name: string;
  email: string;
}
