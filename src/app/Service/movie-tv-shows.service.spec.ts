import { TestBed } from '@angular/core/testing';

import { MovieTVShowsService } from './movie-tv-shows.service';

describe('MovieTVShowsService', () => {
  let service: MovieTVShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTVShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
