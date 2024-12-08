import { TestBed } from '@angular/core/testing';

import { Gym4vService } from './gym4v.service';

describe('Gym4vService', () => {
  let service: Gym4vService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gym4vService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
