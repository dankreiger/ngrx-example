import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppState } from '../reducers';
import {
  IOrderState,
  IOrder,
  IOrderComposed,
  IOrderItem
} from '../typings/orders.typings';
import * as moment from 'moment';

export const selectOrdersState = createFeatureSelector<IAppState, IOrderState>(
  'ordersReducer'
);

export const selectOrdersList = createSelector(
  selectOrdersState,
  (state: IOrderState) => state.orders
);

export const selectComposedOrdersList = createSelector(
  selectOrdersList,
  (orders: IOrder[]): IOrderComposed[] =>
    orders.map(
      (order: IOrder): IOrderComposed => {
        const {
          id,
          recipient,
          created_at,
          items,
          delivery,
          charge_customer
        } = order;

        const total_price = items.reduce((acc: string, item: IOrderItem) => {
          const { amount, currency } = item.total_price;
          return `${parseFloat(acc) + parseFloat(amount)} ${currency}`;
        }, `0`);

        const order_items = items
          .map(({ name }) => name)
          .join(', ')

        return {
          id,
          name: recipient.name,
          email: recipient.email,
          total_price,
          order_date: moment(created_at).format('MMMM Do YYYY'),
          items: order_items,
          delivery_details: `${delivery.courier}: ${delivery.method}`
        };
      }
    )
);
