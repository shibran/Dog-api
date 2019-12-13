import React, { Component } from 'react'

class ShowDog extends Component{

  render(){
    return(
      <div>
        <img className="dogImg" src={this.props.imgUrl} alt="Dog Image"></img>
      </div>
    );
  }
}

export default ShowDog;