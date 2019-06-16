/* angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* ngrx store */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/* reducers */
import { reducers, metaReducers } from './reducers';

/* enviroment */
import { environment } from 'src/environments/environment';

/* components */
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { CustomersEffects } from './effects/customers.effects';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTablePipe } from './components/data-table/data-table.pipe';

@NgModule({
  declarations: [AppComponent, DataTableComponent, DataTablePipe],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([CustomersEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
