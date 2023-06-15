import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContactThunk } from 'redux/contacts/contactsOperations';

export const UpdateForm = ({ contact, closeForm }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateContactThunk({ ...contact, name, number }));
    setName('');
    setNumber('');
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        autoComplete="false"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="  number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit">Save</button>
    </form>
  );
};
