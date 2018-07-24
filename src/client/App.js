import React, { Component } from "react";
const ReactDOM = require('react-dom')
import AppRouter from './routers/AppRouter'
import "./app.css";
// import Card from './components/Card'
// import Unsubscribe from './components/UnsubscribePage'

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
        <AppRouter></AppRouter>
      </div>
    );
  }
}
