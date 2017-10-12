import {ErrorHandler, Injectable, Injector} from '@angular/core';
import * as Rollbar from 'rollbar';


@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  rollbar: any;
  constructor(private injector: Injector) {
    this.rollbar = injector.get(Rollbar);
  }

  handleError(err: any ): void {
    console.log(err);
    this.rollbar.error(err.originalError || err);
  }
}
