import { useEffect, useState } from 'react';
import { ImBin, ImPencil } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/contacts/contactsOperations';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { Button, ButtonBox, Item, ItemList } from './Phonebook.styled';
import { UpdateForm } from 'components/UpdateForm/updateForm';

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
    <ItemList>
      {filterContacts?.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <p>
              {name} :<span>{number}</span>
            </p>
            <ButtonBox>
              <Button type="button" onClick={() => showUpdateForm(id)}>
                <ImPencil />
              </Button>
              <Button
                type="button"
                onClick={() => {
                  dispatch(deleteContactThunk(id));
                }}
              >
                <ImBin />
              </Button>

              {contactToUpdate?.id === id && (
                <UpdateForm contact={contactToUpdate} closeForm={closeForm} />
              )}
            </ButtonBox>
          </Item>
        );
      })}
    </ItemList>
  );
};
