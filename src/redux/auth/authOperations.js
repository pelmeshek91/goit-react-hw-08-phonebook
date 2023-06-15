import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from 'services/connectionsAPI';

export const registerUserThunk = createAsyncThunk('auth/signUp', user => {
  const data = registerUser(user);
  return data;
});
export const loginUserThunk = createAsyncThunk('auth/login', user => {
  const data = loginUser(user);
  return data;
});
export const logoutUserThunk = createAsyncThunk('auth/logOut', () => {
  logoutUser();
  return;
});
export const getCurrentUserThunk = createAsyncThunk(
  'auth/refresh',
  async () => {
    const data = await getCurrentUser();

    return data;
  }
);
