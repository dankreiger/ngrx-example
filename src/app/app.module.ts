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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
