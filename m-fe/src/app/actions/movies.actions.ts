// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Movie } from './../models/movie.model'

// Section 2
export const ADD_MOVIE       = '[MOVIE] Add'
export const REMOVE_MOVIE    = '[MOVIE] Remove'

// Section 3
export class AddMovie implements Action {
    readonly type = ADD_MOVIE
    constructor(public payload: Movie) {}
}

export class RemoveMovie implements Action {
    readonly type = REMOVE_MOVIE
    constructor(public payload: Movie) {}
}

// Section 4
export type Actions = AddMovie | RemoveMovie