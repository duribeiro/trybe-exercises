import React, { Component } from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

class App extends Component {
  render() {
    return (
      <div>
        <SecondComponent />
        <FirstComponent />
      </div>
    );
  }
};

export default App;
