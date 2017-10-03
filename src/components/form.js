import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
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
            <input id="userName" onChange={this.props.textChange} type="text" value={this.props.userName}/>
          </label>
          <hr/>
          <label>
            Artist:
            <input id="artist" onChange={this.props.textChange} type="text" value={this.props.artistValue}/>
          </label>
          <hr />
          <label>
            Song:
            <input id="song" onChange={this.props.textChange} type="text" value={this.props.songValue}/>
          </label>
          <hr />
          <label>
            Notes:
            <input id="notes" onChange={this.props.textChange} type="text" value={this.props.notesValue}/>
          </label>
          <hr />
          <input id="submit" type="button" value="Submit" onClick={this.props.onClick}/>
        </form>
      </div>
    );
  }
}

export default Form;
