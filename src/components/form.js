import React, { Component } from 'react';
import request from 'superagent';

class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
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
    let api ='https://tiny-lasagna-server.herokuapp.com/collections/playlisting';
    let listItem = JSON.stringify(this.state);
    console.log(event.target.id);
    request
      .post(api)
      .send(listItem)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end((err,res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(typeof JSON.parse(res.text));
          console.log(JSON.parse(res.text));
          }
        })
    this.setState({
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
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
            <input id="songArtist" onChange={this.handleTextChange} type="text" value={this.state.songArtist}/>
          </label>
          <hr />
          <label>
            Song:
            <input id="songTitle" onChange={this.handleTextChange} type="text" value={this.state.songTitle}/>
          </label>
          <hr />
          <label>
            Notes:
            <input id="songNotes" onChange={this.handleTextChange} type="text" value={this.state.songNotes}/>
          </label>
          <hr />
          <input id="submit" type="button" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

export default Form;
