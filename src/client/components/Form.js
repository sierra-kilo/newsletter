import React from 'react'
// import Materialize from 'materialize-css'
import axios from 'axios'
import Button from './Button'

// function handleChange(e) {
//     Materialize.updateTextFields();
//   }

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      error: ''
    }
    this.onEmailChange = this.onEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  onEmailChange = (e) => {
    // Materialize.updateTextFields();
    const email = e.target.value;
    this.setState(() => ({ email }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.state.email;
    this.setState(() => ({
      email: ''
    }))

    axios.post("/api/emails/", {
      email
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


  }

  render() {
    return (
      <div>

        <form onSubmit={(e) => {
          this.handleSubmit(e)
          this.props.changeState()
        }}>
          <input
            id="email"
            type="email"
            // className="validate"
            name="email"
            autoFocus
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <Button/>
          {/* <button type='submit' className="waves-effect waves-light btn button">Add Email</button> */}
        </form>
      </div>
    )
  }
}
