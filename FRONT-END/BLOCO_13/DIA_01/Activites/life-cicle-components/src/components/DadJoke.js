import React, { Component } from "react";

export default class DadJoke extends Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    console.log("Estou no constructor");
    this.state = {
      jokeObj: '',
      loading: true,
      sotoredJokes: [],
    };
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: "application/json" } };
    const requestReturn = await fetch("https://icanhazdadjoke.com/", requestHeaders);
    const requestObj = await requestReturn.json();
    this.setState({
      jokeObj: requestObj,
    });
  }

  // o componetDidMount executa a fetchJoke() apena 1x, após isso o render coloca na tela os resultados, caso a função seja chamada em outro lugar ela ira ficar fazendo requisições sem parar.
  componentDidMount() {
    console.log("Estou no DidMount");
    this.fetchJoke();
  }

  saveJoke() {
    //Salvando a piada no array de piadas existentes
    console.log('Salvei!');
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {this.renderJokeElement()}
        </span>

        <span>RENDERIZAÇÃO CONDICIONAL</span>

      </div>
    )
  }
}
