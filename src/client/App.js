import React, { Component } from "react";
import "./app.css";
import Card from './components/Card'

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state =;
  // }

  // componentDidMount() {
  //   fetch("/api/getUsername")
  //     .then(res => res.json())
  //     .then(user => this.setState({ username: user.username }));
  // }

  render() {
    return (
      <div>
        <Card/>
      </div>
    );
  }
}
