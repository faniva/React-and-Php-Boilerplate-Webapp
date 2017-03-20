import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navigation from './Components/Navigation';

ReactDOM.render(
  <App name="Jose" />,
  document.getElementById('app')
);

ReactDOM.render(
    <Navigation />,
    document.getElementById('primary-nav')
)



