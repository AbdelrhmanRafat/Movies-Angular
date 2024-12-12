import { Router, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TVShowsComponent } from './tvshows/tvshows.component';

export const routes: Routes = [
    {path : 'Movies', component:MoviesComponent},
    {path : 'TVShows', component:TVShowsComponent},
    {path : '', redirectTo: 'Movies', pathMatch : 'full'}
];
