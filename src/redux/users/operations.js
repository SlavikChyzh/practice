import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64439097466f7c2b4b55e9dc.mockapi.io/';

export const fetchAll = createAsyncThunk(
  'users/fetchall',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('users');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`users/${id}`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`users/${id}`);
      return id;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
