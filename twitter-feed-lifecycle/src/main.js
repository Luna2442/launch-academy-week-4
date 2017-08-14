import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import TwitterFeed from './components/TwitterFeed';
// import data from './constants/data';


ReactDOM.render(
  <TwitterFeed />,
  document.getElementById('app')
);
