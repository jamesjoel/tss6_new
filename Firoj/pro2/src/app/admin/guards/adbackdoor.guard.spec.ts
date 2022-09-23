import { TestBed } from '@angular/core/testing';

import { AdbackdoorGuard } from './adbackdoor.guard';

describe('AdbackdoorGuard', () => {
  let guard: AdbackdoorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdbackdoorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
