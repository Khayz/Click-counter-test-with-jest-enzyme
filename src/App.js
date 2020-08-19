import React, { Component } from "react";

export default class App extends Component {
  state = {
    counter: 0,
    isZero: false,
  };

  incrementCounter = () => {
    console.log(this.state.isZero);
    this.setState({
      counter: this.state.counter + 1,
      isZero: false,
    });
  };

  decrementCounter = () => {
    this.setState({
      counter:
        this.state.counter > 0 ? this.state.counter - 1 : this.state.counter,
      isZero: this.state.counter === 0 && true,
    });
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button onClick={this.incrementCounter} data-test="increment-button">
          Increment counter
        </button>
        <button onClick={this.decrementCounter} data-test="decrement-button">
          Decrement counter
        </button>
        {this.state.isZero && (
          <p data-test="error-message">The counter cant go below zero</p>
        )}
      </div>
    );
  }
}
