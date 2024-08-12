import { TestBed } from '@angular/core/testing';

import { AdminordersService } from './adminorders.service';

describe('AdminordersService', () => {
  let service: AdminordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
