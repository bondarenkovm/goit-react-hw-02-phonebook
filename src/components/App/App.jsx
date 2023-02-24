import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    const newContact = { ...data, id: nanoid(10) };
    // newContact.id = nanoid();
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm formSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts}></ContactList>
      </Container>
    );
  }
}

export { App };
