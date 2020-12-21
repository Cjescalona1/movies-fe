import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviedbService } from '../../../services/moviedb.service';
import { Router } from '@angular/router'; 
 

import { Store } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { AppState } from '../../app.state';
import * as MovieActions from '../../actions/movies.actions';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
 
export class SerieComponent {

  Serie: any = {}; 
  et:string = localStorage.getItem('element-type');
  loadingSerie: boolean;

  constructor(
    private store: Store<AppState>, 
    private router: ActivatedRoute,
    private moviedb: MoviedbService,
    private rout: Router) {

    this.loadingSerie = true;
    this.router.params.subscribe(params => { 
      this.moviedb.getSerie(params['id'])
        .subscribe(Serie => {
          this.Serie = Serie; 
          console.log('test',this.Serie);
          this.loadingSerie = false;
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
    alert("Agregado a Favoritos");
    this.addMovie(pass.id,pass.name,pass.first_air_date, pass.poster_path)
  } 
}

