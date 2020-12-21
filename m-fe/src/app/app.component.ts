import { Component } from '@angular/core';
import { MoviedbService } from '../services/moviedb.service';  

import { Store } from '@ngrx/store'; 
import { AppState } from './app.state';
import * as MovieActions from './actions/movies.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {

	movies: [];

 
  constructor(private store: Store<AppState>) {  
  	}

  	ngOnInit(): void { 
    let aux;
    if (JSON.parse(localStorage.getItem('favorite')) != null){

    aux =  JSON.parse(localStorage.getItem('favorite')); 
    aux.map((i)=>{  this.addMovie(i.id, i.name,i.year,i.poster)  });
  	}
    console.log('OnInit',aux);
  }

  addMovie(id, name, year, poster){
  this.store.dispatch(new MovieActions.AddMovie({id:id, name:name, year:year, poster:poster}))
  }
  
  addFav(pass){ 
    this.addMovie(pass.id,pass.title,pass.release_date, pass.poster_path)
  } 

}

