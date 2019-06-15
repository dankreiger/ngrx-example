import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as viewActions from './actions/view.actions';
import { AppState } from './reducers';
import { getCurrentView } from './selectors/view.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentView$: Observable<boolean>;
  currentViewSubcription: Subscription;

  constructor(private store: Store<AppState>) {
    this.currentView$ = store.pipe(select(getCurrentView));
  }

  changeView() {
    this.currentViewSubcription = this.currentView$.subscribe(res =>
      console.log(res)
    );
    this.store.dispatch(viewActions.changeView());
  }

  ngOnDestroy() {
    this.currentViewSubcription.unsubscribe();
  }
}
