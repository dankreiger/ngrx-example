import { Injectable } from '@angular/core';
import * as OrdersActions from '../actions/orders.actions';
import { IAppState } from '../reducers';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  constructor(private store: Store<IAppState>) {}

  getOrdersByCustomerId(customerId: string) {
    this.store.dispatch(
      OrdersActions.GetOrdersList({
        payload: { customerId }
      })
    );
  }
}
