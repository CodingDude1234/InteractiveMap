import { TestBed } from '@angular/core/testing';

import { ApiInfoService } from './api-info.service';

describe('ApiInfoService', () => {
  let service: ApiInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
