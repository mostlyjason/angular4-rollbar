import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import * as Rollbar from 'rollbar';
import {RollbarErrorHandler, rollbarFactory, RollbarService} from '../services/rollbar-error-handler';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    {
      provide: RollbarService,
      useFactory: rollbarFactory
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
