import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form.js';
import Card from './components/card.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      userName: '',
      artist: '',
      song: '',
      notes: '',
      data: [],
    };
  }
  handleTextChange = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    if (this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }
  handleSubmit = (event) => {
    alert("button clicked");
    console.log(event.target.id);
    this.setState({
      data: ["tinylasangia information"],
    })
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
          <Form textChange={this.handleTextChange} onClick={this.handleSubmit} props={this.state}/>
          <Card />
        </span>
      </div>
    );
  }
}

export default App;
