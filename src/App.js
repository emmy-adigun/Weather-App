import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import NavBar from './components/CustomNavbar';
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '3b16859b649941009b23ac8078bf853d';
class App extends Component {
  state = {
    temperature : null,
    city : null,
    country : null,
    humidity : null,
    description : null,
    error : null
  }
  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if( city && country ){
    this.setState({
      temperature : data.main.temp,
      city : data.name,
      country : data.sys.country,
      humidity : data.main.humidity,
      description : data.weather[0].description,
      error : ""
    })
  }else{
    this.setState({
      temperature : null,
      city : null,
      country : null,
      humidity : null,
      description : null,
      error : "Please fill the form inputs"
    })
  }
}
  render() {
    return (
    <div>
      <Title />
      <Form getWeather={this.getWeather}/>
      <Weather
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error = {this.state.error}/>
    </div>
    );
  }
}

export default App;
