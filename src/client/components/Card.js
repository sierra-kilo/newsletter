import React, { Component } from 'react';
import Info from './Info'
import Form from './Form'
import Button from './Button'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState() {
    this.setState({
      submitted: !(this.state.submitted)
    })
  }

  render() {
    return (
      <div>
        <h2>Keepers Newsletter Signup</h2>
        <Info/>
        <Form changeState={this.changeState}/>
      </div>
    );
  }

}

export default Card;
