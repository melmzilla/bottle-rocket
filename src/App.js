import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

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
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
    </header>*/}
          {this.state.food.map((item) => 
            <div className="col-xs-12">
              <img src={item.backgroundImageURL} alt="" key={item.name} />
            </div>
          )} 
      </div>
    );
  }
}

export default App;
