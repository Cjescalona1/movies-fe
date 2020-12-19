import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component"; 
import { MovieComponent } from "./components/movie/movie.component"; 

export const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "movie/:id", component: MovieComponent },	 
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
