import React, { Component } from "react";

export default class SetState extends Component {
  constructor() {
    super();

    this.increment5x = this.increment5x.bind(this);

    this.state = {
      contador: 0,
    };
  }

  increment() {
    console.log('Cliquei!');
    this.setState((state) => ({
      contador: state.contador + 1
    }))

    console.log('valor anterior',this.state.contador)
  }


  increment5x() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <h1>nº de cliques: {this.state.contador}</h1>
        <button type="button" onClick={this.increment5x}>
          Incrementar
        </button>
      </div>
    )
  }
}
