import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://alexlawyer.onrender.com/api/customers';

export const sendContacts = createAsyncThunk(
  'contacts/send',
  async (data, thankAPI) => {
    try {
      await axios.post('/', data);
    } catch (error) {
      thankAPI.rejectWithValue(error);
    }
  }
);
