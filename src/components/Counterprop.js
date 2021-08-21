import React, { Component } from "react";
//container component to implement common functionality
class Counterprop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default Counterprop;
