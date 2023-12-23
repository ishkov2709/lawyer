import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { sendContacts } from './thunk';
import {
  sendContactsFulfilled,
  sendContactsPending,
  sendContactsRejected,
} from './operations';

const customerSlice = createSlice({
  name: 'customer',
  initialState: initialState,
  reducers: {
    reset: state => {
      state.isLoading = false;
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(sendContacts.pending, sendContactsPending)
      .addCase(sendContacts.fulfilled, sendContactsFulfilled)
      .addCase(sendContacts.rejected, sendContactsRejected),
});

export const customerReducer = customerSlice.reducer;

export const { reset } = customerSlice.actions;
