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
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(sendContacts.pending, sendContactsPending)
      .addCase(sendContacts.fulfilled, sendContactsFulfilled)
      .addCase(sendContacts.rejected, sendContactsRejected),
});

export const customerReducer = customerSlice.reducer;
