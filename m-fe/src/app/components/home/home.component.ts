import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../../services/moviedb.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }

  title = 'm-fe';  
  principal: any;
  trendMovies: any[] = [];
  topMovies: any[] = [];
  gen: any[] = [];
  trendSeries: any[] = [];
  loadingM: boolean;	
  loadingS: boolean;	
  loadingT: boolean;	
  image: any[];

 constructor(
  private moviedb: MoviedbService,
    private rout: Router
  ) {
  
    this.loadingM = true;
    this.loadingS = true;
    this.loadingT = true;
 

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
		this.moviedb.getTopRatedMovies()
	     .subscribe((data3: any) => {
	      	for (var k = 0; k < 4; k++) {
	      	this.topMovies[k] = data3[k];
    		this.loadingT = false; 
	      	}
		
		});  

  }

select(argument,type) { 
  console.log('test',argument);

  localStorage.setItem('element', JSON.stringify(argument));
  localStorage.setItem('element-type', JSON.stringify(type));
  if (type == 'm') {
  this.rout.navigate(['/movie/'+argument.id]);
  }
  if (type == 's') {
  this.rout.navigate(['/serie/'+argument.id]);
  }
  } 

}
