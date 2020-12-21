import { Action } from '@ngrx/store'
import { Movie } from './../models/movie.model'
import * as MovieActions from './../actions/movies.actions'
 
let val: any[] = localStorage.getItem('favorite')  ; 

const initialState: Movie  = {}; 
export function reducer(state: Movie[] = [] , action: MovieActions.Actions) {

    switch(action.type) {
        case MovieActions.ADD_MOVIE:
            return [...state, action.payload];
        case MovieActions.REMOVE_MOVIE:
            return [...state.splice(action.payload,1)];
        default:
            return state;
    }
}