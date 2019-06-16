import { ICustomer } from './customers.typings';
import { IOrder } from './order.typings';

export type ApiPath = 'customers' | 'orders';

export type ApiData = IOrder | ICustomer;
