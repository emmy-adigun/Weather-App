import React, { Component } from 'react';

export default class Form extends Component{
  render(){
    return(
      <div>
        <h2>Weather Information</h2>
        <p>Form Component</p>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="city" />
          <input type="text" name="country" placeholder="country" />
          <button>Get Weather</button>

        </form>
      </div>
    )
  }
}
