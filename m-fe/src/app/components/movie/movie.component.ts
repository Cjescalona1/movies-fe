
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviedbService } from '../../../services/moviedb.service'; 

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

  constructor(private router: ActivatedRoute,
    private moviedb: MoviedbService) {

    this.loadingMovie = true;
    this.router.params.subscribe(params => {
      this.moviedb.getMovie(params['id'])
        .subscribe(Movie => {
          this.movie = Movie;
          console.log('test:',this.movie);
          this.loadingMovie = false; 

        }) 
    }) 
  }

 
}

