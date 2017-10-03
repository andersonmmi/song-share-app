import React, {Component} from 'react';

class Card extends Component {


  render(){
    const cardStyle = {
      "flexGrow": 1,
    }
    return(
      <div className="cards-container" style={cardStyle}>
        <p>Card data goes here</p>
        <p>And here</p>
        <p>And here, too!</p>
      </div>
    )
  }

}

export default Card;
