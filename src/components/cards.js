import React, {Component} from 'react';

export default class Cards extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <p>{this.props.data.songTitle}</p>
      </div>
    )
  }
}
