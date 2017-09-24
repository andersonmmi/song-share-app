import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);

    this.setUserNameValue = this.setUserNameValue.bind(this);
    this.setArtistValue = this.setArtistValue.bind(this);
    this.setSongValue = this.setSongValue.bind(this);
    this.setNotesValue = this.setNotesValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      userName: '',
      artist: '',
      song: '',
      notes: '',
      userNameValue: '',
      artistValue: '',
      songValue: '',
      notesValue: ''
    }
  }

  setUserNameValue = (event) => {
    this.setState({userName: event.target.value});
  }

  setArtistValue = (event) => {
    this.setState({artist: event.target.value});
  }

  setSongValue = (event) => {
    this.setState({song: event.target.value});
  }

  setNotesValue = (event) => {
    this.setState({notes: event.target.value});
  }

  handleSubmit = (event) => {
    // event.preventDefault();
    this.setState({
      userName: this.userNameValue,
      userNameValue: '',
      artist: this.artistValue,
      artistValue: '',
      song: this.songValue,
      songValue: '',
      notes: this.notesValue,
      notesValue: ''
    })
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit()}>
          <label>
            User Name:
            <input onChange={this.setUserNameValue} type="text" value={this.state.userNameValue}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
