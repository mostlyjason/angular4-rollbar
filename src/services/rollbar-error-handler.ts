import {ErrorHandler, Injectable, InjectionToken, Injector} from '@angular/core';
import * as Rollbar from 'rollbar';

const rollbarConfig = {
  accessToken: '7ed515d4e6db445ba1154c4554319c9a',
  captureUncaught: true,
  captureUnhandledRejections: true,
  enabled: true,
  environment: 'dev'
};


@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  rollbar: any;
  constructor(private injector: Injector) {
    this.rollbar = injector.get(RollbarService);
  }

  handleError(err: any ): void {
    console.log(err);
    this.rollbar.error(err.originalError || err);
  }
}

// workarround https://github.com/rollbar/rollbar.js/issues/402
export function rollbarFactory() {
  return new Rollbar(rollbarConfig).configure(rollbarConfig);
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');
