import {
  Component,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as viewActions from './actions/view.actions';

import { ordersViewVisible } from './selectors/view.selectors';
import { IAppState } from './reducers';

import { selectCustomersList } from './selectors/customers.selectors';
import { selectComposedOrdersList } from './selectors/orders.selectors';
import { ICustomer } from './typings/customers.typings';
import { ApiData } from './typings/api.typings';
import { OrdersService } from './services/orders.service';
import { CustomersService } from './services/customers.service';
import { IOrder, IOrderComposed } from './typings/orders.typings';

//!!! TODO controller is too bloated, logic should be abstracted out or use routing instead with resolvers

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  private customersListSubscription: Subscription;
  private ordersViewVisibleSubcription: Subscription;
  private ordersListSubsciption: Subscription;

  public customersList: ICustomer[];
  public ordersList: IOrderComposed[];
  public activeItem: ApiData;
  public ordersViewVisible: boolean;

  loading$: Observable<boolean>;

  constructor(
    private store: Store<IAppState>,
    private cdr: ChangeDetectorRef,
    private customersService: CustomersService,
    private ordersService: OrdersService
  ) {
    this.ordersViewVisibleSubcription = store
      .pipe(select(ordersViewVisible))
      .subscribe((ordersViewVisible: boolean) => {
        this.ordersViewVisible = ordersViewVisible;
      });
    this.customersListSubscription = store
      .pipe(select(selectCustomersList))
      .subscribe((customersList: ICustomer[]) => {
        this.customersList = customersList;
        this.cdr.markForCheck();
        console.table(customersList);
      });

    this.ordersListSubsciption = store
      .pipe(select(selectComposedOrdersList))
      .subscribe((ordersList: IOrderComposed[]) => {
        this.ordersList = ordersList;
        this.cdr.markForCheck();
        console.table(ordersList);
      });
  }

  submitForm() {
    if (!this.ordersViewVisible) {
      this.ordersService.getOrdersByCustomerId(this.activeItem.id);
      this.store.dispatch(viewActions.ChangeView());
    } else {
      this.customersService.getAllCustomers();
      this.store.dispatch(viewActions.ChangeView());
    }
  }

  setActiveItem(activeItem: ApiData) {
    this.activeItem = activeItem;
  }

  ngOnInit() {
    this.customersService.getAllCustomers();
  }

  ngOnDestroy() {
    this.customersListSubscription.unsubscribe();
    this.ordersListSubsciption.unsubscribe();
    this.ordersViewVisibleSubcription.unsubscribe();
  }
}
