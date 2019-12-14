import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';


class ShowDog extends Component{

  render(){
    
    const classes = makeStyles(theme => ({
    
      card: {
        maxWidth: 345,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      }));
      
    return(
      <Card className={classes.card}>
        <CardMedia
        className={classes.media}
        title="Paella dish"
        />
        <img className="dogImg" src={this.props.imgUrl} alt="Dog"></img>
      </Card>
    );
  }
}

export default ShowDog;