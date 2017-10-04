import React, {Component} from 'react';

export default class Cards extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const songCardStyle={
      backgroundColor: "blue",
      color: "white",
      margin: "5px auto",
      border: "5px solid white",
    }
    return(
      <div className="song-card" style={songCardStyle}>
        <p>{this.props.data.songTitle}</p>
        <p>{this.props.data.songArtist}</p>
        <p>{this.props.data.songNotes}</p>
        <p>{this.props.data.userName}</p>

      </div>
    )
  }
}
