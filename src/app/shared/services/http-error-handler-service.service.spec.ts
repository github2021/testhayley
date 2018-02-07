import { TestBed, inject } from '@angular/core/testing';

import { HttpErrorHandlerServiceService } from './http-error-handler-service.service';

describe('HttpErrorHandlerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorHandlerServiceService]
    });
  });

  it('should be created', inject([HttpErrorHandlerServiceService], (service: HttpErrorHandlerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
