import React, { Component } from 'react'
import App from '../App'

class ShowDog extends Component{

  render(){
    return(
      <div>
        <img className="dogImg" src={this.props.imgUrl}></img>
      </div>
    );
  }
}

export default ShowDog;