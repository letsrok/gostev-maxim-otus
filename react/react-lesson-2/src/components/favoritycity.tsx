import React, {Component} from 'react';

interface Iprops {
  cities: Array<any>,
  func: Function
}

interface Istate {

}

export class FavorityCities extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);

    this.renderCities = this.renderCities.bind(this)
    this.deleteCity = this.deleteCity.bind(this)
  }

  renderCities() {
    return this.props.cities.map(item => {
      return (
        <tr key={item.city.id}>
          <td>{item.city.name}</td>
          <td>{item.data[0].temp.eve}</td>
          <td>{item.data[0].weather[0].description}</td>
          <td>{item.data[0].speed}</td>
          <td><span className="delete-city" onClick={()=> this.deleteCity(item.city.id)}>Удалить город</span></td>
        </tr> 
      )
    })  
  }

  deleteCity(val:number) {
    this.props.func(val);
  }

  render() {
    return (
      <div className="favority__wrapper wrap">
        <h2>Избранные города</h2>
        <table> 
          <tbody>
              <tr>
                <th>Город</th>
                <th>Температура</th>
                <th>Осадки</th>
                <th>Ветер</th>
                <th>удалить из избранного</th>
              </tr>
              {this.renderCities()}
          </tbody>
        </table>    
      </div>
    )
  }
}