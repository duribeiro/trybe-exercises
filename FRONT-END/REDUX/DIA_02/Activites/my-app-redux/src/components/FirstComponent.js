import React, { Component } from 'react';
import { connect } from 'react-redux';

class FirstComponent extends Component {
  render() {
    return (
      <h1>
        Eu sou o FirstComponent
      </h1>
    );
  }
};

const mapStateToProps = state => ({
  myFirstState: state.myReducer.state
});

export default connect(mapStateToProps)(FirstComponent);
