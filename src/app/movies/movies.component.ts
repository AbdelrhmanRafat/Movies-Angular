import { Component, OnInit } from '@angular/core';
import { MovieTVShowsService } from '../Service/movie-tv-shows.service';
import { Movie } from '../core/Interfaces/Movie';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit  {
  Movies : Movie[] = [];
  constructor(private _MovieTVShowsService:MovieTVShowsService){

  }
  ngOnInit(): void {
    this._MovieTVShowsService.getMovies().subscribe({
      next : (res) => {
        this.Movies = res.results;
      },
      error : (err) => {
      console.log(err);
      }
    })
  }
  
}
