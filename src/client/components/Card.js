import React, { Component } from 'react';
import Info from './Info'
import Form from './Form'
import Button from './Button'
import ThankYou from './ThankYou'

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
      submitted: true //!(this.state.submitted)
    })
    setInterval(() => {
      this.setState({
        submitted: false
      })
    }, 20000)
  }

  render() {
    return (
      <div>
        <h2>Keepers Newsletter Signup</h2>

        {!(this.state.submitted) ? (
          <div>
            <Info/>
            <Form changeState={this.changeState}/>
          </div>

        ) : (
          <ThankYou/>
        )}

      </div>
    );
  }

}

export default Card;
