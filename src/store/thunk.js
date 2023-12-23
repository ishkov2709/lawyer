import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://alexlawyer.onrender.com/api/customers';

export const sendContacts = createAsyncThunk(
  'contacts/send',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('/', data);
      if (res?.status !== 200) throw new Error('Error');
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
