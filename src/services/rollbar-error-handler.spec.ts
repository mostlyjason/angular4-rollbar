import { TestBed, inject } from '@angular/core/testing';

import { RollbarErrorHandler } from './rollbar-error-handler';

describe('RollbarErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollbarErrorHandler]
    });
  });

  it('should be created', inject([RollbarErrorHandler], (service: RollbarErrorHandler) => {
    expect(service).toBeTruthy();
  }));
});
