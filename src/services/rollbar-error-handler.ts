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
  constructor(private injector: Injector) { }

  handleError(err: any ): void {

    console.log(err);

    // workaround for https://github.com/rollbar/rollbar.js/issues/439
    if (err.message === 'Maximum call stack size exceeded') {
      // console.log('range error');
      return;
    }
    const rollbar = this.injector.get(RollbarService);
    rollbar.error(err.originalError || err);
  }
}

export function rollbarFactory() {
  return new Rollbar(rollbarConfig).configure(rollbarConfig);
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');
