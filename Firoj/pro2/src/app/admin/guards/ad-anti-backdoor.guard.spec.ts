import { TestBed } from '@angular/core/testing';

import { AdAntiBackdoorGuard } from './ad-anti-backdoor.guard';

describe('AdAntiBackdoorGuard', () => {
  let guard: AdAntiBackdoorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdAntiBackdoorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
