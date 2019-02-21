import React, { Component } from "react";

export class Counter extends Component {
  state = { id: 1, value: 0 };

  render() {
    const style = { width: "50px" };
    return (
      <React.Fragment>
        <h2>
          <span
            className={
              this.state.value > 0
                ? "badge badge-primary"
                : "badge badge-warning"
            }
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
