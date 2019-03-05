import React, { Component } from 'react';
import './App.css';
import mapLogo from './assets/icon_map@2x.png';
import Home from "./home.js"; //import central list section.
import MapContainer from './map.js'; //import map component.
import './custom.scss';
import { Switch, Route, NavLink, HashRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {


  //Render method
  render() {
    return (
      <HashRouter>
        <div syle={{textAlign: 'center'}}>
          <ul className="header">
            <li><NavLink to="/" style={{textDecoration: 'none'}}><h1 className="header-text">Lunch Tyme</h1></NavLink></li>
            <li><NavLink to="/map"><img src={mapLogo} alt="" className="map-btn" /></NavLink></li>
          </ul>
          <div className="content">
            <TransitionGroup>
              <CSSTransition
                key={window.location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames={'fade'}
              >
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/map" component={MapContainer}/>
                </Switch> 
              </CSSTransition>
            </TransitionGroup> 
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
