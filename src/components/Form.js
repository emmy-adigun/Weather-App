import React, { Component } from 'react';

export default class Form extends Component{
  render(){
    return(
      <div className="row pad-form">

        <form onSubmit={this.props.getWeather}>
        <div className="col-md-4">
          <input type="text" name="city" placeholder="city" className="form-control"/>
          </div>
            <div className="col-md-4">
          <input type="text" name="country" placeholder="country" className="form-control" />
          </div>
            <div className="col-md-4">
          <button className="btn btn-primary">Get Weather</button>
          </div>

        </form>
      </div>
    )
  }
}
