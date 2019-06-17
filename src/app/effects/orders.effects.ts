import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';

import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs';
import {
  OrdersAction,
  EOrdersActionTypes,
  IOrder
} from '../typings/orders.typings';
import * as OrdersActions from '../actions/orders.actions';

@Injectable()
export class OrdersEffects {
  getCustomerList$ = createEffect(() =>
    this.actions$.pipe(
      ofType<OrdersAction>(EOrdersActionTypes.GetOrdersList),
      exhaustMap(({ payload }) => {
        const customerId = `/${payload.customerId}` || '';
        const url = `orders${customerId}`;

        return this.apiService.get(url).pipe(
          map((orders: IOrder[]) =>
            OrdersActions.GetOrdersListSuccess({
              payload: { orders }
            })
          ),
          catchError(error =>
            of(OrdersActions.GetOrdersListFailure({ payload: { error } }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
