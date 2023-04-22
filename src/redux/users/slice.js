import { createSlice } from '@reduxjs/toolkit';
import { deleteUser, fetchAll, fetchUser } from './operations';

const users = createSlice({
  name: 'users',
  initialState: { items: [], currentUser: null, isLoading: false, error: null },
  extraReducers: {
    [fetchAll.pending](state) {
      state.isLoading = true;
    },
    [fetchAll.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchAll.rejected](state, { payload }) {
      state.error = payload;
    },
    [fetchUser.pending](state) {
      state.isLoading = true;
    },
    [fetchUser.fulfilled](state, { payload }) {
      state.currentUser = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchUser.rejected](state, { payload }) {
      state.error = payload;
    },
    [deleteUser.pending](state) {
      state.isLoading = false;
    },
    [deleteUser.fulfilled](state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteUser.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export const usersReducer = users.reducer;
