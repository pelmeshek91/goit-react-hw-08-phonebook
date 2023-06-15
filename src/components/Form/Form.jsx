import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addContactThunk } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Box, Button, FormBox, Input, Label } from './Form.styled';

const initialState = { name: '', number: '' };

export const Form = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleChange = ({ target: { name, value } }) => {
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    contacts.some(
      contact => contact.name.toLowerCase() === form.name.toLowerCase()
    )
      ? alert(`${form.name} is already in contacts!`)
      : dispatch(addContactThunk(form));
    setForm(initialState);
  };

  return (
    <Box>
      <h2>Phonebook</h2>
      <FormBox onSubmit={handleSubmit}>
        <Label>
          <p>Name</p>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={form.name}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <p>Number</p>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={form.number}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    </Box>
  );
};
