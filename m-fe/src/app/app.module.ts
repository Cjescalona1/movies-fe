import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { SerieComponent } from './components/serie/serie.component';
import { SearchComponent } from './components/search/search.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/movie.reducer';
import { FavoriteComponent } from './components/favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    SerieComponent,
    SearchComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    IvyCarouselModule,  
    RouterModule.forRoot(ROUTES, { useHash: true }),
    StoreModule.forRoot({
      movie:reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
