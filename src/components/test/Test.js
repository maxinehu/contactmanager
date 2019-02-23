import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: ""
  };
  componentDidMount() {
    console.log("componentDidMount...");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => this.setState({ title: data.title }));
  }

  componentWillMount() {
    console.log("componentWillMount...");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate...");
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps...");
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}
