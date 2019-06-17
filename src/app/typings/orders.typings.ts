import { ActionCreator } from '@ngrx/store';

/*actions */
export enum EOrdersActionTypes {
  GetOrdersList = '[Order] Get Orders List',
  GetOrdersListSuccess = '[Order] Get Orders List Success',
  GetOrdersListFailure = '[Order] Get Orders List Failure'
}
export type OrdersAction = ActionCreator<EOrdersActionTypes, any>;
export interface IOrdersActionPayload {
  customerId?: string;
  orders?: IOrder[];
}

/* state */
export interface IOrderState {
  orders: IOrder[];
  selectedCustomerId: IOrder;
  loading: boolean;
  error: any;
}

export interface IOrderRecipient {
  name: string;
  email: string;
}

export interface IOrderTotalPrice {
  currency: string;
  amount: string;
}

export interface IOrderItem {
  id: string;
  name: string;
  quantity: number;
  total_price: IOrderTotalPrice;
}

export interface IOrderDelivery {
  courier: string;
  method: string;
}

export interface IChargeCustomer {
  currency: string;
  total_price: string;
}

export interface IOrder {
  id: string;
  recipient: IOrderRecipient;
  created_at: Date;
  items: IOrderItem[];
  delivery: IOrderDelivery;
  charge_customer: IChargeCustomer;
}

export interface IOrderComposed {
  id: string;
  name: string;
  email: string;
  total_price: string;
  order_date: string;
  items: string;
  delivery_details: string;
}
