'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import $ from 'jquery';

import About from './components/about/aboutPage';
import Header from './components/common/header';
import Home from './components/homePage';

class App extends React.Component {
  render() {
    let Child;
    switch(this.props.route) {
      case 'about': Child = About; break;
      default: Child = Home;
    }
    return (
      <div>
        <Header />
        <Child />
      </div>
    ) 
  }
}

function render() {
  const route = window.location.hash.substr(1);
  ReactDOM.render(<App route = {route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();