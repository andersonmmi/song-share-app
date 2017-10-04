import React, {Component} from 'react';
import request from 'superagent';
import Cards from './cards.js'

class Card extends Component {
  constructor(props){
    super(props);
    this.state={
      songs:[],
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    let api ='https://tiny-lasagna-server.herokuapp.com/collections/playlisting';
    request
      .get(api)
      .end((err,res) => {
        if (err) {
          console.log(err);
        } else {
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
      return(<Cards key={cards._id} data={cards} />);
    })

    return(
      <div className="cards-container" style={cardStyle}>
        <button className="update-button" value="Update" type="button" onClick={this.handleClick}>Update</button>
        {songs}
      </div>
    )
  }

}

export default Card;
