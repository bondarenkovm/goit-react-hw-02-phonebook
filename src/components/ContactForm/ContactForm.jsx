import { Component } from 'react';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Label, Button } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    // contacts: [],
    name: '',
    number: '',
  };

  //   nameId = nanoid(10);
  //   numberId = nanoid(10);

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.formSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <input
            type="text"
            name="name"
            // id={this.nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          Number:
          <input
            type="tel"
            name="number"
            // id={this.numberId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </Label>
        <Button type="submit">ADD CONTACT</Button>
      </Form>
    );
  }
}

export { ContactForm };

ContactForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};
