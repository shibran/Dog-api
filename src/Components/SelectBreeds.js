import React, { Component } from 'react';

class SelectBreeds extends Component{

  constructor(props){
    super(props);

    this.state = {
        breeds:[],
        dogName: "affenpinscher"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    const url = "https://dog.ceo/api/breeds/list/all"
    fetch(url)
    .then(
      Response => {
        if(Response.ok){
          return Response.json()
        }else{
          throw Error(`request returned response status ${Response.status}`)
        }
      }
    )
    .then(
      result => {
        this.setState({breeds: Object.keys(result.message)})
      }
    )
    .catch(
      err => console.error(err)
    )
  }

  handleChange(event){
    this.setState({dogName: event.target.value});

    const imgUrl = `https://dog.ceo/api/breed/${event.target.value}/images/random`

    fetch(imgUrl)
    .then(
      Response => {
        if(Response.ok){
          return Response.json()
        }else{
          throw Error("request failed")
        }
      }
    )
    .then(
      result => {
        this.props.callback(result.message)
      }
    )
  }

  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
  render(){

    return(


      <form style={{background: "black"}}>
      <div className="selectBreed-container">
        <label>Select the breed</label>
        <select style={{marginLeft:"10px"}} value={this.state.dogName} onChange={this.handleChange} >
              { 
                this.state.breeds.map((breed,index) => {
                  return (
                      <option key={index} value={breed}>{breed}</option>
                  ) 
                })
              }
       </select>
      </div>
      <div className="title">{this.Capitalize(this.state.dogName)}</div>
      </form> 
    );
  }
}

export default SelectBreeds;