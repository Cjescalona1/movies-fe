import { Action } from '@ngrx/store'
import { Movie } from './../models/movie.model'
import * as MovieActions from './../actions/movies.actions'

 
const initialState: Movie =  {
    id: "111",
    name: "name altered",
    year: "2020",
    poster: "420",
}
/*{
   	id: "111",
	name: "name altered",
	year: "2020",
	poster: "420",
}*/

export function reducer(state: Movie[]= [ ] , action: MovieActions.Actions) {

    switch(action.type) {
        case MovieActions.ADD_MOVIE:
            return [...state, action.payload];
        default:
            return state;
    }
}