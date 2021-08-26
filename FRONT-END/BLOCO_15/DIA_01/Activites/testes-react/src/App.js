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

  changeEmail(email) {
    this.setState({ email: email })
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' })
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
        </label>
        <input 
          id="id-email"
          type="email"
          value={ email }
          onChange={ (e) => this.changeEmail(e.target.value) }
        />
        <input
          id="btn-send"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email)}
        />
        <input id="btn-back" type="button" value="Voltar" />
        <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2>
      </div>
    );
  }
}
