import React, { Component } from 'react';
import { connect } from 'react-redux';
import newAction from '../actions';

class SecondComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  render() {
    const { myFirstDispatch } = this.props
    const { inputValue } = this.state

    return (
      <div>
        <input
          type="text"
          onChange={ (event) => this.setState({
            inputValue: event.target.value
          }) }
        />
        <button onClick={() => myFirstDispatch(inputValue)}>
          Executar qualquer tarefa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  myFirstDispatch: (state) => dispatch(newAction(state))
})

export default connect(null, mapStateToProps)(SecondComponent);