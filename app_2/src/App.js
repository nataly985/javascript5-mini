import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodItem from './FoodItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favoriteFoods: ['lettuce', 'carrots', 'beets', 'beans', 'air']
    }
  }
  render() {

    const favFoods = this.state.favoriteFoods.map( (element, index) => {
        return <FoodItem   key={index} foodItem={element}/>
    })

    return (
      <div className="App">
        <h1>My Favorite Food List:</h1>
        {favFoods}
      </div>
    );
  }
}

export default App;
