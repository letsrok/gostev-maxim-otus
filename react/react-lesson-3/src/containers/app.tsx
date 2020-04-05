import React from 'react';
import FavotiteCity from './favoriteCity'
import {MainPage} from './mainPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export function App ()  {
 return (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route path="/city/:id" component={FavotiteCity}/>
    </Switch>
  </Router> 
  
 )
}

