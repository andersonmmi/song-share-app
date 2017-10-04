import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form.js';
import Card from './components/card.js';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    const headerStyle = {
      "display": "flex",
      "flexDirection": "row"
    }
    const bodyContainerStyle={
      "display": "flex",
      "flexDirection": "row"
    }
    return (
      <div className="App">
        <div className="App-header" style={headerStyle}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Play What?!</h2>
        </div>
        <span className="body-container" style={bodyContainerStyle}>
          <Form />
          <Card />
        </span>
      </div>
    );
  }
}

export default App;
