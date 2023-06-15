import { UpdateForm } from 'components/UpdateForm/updateForm';
import s from './Phonebook.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/contacts/contactsOperations';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';

export const PhoneBook = () => {
  const [contactToUpdate, setContactToUpdate] = useState({});
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const showUpdateForm = contactId => {
    const contact = filterContacts.find(({ id }) => id === contactId);
    setContactToUpdate(contact);
  };
  const closeForm = () => {
    setContactToUpdate(null);
  };

  return (
    <ul className={s.contactsList}>
      {filterContacts?.map(({ name, number, id }) => {
        return (
          <li className={s.contactsItem} key={id}>
            <p>
              {name} : {number}
            </p>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContactThunk(id));
              }}
            >
              Delete
            </button>
            <button type="button" onClick={() => showUpdateForm(id)}>
              Edit
            </button>
            {contactToUpdate?.id === id && (
              <UpdateForm contact={contactToUpdate} closeForm={closeForm} />
            )}
          </li>
        );
      })}
    </ul>
  );
};
