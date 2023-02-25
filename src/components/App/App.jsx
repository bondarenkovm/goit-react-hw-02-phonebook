import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is alreary in contacts`);
    } else {
      const newContact = { ...data };
      newContact.id = nanoid();
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, newContact] };
      });
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilterName = evt => {
    this.setState({ filter: evt.target.value });
  };

  filterContactsName = () => {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerCaseFilter)
    );
  };

  render() {
    const filteredContacts = this.filterContactsName();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm formSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChangeInput={this.onFilterName}
        ></Filter>
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        ></ContactList>
      </Container>
    );
  }
}

export { App };
