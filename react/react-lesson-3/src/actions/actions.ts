import {Dispatch} from 'redux';
import {RECEIVE_CITIES,
        CityActionsType,
        REQUEST_CITIES,
        ADD_FAVORITE,
        DELETE_FAVORITE_CITY,
        REQUEST_FAVORITE_CITIES,
        RECEIVE_FAVORITE_CITIES,
        ERROR_FETCH_FAVORITE_CITY,
        ERROR_FETCH_CITIES,
        REQUEST_FULL_CITY,
        RECEIVE_FULL_CITY} from './types'

const URL = 'https://api.openweathermap.org/data/2.5/';
const API = '80c58964973992348096b442214660fc';

export const requestCities = () => {
  return {
    type: REQUEST_CITIES
  }
}

export const fetchCitites = (searchValue:string) => async (dispatch: Dispatch) => {
  dispatch(requestCities());

  try {
    const response = await fetch(`${URL}/weather?q=${searchValue}&lang=ru&units=metric&appid=${API}`)
    const json = await response.json()
    return dispatch(receiveCities(json))
  }
  catch(err) {
    return dispatch(errorFetchCity(err.message))
  }
}

export const errorFetchCity = (message: string) => {
  return {
    type: ERROR_FETCH_CITIES,
    payload: message
  }
}

export const receiveCities = (data:any): CityActionsType => {
  let city = {}
  
  if(data.cod != 404) {
    const {
           name,
           id,
           main:{temp}, 
           wind:{speed:wind}, 
           weather:[{description:clouds}]
          } = data
    city = {name, temp, clouds, wind, id}
  }
 
  return {
    type: RECEIVE_CITIES,
    city: city
  }
}

export const addToFavorite =(id:number) : CityActionsType =>{
  return {
    type: ADD_FAVORITE,
    payload: id
  }
}

export const deleteFavoriteCity = (id:number): CityActionsType => {
  return {
    type: DELETE_FAVORITE_CITY,
    payload: id
  }
}

export const requestFavoriteCity = () => {
  return {
    type: REQUEST_FAVORITE_CITIES
  }
}

export const errorFetchFavoriteCity = (message: string) => {
  return {
    type: ERROR_FETCH_FAVORITE_CITY,
    payload: message
  }
}

export const fetchFavoriteCitites = (searchValue: []) => async (dispatch: Dispatch) => {
  dispatch(requestFavoriteCity())
  
  const data = searchValue.join(',')
  try {
    const response = await fetch(`${URL}/group?id=${data}&lang=ru&units=metric&appid=${API}`)
    const json = await response.json()
    return dispatch(receiveFavoriteCities(json.list))
  }
  catch(err) {
    return dispatch(errorFetchFavoriteCity(err.message))
  }
}

export const receiveFavoriteCities = (data:any) : CityActionsType  => {
  if(data.cod != 404) {
    data  = data.map((city: any) => {
      const {
              name,
              id,
              main:{temp}, 
              wind:{speed:wind}, 
              weather:[{description:clouds}]
            } = city
           
    return {name, temp, clouds, wind, id}
    })
  }
  else data = []

  return {
    type: RECEIVE_FAVORITE_CITIES,
    cities: data
  }
}

export const requestFullCity = () => {
  return {
    type: REQUEST_FULL_CITY
  }
}

export const fetchFullCity = (searchValue:number) => async (dispatch: Dispatch) => {
  dispatch(requestFullCity());

  try {
    const response = await fetch(`${URL}/forecast?id=${searchValue}&lang=ru&units=metric&appid=${API}`)
    const json = await response.json()
    return dispatch(receiveFullCity(json))
  }
  catch(err) {
    return dispatch(errorFetchCity(err.message))
  }
}

export const receiveFullCity = (data:any) : CityActionsType  => {

    const {name} = data.city
    const list = data.list.slice(0,7).map((item: any) => {
      const {
        main:{temp}, 
        wind:{speed:wind}, 
        weather:[{description:clouds}],
        dt_txt:date
      } = item
      return {temp, clouds, wind, date}
    })
           
    data = {name, list}
    

  return {
    type: RECEIVE_FULL_CITY,
    city: data
  }
}
