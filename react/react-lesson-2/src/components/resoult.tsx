import React, {Component} from 'react';

interface Iprops {
  cities: Array<any>,
  favority: []
  func: Function
}

interface Istate {
  searchInput: string
}

export class Resoult extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);

    this.renderCities = this.renderCities.bind(this)
    this.addFavority = this.addFavority.bind(this)
  }

  renderCities() {
    return this.props.cities.map(item => {
      return (
        <tr key={item.city.id}>
          <td>{item.city.name}</td>
          <td>{item.data[0].temp.eve}</td>
          <td>{item.data[0].weather[0].description}</td>
          <td>{item.data[0].speed}</td>
          <td>{this.props.favority.includes(item.city.id) ? 'Уже в избранном' 
              : (<span className="city-add" onClick={() => this.addFavority(item.city.id)}>Добавить</span>)}
          </td>
        </tr> 
      )
    })  
  }

  addFavority(val:number) {
    this.props.func(val);
  }

  render(){
    

    return (
      <div className="resolut__wrapper wrap">
        <h2>Результаты поиска</h2>
        <table> 
          <tbody>
              <tr>
                <th>Город</th>
                <th>Температура</th>
                <th>Осадки</th>
                <th>Ветер</th>
                <th>добавить в избранное</th>
              </tr>
              {this.renderCities()}
          </tbody>
        </table>    
      </div>
      
    )
  }
}