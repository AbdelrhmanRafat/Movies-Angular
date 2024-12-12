import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieRoot } from '../core/Interfaces/Movie';
import { TVRoot } from '../core/Interfaces/TvShow';

@Injectable({
  providedIn: 'root'
})
export class MovieTVShowsService {

  constructor(private _HttpClient:HttpClient) { }
  getMovies() : Observable<MovieRoot> {
    return this._HttpClient.get<MovieRoot>("https://api.themoviedb.org/3/trending/movie/week?api_key=52bbcddeda849047525b51d6f8a12361");
  }
  getTvShows() : Observable<TVRoot> {
    return this._HttpClient.get<TVRoot>("https://api.themoviedb.org/3/trending/tv/week?api_key=52bbcddeda849047525b51d6f8a12361");
  }
}
