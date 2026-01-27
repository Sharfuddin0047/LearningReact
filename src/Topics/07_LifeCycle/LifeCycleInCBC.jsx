import { Component } from "react";

export default class LifeCycleInCBC extends Component {
  state = { count: 0 };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    console.log("Component Mounted");

    this.intervalID = setInterval(() => {
      console.log("API CALLED");
    }, 2000);
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
    clearInterval(this.intervalID);
  }
  render() {
    console.log("Render");
    return (
      <div>
        <h3>LifeCycleInCBC {this.state.count}</h3>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
