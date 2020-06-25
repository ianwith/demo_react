import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return <HomePage />
  }
}

class HomePage extends Component {
  state = {
    counter: 0
  }

  incrementCounter = () => {
    this.setState((state) => ({
      counter: state.counter + 1
    }))
  }

  render() {
    return (
      <div className="container">
        <p className="text">I will code {this.state.counter} lines this month.</p>
        <button className="button" onClick={this.incrementCounter}>Increment</button>
      </div>
    )
  }
}

export default App;
