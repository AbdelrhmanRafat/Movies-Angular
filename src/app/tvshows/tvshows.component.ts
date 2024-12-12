import { Component, OnInit } from '@angular/core';
import { MovieTVShowsService } from '../Service/movie-tv-shows.service';
import { TvShow } from '../core/Interfaces/TvShow';

@Component({
  selector: 'app-tvshows',
  standalone: true,
  imports: [],
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.css'
})
export class TVShowsComponent implements OnInit {
   tvShows : TvShow[] = [];
   constructor(private _MovieTVShowsService:MovieTVShowsService){

   }
   ngOnInit(): void {
     this._MovieTVShowsService.getTvShows().subscribe({
      next : (res) => {
        this.tvShows = res.results;
      },
      error : (err) => {
        console.log(err)
      }
     })
   }

}
