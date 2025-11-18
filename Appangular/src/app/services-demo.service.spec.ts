import { TestBed } from '@angular/core/testing';

import { ServicesDemoService } from './services-demo.service';

describe('ServicesDemoService', () => {
  let service: ServicesDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
