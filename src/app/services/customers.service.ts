import { Injectable } from '@angular/core';
import * as CustomersActions from '../actions/customers.actions';
import { IAppState } from '../reducers';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class CustomersService {
  constructor(private store: Store<IAppState>) {}

  getAllCustomers() {
    this.store.dispatch(CustomersActions.GetCustomersList());
  }
}
