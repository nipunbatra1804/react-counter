import React, { Component } from "react";
import { counters } from "../../sampleData";
import Counter from "../Counter/Counter";

export class Counters extends Component {
  state = { id: 0, data: counters };
  render() {
    const counters = this.state.data;
    const htmlElement = counters.map(element => (
      <Counter
        key={element.id}
        id={element.id}
        value={element.value}
        handleClickDelete={() => this.handleClickDelete(element)}
      />
    ));
    return <div>{htmlElement}</div>;
  }
  handleClickDelete = counter => {
    const counterCopy = [...this.state.data];
    var newCounterCopy = counterCopy.filter(
      element => element.id !== counter.id
    );
    this.setState({ data: newCounterCopy });
  };
}

export default Counters;
