import React, { Component } from 'react';

export default class Weather extends Component{
  render(){
    return(
      <div className="row">
      <div className="col-md-12 pad-left">
        <br/>
        {this.props.city && this.props.country && <p> Location: {this.props.city}, {this.props.country}</p>}
          {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
          {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
          {this.props.description && <p>Conditions: {this.props.description}</p>}
          {this.props.error && <p>{this.props.error}</p>}
      </div>
      </div>
    )
  }
}
