import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Home.css';

const styles = {
    paperContainer: {
        height: 1356,
        backgroundImage: `url(${"assets/images/african-food.jpg"})`
    }
};
export default class Home extends Component{
  render(){
    return(
      <section style={styles.paperContainer}>

      <h2>Welcome to IFIS Website </h2>
      <p>New IFIS website with React</p>

         <Button component={Link}to="/register" variant="contained" color="primary">Register </Button>


      </section>


    )
  }
}
