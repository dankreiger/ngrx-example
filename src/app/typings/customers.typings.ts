import { EntityState } from '@ngrx/entity';
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

//!! TODO check this type
export type CustomersAction = ActionCreator<ECustomersActionTypes, any>;

/* state */
export interface ICustomerState extends EntityState<ICustomer> {
  customers: ICustomer[];
  selectedCustomer: ICustomer;
  loading: boolean;
  error: any;
}

// export interface ICustomerState {
//   customers: ICustomer[];
//   selectedCustomer: ICustomer;
//   loading: boolean;
//   error: any;
// }

export interface ICustomer {
  id: string;
  name: string;
  email: string;
}
