import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './header.js'; //import global header.
//import Footer from './footer.js'; remove global footer per instructions.
import hotDog from './assets/tab_lunch@2x.png';
import internets from './assets/tab_internets@2x.png'

class App extends Component {

  constructor() {
    super();
    
    this.state = {
			food: [] //initialize state
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
      this.setState({food: data.restaurants});
      console.log(this.state.food);
    })
  }

  //Render method
  render() {
    return (
      <div>
        <Header/>
          <div className="background">
            {this.state.food.map((item) => 
              <img src={item.backgroundImageURL} alt="" key={item.name} className="col-xs-12 col-sm-6 col-md-6 col-lg-6 food-image"/>
            )}
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

export default App;
