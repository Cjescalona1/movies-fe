import { Component } from '@angular/core';
import { MoviedbService } from '../services/moviedb.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  title = 'm-fe';  
  principal: any;
  trendMovies: any[] = [];
  trendSeries: any[] = [];
  loadingM: boolean;	
  loadingS: boolean;	
  image: any[];

 constructor(private moviedb: MoviedbService) {
    this.loadingM = true;
    this.loadingS = true;

    this.moviedb.getTrendingMovies()
       .subscribe((data: any) => {
      	this.principal = data[0];
        for (var i = 0; i < 10; i++) {
        this.trendMovies[i] = data[i];
    	this.loadingM = false;
        
        }
	});
		this.moviedb.getTrendingSeries()
	     .subscribe((data2: any) => {
	      	for (var j = 0; j < 10; j++) {
	      	this.trendSeries[j] = data2[j];
    		this.loadingS = false;
	      	
	      	}
		
		});  

  }

}
