import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
  updateContactThunk,
} from './contactsOperations';
import { initialState } from './initialState';

const handleGetContacts = ({ contacts }, { payload }) => {
  contacts.items = payload;
};

const handleAddContact = ({ contacts }, { payload }) => {
  contacts.items.push(payload);
};

const handleDeleteContact = ({ contacts }, { payload }) => {
  console.log(payload);
  contacts.items = contacts.items.filter(el => el.id !== payload);
};
const handleUpdateContact = ({ contacts }, { payload }) => {
  const index = contacts.items.findIndex(contact => contact.id === payload.id);
  contacts.items[index] = payload;
  contacts.isLoading = false;
};
const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
};
const handleFulfilled = ({ contacts }) => {
  contacts.isLoading = false;
  contacts.error = null;
};

const handleRejected = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContactsThunk.fulfilled, handleGetContacts)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContact)
      .addCase(updateContactThunk.fulfilled, handleUpdateContact)
      .addMatcher(action => {
        return action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        return action.type.endsWith('/fulfilled');
      }, handleFulfilled)
      .addMatcher(action => {
        return action.type.endsWith('/rejected');
      }, handleRejected),
});

export const { actions } = contactsSlice;

export const contactsReducer = contactsSlice.reducer;
