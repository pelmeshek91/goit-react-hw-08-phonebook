import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
} from './authOperations';

const handleFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, { error }) => {
  state.error = error.message;
};
const handleLogOutFulfilled = state => {
  state.token = null;
  state.user = { name: null, email: null };
  state.isLoggedIn = false;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(logoutUserThunk.fulfilled, handleLogOutFulfilled)

      .addCase(logoutUserThunk.rejected, handleRejected)

      .addMatcher(
        isAnyOf(registerUserThunk.fulfilled, loginUserThunk.fulfilled),
        handleFulfilled
      )

      .addMatcher(
        isAnyOf(registerUserThunk.pending, loginUserThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(registerUserThunk.rejected, loginUserThunk.rejected),
        handleRejected
      ),
});

export const authReducer = authSlice.reducer;
