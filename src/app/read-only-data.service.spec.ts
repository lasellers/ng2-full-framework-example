/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReadOnlyDataService } from './read-only-data.service';

describe('ReadOnlyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadOnlyDataService]
    });
  });

  it('should ...', inject([ReadOnlyDataService], (service: ReadOnlyDataService) => {
    expect(service).toBeTruthy();
  }));
});
