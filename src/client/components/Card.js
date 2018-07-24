import React, { Component } from 'react';
import Info from './Info'
import Subscribe from './SubscribePage'
// import Unsubscribe from './UnsubscribePage'
import Button from './Button'
import ThankYou from './ThankYou'
import { Link } from 'react-router-dom'

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
            <Subscribe changeState={this.changeState}/>
            <Link to="/Unsubscribe"><button>Unsubscribe</button></Link>

          </div>

        ) : (
          <ThankYou/>
        )}

        {/* <Unsubscribe changeState={this.changeState}/> */}

      </div>
    );
  }

}

export default Card;
