import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviedbService } from '../../../services/moviedb.service'; 

import { Store } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { AppState } from '../../app.state';
import * as MovieActions from '../../actions/movies.actions';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
 

  movieG: any = [];
  movie: any = {}; 
  et:string = localStorage.getItem('element-type');
  loadingMovie: boolean;
 
  constructor(
    private store: Store<AppState>, 
    private router: ActivatedRoute,
    private moviedb: MoviedbService
    ) {
    this.loadingMovie = true;
    this.router.params.subscribe(params => {
    this.moviedb.getMovie(params['id'])
        .subscribe(Movie => {
          this.movie = Movie;
          
          this.loadingMovie = false; 

        }) 
    }) 
  }


  addMovie(id, name, year, poster){
  this.store.dispatch(new MovieActions.AddMovie({id:id, name:name, year:year, poster:poster}))
  
  if (localStorage.getItem('favorite') == undefined) {
    let aux = [];
    aux.push({id:id, name:name, year:year, poster:poster});
    localStorage.setItem('favorite',JSON.stringify(aux));
  }else{
    let aux2 = JSON.parse(localStorage.getItem('favorite'));
    localStorage.removeItem('favorite');
    aux2.push({id:id, name:name, year:year, poster:poster});
    localStorage.setItem('favorite',JSON.stringify(aux2));
    console.log('defined ', aux2);
    }
  }
  
  addFav(pass){ 
    this.addMovie(pass.id,pass.title,pass.release_date, pass.poster_path)
  } 
}

