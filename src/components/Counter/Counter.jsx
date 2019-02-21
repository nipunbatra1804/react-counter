import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      value: props.value,
      handler: props.handleClickDelete
    };
  }

  getCounterStyleClass = () => {
    return this.state.value > 0 ? "primary" : "badge badge-warning";
  };
  render() {
    const style = { width: "50px" };
    return (
      <React.Fragment>
        <h2>
          <span
            className={`badge badge-${this.getCounterStyleClass()}`}
            style={style}
          >
            {this.state.value}{" "}
          </span>{" "}
          <button
            onClick={this.handleClickIncrement}
            type="button"
            className="btn btn-success"
          >
            +
          </button>
          <button
            onClick={this.handleClickDecrement}
            type="button"
            className="btn btn-danger"
          >
            -
          </button>
          <button
            onClick={this.state.handler}
            type="button"
            className="btn btn-outline-danger"
          >
            DEL
          </button>
        </h2>
      </React.Fragment>
    );
  }

  handleClickIncrement = () => {
    const value = this.state.value + 1;
    this.setState({ value: value });
  };
  handleClickDecrement = () => {
    const value = this.state.value - 1;
    this.setState({ value: value });
  };
}

export default Counter;
