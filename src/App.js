import React from 'react';
import {Button, Grid, Navbar, Nav, NavItem, Row, Col, PageHeader, Jumbotron} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';

import SensorChart from './SensorChart';

import './css/bootstrap.min.css';
import './App.css';
import gplay from './image/google-play-badge.png';
import astore from './image/apple-store-badge.svg';

class Login extends React.Component {
  render(){
    return (<PageHeader> Login </PageHeader>);
  }
}

class About extends React.Component {

  render(){
    return (<PageHeader> About </PageHeader>);
  }
}

class SensorList extends React.Component {

   constructor() {
    super();

    this.state = {
      user: null,
      observations: [
        {timestamp: null, temp: 10, humidity:20, irradiance: 0.002},
        {timestamp: null, temp: 10, humidity:20, irradiance: 0.002},
        {timestamp: null, temp: 10, humidity:20, irradiance: 0.002},
        {timestamp: null, temp: 10, humidity:20, irradiance: 0.002},
        {timestamp: null, temp: 10, humidity:20, irradiance: 0.002},
        {timestamp: null, temp: 10, humidity:20, irradiance: 0.002},
        {timestamp: null, temp: 10, humidity:20, irradiance: 0.002},
        {timestamp: null, temp: 10, humidity:20, irradiance: 0.002},
        {timestamp: null, temp: 10, humidity:20, irradiance: 0.002},
        {timestamp: null, temp: 10, humidity:20, irradiance: 0.002},
      ],
    };

    let startTime = new Date();
    this.state.observations.map( (obs, i) => {
      const time = new Date();
      time.setMinutes(startTime.getMinutes() + i);
      obs.timestamp = time;
      return obs;
    });

  }

  render() {
    return (
      <PageHeader>Your Sensors</PageHeader>


    );
  }
}

class SensorMap extends React.Component {

  render(){
    return (<PageHeader>Sensor Map</PageHeader>);
  }
}


class Home extends React.Component {

  render(){
    return (
      <Jumbotron className="jumbo-splash">
        <h1>Welcome to iGrow</h1>
        <p>iGrow lets you track your plants environment on your smartphone!</p>
        <p>See historic temperature, humidity & light exposure on your phone or here on the web.</p>
        <p><Button bsStyle="primary">Order Now!</Button> <Button bsStyle="primary">Register Sensor</Button></p>
      </Jumbotron>
    );
  }
}

//Hack to fix the Navbar.Brand failing to eat active prop

class Brand extends React.Component {
  render() {
    const cName = 'navbar-brand';
    const theClass = this.props.active ? cName + ' active' : cName;
    return (
      <a href={this.props.href} className={theClass} action="push">
        {this.props.children}
      </a>

    )
  }
}

class App extends React.Component {

 render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <IndexLinkContainer to='/'>
              <Brand>iGrow</Brand>
            </IndexLinkContainer>
          </Navbar.Header>

          <Nav>
            <LinkContainer to={{pathname: '/sensor-list'}}>
              <NavItem eventKey={1} href="">Your Sensors</NavItem>
            </LinkContainer>
            <LinkContainer to={{pathname: '/sensor-map'}}>
              <NavItem eventKey={2} href="">Sensor Map</NavItem>
            </LinkContainer>
            <LinkContainer to={{pathname: '/about'}}>
              <NavItem eventKey={3} href="">About</NavItem>
            </LinkContainer>
          </Nav>

          <Nav pullRight>
            <NavItem eventKey={1} href="">
              <img className="gplaybadge" src={gplay} alt="google play store" />
            </NavItem>
            <NavItem eventKey={2} href="">
              <img className="astorebadge" src={astore} alt="apple store" />
            </NavItem>
            <LinkContainer to={{pathname: '/login'}}>
              <NavItem className="login" eventKey={3} href="">Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

export {App, Home, About, SensorList, SensorMap, Login};
