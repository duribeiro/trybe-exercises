import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  fetchCharacter = async () => {
   const fetchChar = await fetch('https://rickandmortyapi.com/api/character')
   const response = await fetchChar.json()
   this.setState({characters: response.results})
  }

  componentDidMount() {
    this.fetchCharacter()
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image}) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
