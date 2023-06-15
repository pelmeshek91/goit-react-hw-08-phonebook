import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unSetAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const getAllContacts = async () => {
  const { data } = await axios('/contacts');
  return data;
};
export const addContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};
export const deleteContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
export const updateContact = async ({ id, ...contact }) => {
  const { data } = await axios.patch(`/contacts/${id}`, contact);
  return data;
};

/* AUTH */

export const registerUser = async user => {
  const { data } = await axios.post('/users/signup', user);

  setAuthHeader(data.token);
  return data;
};
export const loginUser = async user => {
  const { data } = await axios.post('/users/login', user);

  setAuthHeader(data.token);
  return data;
};
export const logoutUser = async () => {
  await axios.post('/users/logout');
  unSetAuthHeader();
  return;
};
export const getCurrentUser = async () => {
  const { data } = await axios('/users/current');
  return data;
};
