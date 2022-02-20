import { TestBed } from '@angular/core/testing';

import { DwPaginationService } from './dw-pagination.service';

describe('DwPaginationService', () => {
  let service: DwPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DwPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
