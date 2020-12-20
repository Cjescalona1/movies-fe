import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pipe, PipeTransform } from '@angular/core';

// Importo map reactive extentions
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MoviedbService implements PipeTransform{

  private apikey: string = "86bcbacf054462c3ca1fb2bf1fee7564";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  transform(movie: any): any { 
  }

  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;

    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return this.http.jsonp(url, "");
  }

  //trending movies
  getTrendingMovies() {
    return this.getQuery("/trending/movie/day?").pipe(
      map((data: any) => data.results)
    );
  }
  //trending series
   getTrendingSeries() {
    return this.getQuery("/tv/popular?").pipe(
      map((data: any) => data.results)
    );
  }
  //movie top rated 
  getTopRatedMovies() {
    return this.getQuery("/movie/top_rated?").pipe(
      map((data: any) => data.results)
    );
  } 
  //get movie 

  getMovie(id: string) {
    return this.getQueryforMovie(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  } 
  getQueryforMovie(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;

    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return this.http.jsonp(url, "");
  }
  
  //getSerie
  getSerie(id: string) {
    return this.getQueryforMovie(`/tv/${id}`).pipe(
      map((data: any) => data)
    );
  }


 

  
  getDiscoverMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(
      map((data: any) => data.results)
    );
  }

  getBusquedaPeliculas(termino: string) {
    return this.getQuery(
      `/search/movie?query=${termino}&sort_by=popularity.desc`
    ).pipe(map((data: any) => data.results));
  }



}
