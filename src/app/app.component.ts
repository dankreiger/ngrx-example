import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as viewActions from './actions/view.actions';
import * as CustomersActions from './actions/customers.actions';

import { ordersViewVisible } from './selectors/view.selectors';
import { IAppState } from './reducers';

import { selectCustomersList } from './selectors/customers.selectors';
import { ICustomer } from './typings/customers.typings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  ordersViewVisible$: Observable<boolean>;
  customersListTableHeaders$: Observable<string[]>;
  customersListTableRows$: Observable<string[][]>;

  customersListSubsciption: Subscription;
  public customersList: ICustomer[];

  loading$: Observable<boolean>;

  constructor(private store: Store<IAppState>) {
    this.ordersViewVisible$ = store.pipe(select(ordersViewVisible));
    this.customersListSubsciption = store
      .pipe(select(selectCustomersList))
      .subscribe((customersList: ICustomer[]) => {
        this.customersList = customersList;
        console.table(customersList);
      });
  }

  changeView() {
    this.store.dispatch(viewActions.ChangeView());
  }

  ngOnInit() {
    this.store.dispatch(CustomersActions.GetCustomersList());
  }

  ngOnDestroy() {
    this.customersListSubsciption.unsubscribe();
  }
}
