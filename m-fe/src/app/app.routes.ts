import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component"; 
import { MovieComponent } from "./components/movie/movie.component"; 
import { SerieComponent } from "./components/serie/serie.component"; 
import { SearchComponent } from "./components/search/search.component"; 

export const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "movie/:id", component: MovieComponent },	 
  { path: "serie/:id", component: SerieComponent },	 
  { path: "search/", component: SearchComponent },	 
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
