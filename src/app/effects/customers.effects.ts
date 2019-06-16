import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import {
  ECustomersActionTypes,
  CustomersAction,
  ICustomer
} from '../typings/customers.typings';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import * as CustomersActions from '../actions/customers.actions';
import { of } from 'rxjs';

@Injectable()
export class CustomersEffects {
  getCustomerList$ = createEffect(() =>
    this.actions$.pipe(
      ofType<CustomersAction>(ECustomersActionTypes.GetCustomersList),
      exhaustMap(() =>
        this.apiService.get('customers').pipe(
          map((customers: ICustomer[]) =>
            CustomersActions.GetCustomersListSuccess({
              payload: { customers }
            })
          ),
          catchError(error =>
            of(CustomersActions.GetCustomersListFailure({ payload: { error } }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
