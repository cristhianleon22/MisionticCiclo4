import { TestBed } from '@angular/core/testing';

import { AsesorService } from './asesor.service';

describe('AsesorService', () => {
  let service: AsesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
