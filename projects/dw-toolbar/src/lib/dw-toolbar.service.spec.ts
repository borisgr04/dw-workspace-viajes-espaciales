import { TestBed } from '@angular/core/testing';

import { DwToolbarService } from './dw-toolbar.service';

describe('DwToolbarService', () => {
  let service: DwToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DwToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
