import { TestBed } from '@angular/core/testing';

import { DwAuthorizationService } from './dw-authorization.service';

describe('DwAuthorizationService', () => {
  let service: DwAuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DwAuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
