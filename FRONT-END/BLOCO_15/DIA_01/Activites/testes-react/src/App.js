import { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  

  render() {
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
        </label>
        <input id="id-email" type="email" />
        <input id="btn-send" type="button" data-testid="id-send" value="Enviar" />
        <input id="btn-back" type="button" value="Voltar" />
      </div>
    );
  }
}
