import { TestBed } from '@angular/core/testing';

import { RepositoryListService } from './repository-list.service';

describe('RepositoryListService', () => {
  let service: RepositoryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
