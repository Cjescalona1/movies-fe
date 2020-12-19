import { Component } from '@angular/core';
import { MoviedbService } from '../services/moviedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//https://api.themoviedb.org/3/movie/550?api_key=86bcbacf054462c3ca1fb2bf1fee7564

export class AppComponent {
  title = 'm-fe';  
  principal: any;
  trendMovies: any[] = [];
  loading: boolean;


  constructor(private moviedb: MoviedbService) {

    this.loading = true;

    this.moviedb.getTrendingMovies()
      .subscribe((data: any) => {
        this.principal= data[0];
        this.trendMovies= data;
        this.loading = false;
        console.log(this.principal);
      });
	}
}
