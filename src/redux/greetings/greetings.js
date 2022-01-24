import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://nelsino-hrbe.herokuapp.com/api/v1/greetings';

const initialState = {
  status: 'idle',
  greeting: {
    id: '01293',
    message: 'Default Greeting',
  },
  error: {},
};

export const getGreetings = createAsyncThunk(
  'redux/books/getBooks',
  async () => {
    const response = await axios.get(URL)
      .catch((error) => error);
    return response.data;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: {
    [getGreetings.pending.type]: (state) => ({ ...state, status: 'loading', error: {} }),
    [getGreetings.fulfilled.type]: (state, action) => (
      {
        ...state, status: 'idle', greeting: action.payload, error: {},
      }),
  },
});

export default greetingSlice.reducer;
