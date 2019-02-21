import React, { Component } from "react";
import { counters } from "../../sampleData";
import Counter from "../Counter/Counter";

export class Counters extends Component {
  state = { id: 0, value: counters };
  render() {
    const counters = this.state.value;
    const htmlElement = counters.map(element => (
      <Counter key={element.id} id={element.id} value={element.value} />
    ));
    return <div>{htmlElement}</div>;
  }
}

export default Counters;
