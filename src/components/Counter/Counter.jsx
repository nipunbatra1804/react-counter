import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
  }

  getCounterStyleClass = value => {
    return value > 0 ? "primary" : "badge badge-warning";
  };
  render() {
    const style = { width: "50px" };
    return (
      <React.Fragment>
        <h2>
          <span
            className={`badge badge-${this.getCounterStyleClass(
              this.props.value
            )}`}
            style={style}
          >
            {this.props.value}{" "}
          </span>{" "}
          <button
            onClick={this.props.handleClickIncrement}
            type="button"
            className="btn btn-success"
          >
            +
          </button>
          <button
            onClick={this.props.handleClickDecrement}
            type="button"
            className="btn btn-danger"
          >
            -
          </button>
          <button
            onClick={this.props.handleClickDelete}
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
