import React, { Component } from "react";
import { counters } from "../../sampleData";
import Counter from "../Counter/Counter";

export class Counters extends Component {
  state = { id: 0, data: counters };
  render() {
    const resetbuttonStyle = { width: "180px" };
    const counters = this.state.data;
    const isEmpty = counters.length === 0;
    const noCounterComp = (
      <h2>
        <span className={`badge badge-primary`}>N0 COUNTERS LEFT</span>
      </h2>
    );

    return (
      <div>
        {" "}
        <h2>
          {" "}
          <button
            onClick={this.handleClickReset}
            type="button"
            className="btn btn-outline-danger"
            style={resetbuttonStyle}
          >
            Reset
          </button>
        </h2>
        {isEmpty && noCounterComp}
        {counters.map(element => (
          <Counter
            key={element.id}
            id={element.id}
            value={element.value}
            handleClickDelete={() => this.handleClickDelete(element)}
            handleClickIncrement={() => this.handleClickIncrement(element.id)}
            handleClickDecrement={() => this.handleClickDecrement(element.id)}
          />
        ))}
      </div>
    );
  }
  handleClickDelete = counter => {
    const counterCopy = [...this.state.data];
    var newCounterCopy = counterCopy.filter(
      element => element.id !== counter.id
    );
    this.setState({ data: newCounterCopy });
  };
  handleClickReset = () => {
    const copy = [...this.state.data];
    const updated = copy.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ data: updated });
  };
  settingState = (data, counterId, op) => {
    const copy = [...this.state.data];
    op(copy.find(ele => ele.id === counterId));
    console.log(copy);
    this.setState({ data: copy });
  };

  handleClickIncrement = counterId => {
    const add = obj => (obj.value += 1);
    this.settingState(this.state.data, counterId, add);
  };
  handleClickDecrement = counterId => {
    const sub = obj => (obj.value -= 1);
    this.settingState(this.state.data, counterId, sub);
  };
}

export default Counters;
