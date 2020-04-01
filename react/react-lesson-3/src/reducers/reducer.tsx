import {CityActionsType,
        RECEIVE_CITIES,
        REQUEST_CITIES,
        ADD_FAVORITE,
        REQUEST_FAVORITE_CITIES,
        RECEIVE_FAVORITE_CITIES,
        DELETE_FAVORITE_CITY,
        ERROR_FETCH_CITIES,
        ERROR_FETCH_FAVORITE_CITY,
        REQUEST_FULL_CITY,
        RECEIVE_FULL_CITY,
       } from '../actions/types'

export type initialStateType = {
  isFetching: boolean,
  errorFetchCity: string,
  city: Object,
  favoriteCitiesId: number[],
  favoriteCities: Array<any>,
  errorFetchFavoriteCities: string,
  favoriteCity: Object,
  errorFetchFavoriteCity: string
}

let initialState:initialStateType = {
  isFetching: false,
  errorFetchCity: '',
  city: {},
  favoriteCitiesId: [3116057, 524901, 1489425],
  favoriteCities: [],
  errorFetchFavoriteCities: '',
  favoriteCity: {},
  errorFetchFavoriteCity: ''
}

export function  reducer(state=initialState, action: CityActionsType): initialStateType {
  switch(action.type) {

    case REQUEST_CITIES:
      return {
        ...state,
        isFetching: true
      }  
    case RECEIVE_CITIES:
      return {
        ...state,
        isFetching: false,
        city: action.city,
        errorFetchCity: ''
      }
    case ERROR_FETCH_CITIES:
        return {
          ...state,
          errorFetchCity: action.payload
        }  
    case ADD_FAVORITE:
      return {
        ...state,
        favoriteCitiesId: [...state.favoriteCitiesId, action.payload],
        favoriteCities: [...state.favoriteCities, state.city]
      }
    case REQUEST_FAVORITE_CITIES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_FAVORITE_CITIES:
      return {
        ...state,
        favoriteCities: action.cities,
        isFetching: false,
        errorFetchFavoriteCities: ''
      }
    case ERROR_FETCH_FAVORITE_CITY:
        return {
          ...state,
          errorFetchFavoriteCities: action.payload
        }  
    case DELETE_FAVORITE_CITY:
        return {
          ...state,
          favoriteCitiesId: state.favoriteCitiesId.filter(city => city != action.payload),
          favoriteCities: state.favoriteCities.filter(city => city.id != action.payload)
        }
    case REQUEST_FULL_CITY:
        return {
          ...state,
          isFetching: true
        }
    case RECEIVE_FULL_CITY: 
        return {
          ...state,
          favoriteCity: action.city,
          isFetching: false
        }    
    default: 
      return state
  }
}

