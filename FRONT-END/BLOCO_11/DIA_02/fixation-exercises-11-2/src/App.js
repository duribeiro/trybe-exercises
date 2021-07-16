import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from '../src/components/img';

function hello2(name, lastName) {
  return `Hello ${name} ${lastName}`;
}

console.log(hello2('Eduardo', 'Ribeiro'));

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat starin" />
      </div>
      <div>
        <Greeting name="Eduardo" lastName="Ribeiro" />
      </div>
    </div>
  );
}

export default App;
