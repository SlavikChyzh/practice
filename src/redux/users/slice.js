import { createSlice } from '@reduxjs/toolkit';
import { fetchAll } from './operations';

const users = createSlice({
  name: 'users',
  initialState: { items: [], currentUser: null, isLoading: false, error: null },
  extraReducers: {
    [fetchAll.pending](state) {
      state.isLoading = true;
    },
    [fetchAll.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchAll.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export const usersReducer = users.reducer;
