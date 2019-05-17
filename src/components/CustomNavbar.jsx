import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";


export default class CustomNavbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">IFIS</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul class="nav navbar-nav navbar-right">
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/Login">Login</a></li>
            <li><button class="btn btn-success navbar-btn"><a href="/register">Register</a></button></li>

          </ul>

        </div>
      </div>
    </nav>

    )
  }
}
