import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './header.js';

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
          {this.state.food.map((item) => 
            <img src={item.backgroundImageURL} alt="" key={item.name} className="col-xs-12 col-sm-6 col-md-6 col-lg-6 food-image"/>
          )}
      </div>
    );
  }
}

export default App;
