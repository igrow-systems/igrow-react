import React from 'react';
import {Button, Grid, Navbar, Nav, NavItem, Row, Col, PageHeader, Jumbotron} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';

import * as pbRoot from './igrow-protobuf.js';

import SensorChart from './SensorChart';

import './css/bootstrap.min.css';
import './App.css';
import gplay from './image/google-play-badge.png';
import astore from './image/apple-store-badge.svg';

//pbRoot.default.com.argusat.gjl
const Device = pbRoot.default.com.argusat.gjl.locator.Device;
const FLDReq = pbRoot.default.com.argusat.gjl.locator.FindLocalDevicesRequest;
const Location = pbRoot.default.com.argusat.gjl.observation.Location;
const FLDResp = pbRoot.default.com.argusat.gjl.locator.FindLocalDevicesResponse;

let myLoc = Location.create({
  latitude: 50939965,
  longitude: -1415058,
  altitude: 0,
  HDOP: 0,
  VDOP: 0
});

let findLocal = FLDReq.create({
  centre: myLoc,
  radius: 2010,
  limit: 8,
});

let xhr = new XMLHttpRequest();

xhr.onload = function (evt) {
  console.log(FLDResp.decode(xhr.response));
}

xhr.open(
  "POST",
  "http://www.igrow-systems.com:9997/devices/local",
  true
);

xhr.setRequestHeader("Content-type", "application/octet-stream");
xhr.responseType = "arraybuffer";
xhr.send(FLDReq.encode(findLocal).finish());


/*let myDevice = Device.create({
    deviceId: '123',
    osType: 2,

  });*/
//Device.verify(myDevice);

class Login extends React.Component {
  render(){
    return (<PageHeader> Sign Up / Register </PageHeader>);
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
      sensors: [

      {
        id: "123456",
        name: "Sensor One",
        observations: [
          {timestamp: null, temp: -8, humidity:70, irradiance: 0.002},
          {timestamp: null, temp: -5, humidity:72, irradiance: 0.2},
          {timestamp: null, temp: 2, humidity:90, irradiance: 0.002},
          {timestamp: null, temp: 5, humidity:61, irradiance: 0.02},
          {timestamp: null, temp: 4, humidity:62, irradiance: 0.002},
          {timestamp: null, temp: 9, humidity:76, irradiance: 0.002},
          {timestamp: null, temp: 1, humidity:98, irradiance: 0.02},
          {timestamp: null, temp: 1, humidity:78, irradiance: 0.002},
          {timestamp: null, temp: 2, humidity:72, irradiance: 0.002},
          {timestamp: null, temp: 3, humidity:20, irradiance: 0.02},
        ],
      },{
        id: "123457",
        name: "Sensor Two",
        observations: [
          {timestamp: null, temp: 2, humidity:22, irradiance: 0.004},
          {timestamp: null, temp: 9, humidity:22, irradiance: 0.022},
          {timestamp: null, temp: 3, humidity:29, irradiance: 0.0032},
          {timestamp: null, temp: 2, humidity:22, irradiance: 0.02},
          {timestamp: null, temp: 15, humidity:20, irradiance: 0.08},
          {timestamp: null, temp: 9, humidity:20, irradiance: 0.009},
          {timestamp: null, temp: 8, humidity:20, irradiance: 0.002},
          {timestamp: null, temp: 4, humidity:20, irradiance: 0.0082},
          {timestamp: null, temp: 7, humidity:20, irradiance: 0.009},
          {timestamp: null, temp: 11, humidity:20, irradiance: 0.001},
        ],
      },]

    };

    let startTime = new Date();
    this.state.sensors.map((sensor) =>  {

      sensor.observations.map( (obs, i) => {
        const time = new Date();
        time.setMinutes(startTime.getMinutes() + i);
        obs.timestamp = time;
        return obs;
      });
      return sensor;
    });
  }


  render() {
    return (
    <div>
      <PageHeader>Your Sensors</PageHeader>
      {this.state.sensors.map( (sensor, i) => {
        return (
          <Row key={i}>
            <Col>
              <h2> {sensor.name} </h2>
              <SensorChart data={sensor.observations} />
            </Col>
          </Row>
        );
      })}
    </div>
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
              <NavItem className="login" eventKey={3} href="">Sign In / Register</NavItem>
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
