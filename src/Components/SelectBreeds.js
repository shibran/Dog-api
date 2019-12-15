import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



class SelectBreeds extends Component {

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

    const classes = makeStyles(theme => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));
    

    return(

      <FormControl className={classes.formControl} style={{width:"100%"}}>
      <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"#004d40"}}>
      <Toolbar>
        <div className="selectBreed-container">
            <div><b>Select the breed</b></div>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.dogName} 
          onChange={this.handleChange} 
          style={{marginLeft: "10px", color: "white"}}
          >
              { 
                this.state.breeds.map((breed,index) => {
                  return (
                      <MenuItem key={index} value={breed}>{breed}</MenuItem>
                  ) 
                })
              }
       </Select>
        </div>
       </Toolbar>
       </AppBar>
      </div>
      <div className="title">{this.Capitalize(this.state.dogName)}</div>
      </FormControl> 
    );
  }
}

export default SelectBreeds;