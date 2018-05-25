import { TestBed, inject } from '@angular/core/testing';

import { CommanService } from './comman.service';

describe('CommanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommanService]
    });
  });

  it('should be created', inject([CommanService], (service: CommanService) => {
    expect(service).toBeTruthy();
  }));
});
