import React, { Component } from 'react';
import './App.css';
import hotDog from './assets/tab_lunch@2x.png';
import internets from './assets/tab_internets@2x.png'
import MapContainer from './map.js'; //import map component.
import { Switch, Route, NavLink, HashRouter } from "react-router-dom";


class Home extends Component {

  constructor() {
    super();
    
    this.state = {
            food: [], //initialize state
            selectedRestaurant: null
    }

    this.getFoods = this.getFoods.bind(this); //bind function

  }

  componentDidMount() {
		this.getFoods() //call the getFoods function to set state and make the api call.
  }
  
  getFoods(){
    fetch('https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/br-codingexams/restaurants.json') // added cors-anywhere to overcome cors error.
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({food: data.restaurants, selectedRestaurant: data.restaurants[0]});
      console.log(this.state.food);//checking return to ensure data elements.
      console.log(this.state.selectedRestaurant);//checking initial return on page load to set first selected to array [0]
    })
  }

  //Render method
  render() {
    return (
      <div>
          <div className="background">
            <div className="img-box">
                {this.state.food.map((item) => 
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" style={{padding: '0px', margin: '0px'}}>
                        <NavLink to="/map"><img src={item.backgroundImageURL} alt="" key={item.name} className="food-image col-auto" /></NavLink>
                        <div className="bottom-left">
                            <h4>{item.name}</h4>
                            <h5>{item.category}</h5>
                        </div>
                    </div>
                )}
                <Route path="/map" render={(props) => <MapContainer {...props} selectedRestaurant={this.state.selectedRestaurant}/>}/>
            </div>
          </div>
          {/*removing global footer and only rendering on initial component.*/}
          <div className="footer-btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="" className="footer-btn col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <img src={hotDog} alt="" className="footer-img" />
                  <p className="header-text">Lunch</p>
              </button>
              <button type="" className="footer-btn col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <img src={internets} alt="" className="footer-img" />
                  <p className="header-text">Internets</p>
              </button>
          </div>
      </div>
    );
  }
}

export default Home;