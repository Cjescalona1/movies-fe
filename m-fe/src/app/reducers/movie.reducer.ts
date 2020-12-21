import { Action } from '@ngrx/store'
import { Movie } from './../models/movie.model'
import * as MovieActions from './../actions/movies.actions'
 
let val: any = localStorage.getItem('favorite')  ; 

const initialState: Movie = {name:"",poster:"",id:"",year:""}  ; 
export function reducer(state: Movie[] = [] , action: MovieActions.Actions) {

    switch(action.type) {
        case MovieActions.ADD_MOVIE:
            return [...state, action.payload];
        case MovieActions.REMOVE_MOVIE:
			state = state.splice(action.payload,1);
            return state;
        default:
            return state;
    }
}