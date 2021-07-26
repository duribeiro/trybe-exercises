import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    const ComponentPai = (props) => {
      return (
        <div>
          {props.children}
        </div>
      )
    }

    return (
      <div className="App App-header">
        <ComponentPai>
          <p>Estou no componente Pai</p>
        </ComponentPai>
      </div>
    );
  }
}
