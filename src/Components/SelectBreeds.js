import React, { Component } from 'react';

class SelectBreeds extends Component{

  constructor(props){
    super(props);

    this.state = {
        breeds:["husky","rottweiler","doberman"],
        dogName: ""
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
        console.log(result)
        console.log(Object.keys(result.message))
        this.setState({breeds: Object.keys(result.message)})
      }
    )
    .catch(
      err => console.error(err)
    )
  }

  handleChange(event){
    console.log("Event.target.value is", event.target.value);
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
        console.log(result)
        this.props.callback(result.message)
      }
    )
  }

  
  render(){

    return(
      <form>
      <div>
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
       <div className="title">{this.state.dogName}</div>
      </div>
      </form> 
    );
  }
}

export default SelectBreeds;