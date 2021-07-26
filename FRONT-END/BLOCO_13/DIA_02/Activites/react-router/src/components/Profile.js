import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    const { ship } = this.props.match.params;
    return (
      <div>
          <h1>Profile</h1>
          <p>Meu nome é {this.props.name} {ship}</p>
      </div>
    )
  }
}
