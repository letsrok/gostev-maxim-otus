import {Dispatch} from 'redux'

export const SEARCH_CITIES = 'SEARCH_CITIES'
export const RECEIVE_CITIES = 'RECEIVE_CITIES'
export const REQUEST_CITIES = 'REQUEST_CITIES'
export const ERROR_FETCH_CITIES = 'ERROR_FETCH_CITIES'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const RECEIVE_FAVORITE_CITIES = 'RECEIVE_FAVORITE_CITIES'
export const REQUEST_FAVORITE_CITIES = 'REQUEST_FAVORITE_CITIES'
export const DELETE_FAVORITE_CITY = 'DELETE_FAVORITE_CITY'
export const ERROR_FETCH_FAVORITE_CITY = 'ERROR_FETCH_FAVORITE_CITY'
export const REQUEST_FULL_CITY = 'REQUEST_FULL_CITY'
export const RECEIVE_FULL_CITY = 'RECEIVE_FULL_CITY'
export const ERROR_FETCH_FULL = 'ERROR_FETCH_FULL'


interface requestFullCity {
  type: typeof REQUEST_FULL_CITY
}

interface receiveFullCity {
  type: typeof RECEIVE_FULL_CITY
  city: {}
}

interface errorFetchFull {
  type: typeof ERROR_FETCH_FULL
}

interface searchCitiAction {
  type: typeof SEARCH_CITIES
  dispatch: Dispatch
}

interface receiveCitiesAction {
  type: typeof RECEIVE_CITIES
  city: {}
}

interface requestCities {
  type: typeof REQUEST_CITIES
}

interface errorFetchCity {
  type: typeof ERROR_FETCH_CITIES
  payload: string
}

interface addFavorite {
  type: typeof ADD_FAVORITE
  payload: number
}

interface receiveFavoriteCities {
  type: typeof RECEIVE_FAVORITE_CITIES
  cities: []
}

interface requestFavoriteCities {
  type: typeof REQUEST_FAVORITE_CITIES
}

interface deleteFavoriteCity {
  type: typeof DELETE_FAVORITE_CITY
  payload: number
}

interface errorFetchFavoriteCity {
  type: typeof ERROR_FETCH_FAVORITE_CITY
  payload: string
}

export interface CityViewType {

}


export type CityActionsType = 
  searchCitiAction
| receiveCitiesAction
| errorFetchCity
| addFavorite
| requestCities
| requestFavoriteCities
| receiveFavoriteCities
| deleteFavoriteCity
| errorFetchFavoriteCity
| requestFullCity
| receiveFullCity
| errorFetchFull