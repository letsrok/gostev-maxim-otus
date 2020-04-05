import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addToFavorite } from '../actions/actions';
import { initialStateType } from '../reducers/reducer';
import { ThunkDispatch } from 'redux-thunk';
import { CityActionsType } from '../actions/types';
import { bindActionCreators } from 'redux';


interface AppProps{
  city: any,
  favoriteCitiesId: number[],
  isFetching: boolean
}

type IProps = AppProps & LinkDispatchProps

class ResoultCity extends React.Component<IProps, {}>{
  constructor(props: IProps){
    super(props)
  }

  render(){
    
    if(Object.keys(this.props.city).length == 0) {
      return (
        <div className="wrap">
          <h3>Нет результатов</h3>
        </div>
      )
    }
    else {
      const {name, temp, clouds, wind, id} = this.props.city
      return (
        <div className="wrap search-resoult">
         <table>
          <tbody>  
            <tr>
              <td>Имя</td>
              <td>Температура</td>
              <td>Облачность</td>
              <td>Ветер</td>
              <td>Добавить в избранное</td>
            </tr>
            <tr>
              <td>{name}</td>
              <td>{temp}</td>
              <td>{clouds}</td>
              <td>{wind}</td>
              <td>
                {this.props.favoriteCitiesId.includes(id)
                ? ('Уже в избранном')
                : <button disabled={this.props.isFetching} onClick={()=> this.props.addFavorite(id)}>Добавить</button>}
                
              </td>
            </tr>
          </tbody>
        </table>
        </div>
       
      )    
    }
    
  }
}

interface LinkDispatchProps {
  addFavorite: (id: number) => void
}

const mapStateToProps = (state :initialStateType) => {
  const {city, favoriteCitiesId, isFetching, errorFetchCity} = state
  return { 
    city,
    favoriteCitiesId,
    isFetching,
    errorFetchCity
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, CityActionsType>):LinkDispatchProps  => {
  return {
    addFavorite: bindActionCreators(addToFavorite, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResoultCity)