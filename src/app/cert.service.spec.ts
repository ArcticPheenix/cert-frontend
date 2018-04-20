import { TestBed, inject } from '@angular/core/testing';

import { CertService } from './cert.service';

describe('CertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CertService]
    });
  });

  it('should be created', inject([CertService], (service: CertService) => {
    expect(service).toBeTruthy();
  }));
});
