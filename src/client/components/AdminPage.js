import React, { Component } from 'react';

class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
    allEmails: []
  }
}

  componentDidMount() {
    fetch("/api/emails/")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(emails => ({
        email: `${emails.email}`,
        id: `${emails.id}`
      }))).then(emails => this.setState({allEmails: emails}))
  }


  render() {
    console.log(this.state.allEmails);
    return (
      <div>
        <h2>Admin</h2>
        <div>
          <ul>
            { this.state.allEmails.map((email) => {
              return <li key={email.id}>{email.email}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }

}

export default Admin;
