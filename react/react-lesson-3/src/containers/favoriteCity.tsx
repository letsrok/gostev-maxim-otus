import React, {Component} from 'react';
import { initialStateType } from '../reducers/reducer';
import { connect } from 'react-redux';
import { fetchFullCity } from '../actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { CityActionsType } from '../actions/types';
import { bindActionCreators } from 'redux';

interface AppProps {
  
}

type IProps = AppProps & LinkDispatchProps

class FavoriteCity extends React.Component<IProps, {}> {

  constructor(props: IProps){
    super(props)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchFullCity(id)
  }

  render() {
    if(Object.keys(this.props.favoriteCity).length > 0) {
      const {name, list} = this.props.favoriteCity
      return (
        <div className="city">
          <h1>{name}</h1>
          
          <table>
            <tbody>
              <tr>
                <td>Дата</td>
                <td>Температура</td>
                <td>Ветер</td>
                <td>Облачность</td>
              </tr>
              {list.map(data => {
                const {date, temp, clouds, wind} = data
                return (
                  <tr key={date}>
                    <td>{date}</td>
                    <td>{temp}</td>
                    <td>{wind}</td>
                    <td>{clouds}</td> 
                  </tr>
                )
              })}
            </tbody>
        </table>
        </div>
      )
  }
  else {
    return (
      <h2>Загрузка</h2>
    )
  }
}}

interface LinkDispatchProps {
  fetchFullCity: (id: number) => void
}

const mapStateToProps = (state: initialStateType) => {
  const {favoriteCity, isFetching} = state
  return {
    favoriteCity,
    isFetching
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, CityActionsType>): LinkDispatchProps => {
  return {
    fetchFullCity: bindActionCreators(fetchFullCity, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCity)