import React, {Component} from 'react';
import request from 'superagent';
import Cards from './cards.js'

class Card extends Component {
  constructor(props){
    super(props);
    this.state={
      songs:[],
    }
  }

  componentDidMount(){
    let api ='https://tiny-lasagna-server.herokuapp.com/collections/playlisting';
    request
      .get(api)
      .end((err,res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(typeof JSON.parse(res.text));
          console.log(JSON.parse(res.text));
          let data = JSON.parse(res.text);
          this.setState({
            songs: data,
          })
        }
      })
  }

  render(){
    const cardStyle = {
      "flexGrow": 1,
    }
    let songs = this.state.songs.map((cards)=>{
      console.log("times mapped through :" + cards);
      return(<Cards key={cards._id} data={cards} />);
    })

    return(
      <div className="cards-container" style={cardStyle}>
        {songs}
      </div>
    )
  }

}

export default Card;
