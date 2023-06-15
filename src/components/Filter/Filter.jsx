import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'redux/contacts/contactsSlice';
import { Box, Input, Label } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <Box>
      <h2>Contacts</h2>
      <Label>
        <p>Find contact by name</p>
        <Input
          type="text"
          value={filter}
          onChange={e => {
            dispatch(actions.changeFilter(e.target.value));
          }}
        />
      </Label>
    </Box>
  );
};
