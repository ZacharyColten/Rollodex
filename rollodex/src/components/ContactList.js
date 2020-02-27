import React, { Component } from 'react';
import ContactItem from './ContactItem'

class ContactList extends Component {

  state = {
    contacts: []
  }

  fetchContacts = () => {
    fetch(`https://randomuser.me/api?results=25`)
      .then(results => results.json())
      .then(data => {
        this.setState({
          contacts: data.results
        })


      })

  }
  render() {
    return (
      <div>
        <button onClick={this.fetchContacts}>List Contacts</button>
        {
          this.state.contacts.map(contact => {
            return <ContactItem name={contact.name.first} picture={contact.picture.medium} details={contact.email} />
          })
        }

      </div>
    );
  }
}
export default ContactList;