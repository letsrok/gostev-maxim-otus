import React from 'react';
import { render } from 'react-dom';
import './style.scss';

interface props {
  name: string
}

const App = ({name}: props) => (
  <h1>Hello {name}</h1>
)
  
render(<App name="maxim" />, document.getElementById('root'));