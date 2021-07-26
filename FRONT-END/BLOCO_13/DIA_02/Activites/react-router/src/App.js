import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className='App App-header'>
        <BrowserRouter>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/profile'>Profile</Link>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route
            path='/Profile/:ship'
            render={(props) => <Profile {...props} name="Eduardo" />} />
        </BrowserRouter>
      </div>
    );
  }
}
