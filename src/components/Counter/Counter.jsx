import React, { Component } from "react";

export class Counter extends Component {
  state = { id: 1, value: 0 };

  render() {
    return (
      <h2>
        <span className="badge badge-primary">{this.state.value}</span>
      </h2>
    );
  }
}

export default Counter;
