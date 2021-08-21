import React, { Component } from "react";

class ClickCounter2 extends Component {
  render() {
    // const { count } = this.state;
    // return <button onClick={this.incrementCount}>Clicked {count} times</button>;
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}

export default ClickCounter2;
