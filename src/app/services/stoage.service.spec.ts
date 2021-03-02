import { TestBed } from '@angular/core/testing';

import { StoageService } from './stoage.service';

describe('StoageService', () => {
  let service: StoageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
