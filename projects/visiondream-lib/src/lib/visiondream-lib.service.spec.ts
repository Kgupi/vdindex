import { TestBed } from '@angular/core/testing';

import { VisiondreamLibService } from './visiondream-lib.service';

describe('VisiondreamLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisiondreamLibService = TestBed.get(VisiondreamLibService);
    expect(service).toBeTruthy();
  });
});
