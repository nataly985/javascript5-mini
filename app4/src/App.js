import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
 this.handleCars = this.handleCars.bind(this);
  }
  handleCars(event){
    this.setState({ cars: event.target.value})
  }

  componentDidMount(){
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(response => {
      this.setState({
        cars: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleCars}>Get cars</button>
      </div>
    );
  }
}

export default App;
