import data from '../data/data.json';
import React, {Component} from 'react';
import {SearchCities} from './searchCites';
import {Resoult} from './resoult';
import {FavorityCities} from './favoritycity';


interface Iprops {
}

interface Istate {
  favoriteCitiesID: Array<number>,
  cities: Array<any>,
  searchResoult: Array<any>,
  favoriteCities: Array<any>
}

export class App extends React.Component<Iprops, Istate> {
  
  constructor(props: Iprops) {
    super(props);

    this.state = {
      cities: data,
      favoriteCitiesID: [],
      favoriteCities: [],
      searchResoult: []
    }

    this.search = this.search.bind(this);
    this.addToFavoryte = this.addToFavoryte.bind(this);
    this.returnFavorityCities = this.returnFavorityCities.bind(this);
    this.deleteCityFormFavorite = this.deleteCityFormFavorite.bind(this);
  }

  addToFavoryte(val:number) {
    const {favoriteCitiesID} = this.state;
    favoriteCitiesID.push(val);

    this.setState({
      favoriteCitiesID: favoriteCitiesID
    })
  }

  returnFavorityCities() {
    const {favoriteCitiesID, cities} = this.state;
    let res = [];

    for (let item of cities) {
      if (favoriteCitiesID.includes(item.city.id)) {
        res.push(item)
      }
    }
    return res;
  }


  deleteCityFormFavorite(val:number) {
    const {favoriteCitiesID} = this.state;
    let resoult:Array<number> = []
    
    if(favoriteCitiesID.length > 1) {
      resoult = favoriteCitiesID.splice(favoriteCitiesID.indexOf(val, 1))
    }

    this.setState({
      favoriteCitiesID: resoult
    })

  }

  search(env: string) {
    const {cities} = this.state;
    let searchResoult = cities.filter(item => item.city.name.toLowerCase().indexOf(env) != -1);
    this.setState({
      searchResoult: searchResoult
    })
  }


  render() {
    const {cities} = this.state
    return (
      <div>
        <SearchCities func={this.search}/>
        <Resoult cities={this.state.searchResoult} favority={this.state.favoriteCitiesID} func={this.addToFavoryte}/>
        <FavorityCities cities={this.returnFavorityCities()} func={this.deleteCityFormFavorite}/>
      </div>
      
    );
  }
}

