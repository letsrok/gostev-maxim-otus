import React from 'react';
import { render } from 'react-dom';
import './style.scss';
import {App} from './containers/app';
import {reducer, initialStateType} from './reducers/reducer'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { CityActionsType } from './actions/types';

const middleware = [ thunk as ThunkMiddleware<initialStateType, CityActionsType> ]

export type AppState = ReturnType<typeof reducer>

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(reducer, enhancer);


render(
<Provider store={store}>
  <App/>
</Provider>  
, document.getElementById('root'));




