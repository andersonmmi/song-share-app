import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      userName: '',
      artist: '',
      song: '',
      notes: '',
    }
    this.handleTextChange=this.handleTextChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
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
    const formStyle = {
      "backgroundColor": "deepskyblue",
      "flexGrow": 1,
    };
    return (
      <div className="form" style={formStyle}>
        <form>
          <label>
            User Name:
            <input id="userName" onChange={this.handleTextChange} type="text" value={this.state.userName}/>
          </label>
          <hr/>
          <label>
            Artist:
            <input id="artist" onChange={this.handleTextChange} type="text" value={this.state.artistValue}/>
          </label>
          <hr />
          <label>
            Song:
            <input id="song" onChange={this.handleTextChange} type="text" value={this.state.songValue}/>
          </label>
          <hr />
          <label>
            Notes:
            <input id="notes" onChange={this.handleTextChange} type="text" value={this.state.notesValue}/>
          </label>
          <hr />
          <input id="submit" type="button" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

export default Form;
