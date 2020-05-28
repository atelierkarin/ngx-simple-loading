import { TestBed } from '@angular/core/testing';

import { NgxSimpleLoadingService } from './ngx-simple-loading.service';

describe('NgxSimpleLoadingService', () => {
  let service: NgxSimpleLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSimpleLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
