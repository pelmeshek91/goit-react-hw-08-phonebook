import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getAllContacts,
  updateContact,
} from 'services/connectionsAPI';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllContacts();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await addContact(contact);

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await deleteContact(contactId);
      return contactId;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const updateContactThunk = createAsyncThunk(
  'contacts/updateContact',
  contact => {
    const data = updateContact(contact);
    return data;
  }
);
