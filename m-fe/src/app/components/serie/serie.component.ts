import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviedbService } from '../../../services/moviedb.service';
import { Router } from '@angular/router'; 
 
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
 
export class SerieComponent {

  Serie: any = {}; 
  et:string = localStorage.getItem('element-type');
  loadingSerie: boolean;

  constructor(private router: ActivatedRoute,
    private moviedb: MoviedbService,
    private rout: Router) {

    this.loadingSerie = true;
    this.router.params.subscribe(params => { 
      this.moviedb.getSerie(params['id'])
        .subscribe(Serie => {
          this.Serie = Serie; 
          this.loadingSerie = false;
        }) 
    })

  } 
}

