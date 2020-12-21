import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { AppState } from '../../app.state';

import { Store } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { AppState } from '../../app.state';
import * as MovieActions from '../../actions/movies.actions';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
 
  movies: Observable<Movie[]>;
 
  constructor(private store: Store<AppState>) { 
    this.movies = store.select('movie');
  }

  delMovie(index){
  	this.store.dispatch(new MovieActions.RemoveMovie(index))
  };

  del(pass){
  	this.delMovie(pass);
  };


}
