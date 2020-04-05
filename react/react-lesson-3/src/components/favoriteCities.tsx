import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteFavoriteCity, fetchFavoriteCitites } from '../actions/actions';
import { initialStateType } from '../reducers/reducer';
import { ThunkDispatch } from 'redux-thunk';
import { CityActionsType } from '../actions/types';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

interface AppProps {
  city?: {
    name: string,
    temp: number,
    clouds: string,
    wind: number,
    id: number
  },
  favoriteCitiesId: number[]

}

type IProps = AppProps & LinkDispatchProps

class FavoriteCities extends React.Component<IProps, {}> {

  constructor(props: IProps) {
    super(props)
  }

  componentDidMount(){
    const {favoriteCitiesId} = this.props
    if(favoriteCitiesId.length > 0) {
      this.props.fetchFavoriteCitites(favoriteCitiesId)
    }
  }

  render(){
    return (
      <div className="wrap favorite-cities">
        <h2>Избранные города</h2>
        <div className="favorite-cities__wrap">
          {this.props.favoriteCities.map(city => {
            return (
              <div className="favorite-city__wrap" key={city.id}>
                <div className="favorite-city">
                  <div className="favorite-city__name">{city.name}</div>
                  <div className="favorite-city__temp">Тем: {city.temp}</div>
                  <div className="favorite-city__body">
                    <div className="favorite-city__clouds">Небо: {city.clouds}</div>
                    <div className="favorite-city__wind">Ветер: {city.wind}</div>
                  </div>
                  <button className="favorite-city__delete"
                          onClick={() => this.props.deleteFavoriteCity(city.id)}
                          disabled={this.props.isFetching}>X
                  </button>
                  <Link to={`/city/${city.id}`}>Подробнее</Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

}

interface LinkDispatchProps {
  deleteFavoriteCity: (id:number) => void,
  fetchFavoriteCitites: (cities: []) => void
}

const mapStateToProps = (state: initialStateType) => {
  const {isFetching, favoriteCities, favoriteCitiesId} = state
  return {
    isFetching,
    favoriteCities,
    favoriteCitiesId
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, CityActionsType>): LinkDispatchProps => {
  return {
    deleteFavoriteCity: bindActionCreators(deleteFavoriteCity, dispatch),
    fetchFavoriteCitites: bindActionCreators(fetchFavoriteCitites, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCities)