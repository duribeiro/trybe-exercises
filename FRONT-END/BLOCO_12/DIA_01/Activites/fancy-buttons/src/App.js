import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      bt1: 0,
      bt2: 0,
      bt3: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick = (event) => {
    console.log(event.target.className);
    
    if (event.target.className === 'btn1') {
      this.setState((estadoAnterior, _props) => ({
        bt1: estadoAnterior.bt1 + 1,
      }))
    } else if (event.target.className === 'btn2') {
      this.setState((estadoAnterior, _props) => ({
        bt2: estadoAnterior.bt2 + 1,
      }))
    } else if (event.target.className === 'btn3') {
      this.setState((estadoAnterior, _props) => ({
        bt3: estadoAnterior.bt3 + 1,
      }))
    }

  }

  render() {

    return (
      <div>
        <button 
          type="button" 
          className="btn1" 
          onClick={this.handleClick}
        >{this.state.bt1}</button>

        <button 
          type="button" 
          className="btn2" 
          onClick={this.handleClick}
          >{this.state.bt2}</button>

        <button 
        type="button" 
        className="btn3" 
        onClick={this.handleClick}
        >{this.state.bt3}</button>

      </div>
    );
  }
};
