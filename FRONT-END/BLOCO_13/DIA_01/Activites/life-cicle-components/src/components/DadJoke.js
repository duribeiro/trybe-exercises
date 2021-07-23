import React, { Component } from "react";

export default class DadJoke extends Component {
  constructor() {
    super();

    console.log("Estou no constructor");
    this.state = {
      jokeObj: undefined,
      loading: true,
      sotoredJokes: [],
    };
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: "application/json" } };
    const requestReturn = await fetch("https://icanhazdadjoke.com/", requestHeaders);
    const requestObj = await requestReturn.json();
    console.log(requestObj);
    this.setState({
      jokeObj: requestObj,
    });
  }

  componentDidMount() {
    console.log("Estou no DidMount");
    this.fetchJoke();
  }

  saveJoke() {
    //Salvando a piada no array de piadas existentes
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
      </div>
    );
  }

  render() {
    console.log("Estou no render");

    return (
      <div>
        <span>
          {renderJokeElement()}
        </span>
        Estou no comp DadJoke
      </div>
    )
  }
}
