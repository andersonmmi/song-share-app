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
    };
  }

  setUserNameValue = (event) => {
    this.setState({userNameValue: event.target.value});
  }

  setArtistValue = (event) => {
    this.setState({artistValue: event.target.value});
  }

  setSongValue = (event) => {
    this.setState({songValue: event.target.value});
  }

  setNotesValue = (event) => {
    this.setState({notesValue: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      userName: this.state.userNameValue,
      userNameValue: '',
      artist: this.state.artistValue,
      artistValue: '',
      song: this.state.songValue,
      songValue: '',
      notes: this.state.notesValue,
      notesValue: ''
    })
  }

  // componentWillMount(){
  //   this.setState(this.state);
  // }

  render() {
    const formStyle = {
      "width": "50%",
      "backgroundColor": "deepskyblue"
    };
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <label>
            User Name:
            <input onChange={this.setUserNameValue} type="text" value={this.state.userNameValue}/>
          </label>
          <hr/>
          <label>
            Artist:
            <input onChange={this.setArtistValue} type="text" value={this.state.artistValue}/>
          </label>
          <hr />
          <label>
            Song:
            <input onChange={this.setSongValue} type="text" value={this.state.songValue}/>
          </label>
          <hr />
          <label>
            Notes:
            <input onChange={this.setNotesValue} type="text" value={this.state.notesValue}/>
          </label>
          <hr />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
