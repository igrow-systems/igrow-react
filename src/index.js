import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { App, Home, About, SensorList, SensorMap, Login} from './App';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="sensor-list" component={SensorList}/>
      <Route path="sensor-map" component={SensorMap}/>
      <Route path="login" component={Login}/>
    </Route>
  </Router>,
  document.getElementById('root'));
