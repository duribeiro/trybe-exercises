import React, { Component } from 'react';
import './App.css';
import Form from './components/Forms.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <span>Meu form</span>
      </div>
    );
  }
}

export default App;
