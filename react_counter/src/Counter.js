import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
  //babel syntax for binding methods
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    const { count } = this.state;
    return (
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrement} className="full-width">Increment</button>
        <button onClick={this.handleDecrement} className="full-width">Decrement</button>
        <button onClick={this.reset} className="full-width">Reset</button>
      </section>
    );
  }
}


