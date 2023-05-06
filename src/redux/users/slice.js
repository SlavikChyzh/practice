import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addUsers,
  deleteUser,
  editUser,
  fetchAll,
  fetchUser,
} from './operations';

// const users = createSlice({
//   name: 'users',
//   initialState: { items: [], currentUser: null, isLoading: false, error: null },
//   extraReducers: {
//     [fetchAll.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchAll.fulfilled](state, { payload }) {
//       state.items = payload;
//       state.isLoading = false;
//       state.error = null;
//     },
//     [fetchAll.rejected](state, { payload }) {
//       state.error = payload;
//     },
//     [fetchUser.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchUser.fulfilled](state, { payload }) {
//       state.currentUser = payload;
//       state.isLoading = false;
//       state.error = null;
//     },
//     [fetchUser.rejected](state, { payload }) {
//       state.error = payload;
//     },
//     [deleteUser.pending](state) {
//       state.isLoading = true;
//     },
//     [deleteUser.fulfilled](state, { payload }) {
//       state.items = state.items.filter(item => item.id !== payload);
//       state.isLoading = false;
//       state.error = null;
//     },
//     [deleteUser.rejected](state, { payload }) {
//       state.error = payload;
//       state.isLoading = false;
//     },
//     [addUsers.pending](state) {
//       state.isLoading = true;
//     },
//     [addUsers.fulfilled](state, { payload }) {
//       state.items.push(payload);
//       state.isLoading = false;
//       state.error = null;
//     },
//     [addUsers.rejected](state, { payload }) {
//       state.error = payload;
//       state.isLoading = false;
//     },
//     [editUser.pending](state) {
//       state.isLoading = true;
//     },
//     [editUser.fulfilled](state, { payload }) {
//       const index = state.items.findIndex(el => {
//         return el.id === payload.id;
//       });
//       state.items[index] = payload;
//       // state.items.splice(index, 1, payload)
//       state.isLoading = false;
//       state.error = null;
//     },
//     [editUser.rejected](state, { payload }) {
//       state.error = payload;
//       state.isLoading = false;
//     },
//   },
// });

const users = createSlice({
  name: 'users',
  initialState: { items: [], currentUser: null, isLoading: false, error: null },
  extraReducers: builder => {
    builder
      // .addCase(fetchAll.pending, state => (state.isLoading = true))
      .addCase(fetchAll.fulfilled, (state, { payload }) => {
        state.items = payload;
        // state.isLoading = false;
        // state.error = null;
      })
      // .addCase(
      //   fetchAll.rejected,
      //   (state, { payload }) => (state.error = payload)
      // )
      // .addCase(fetchUser.pending, state => {
      // state.isLoading = true;
      // })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
        // state.isLoading = false;
        // state.error = null;
      })
      // .addCase(fetchUser.rejected, (state, { payload }) => {
      //   state.error = payload;
      // })
      // .addCase(deleteUser.pending, state => {
      // state.isLoading = true;
      // })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
        // state.isLoading = false;
        // state.error = null;
      })
      // .addCase(deleteUser.rejected, (state, { payload }) => {
      //   state.error = payload;
      //   state.isLoading = false;
      // })
      // .addCase(addUsers.pending, state => {
      //   state.isLoading = true;
      // })
      .addCase(addUsers.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        // state.isLoading = false;
        // state.error = null;
      })
      // .addCase(addUsers.rejected, (state, { payload }) => {
      //   state.error = payload;
      //   state.isLoading = false;
      // })
      // .addCase(editUser.pending, state => {
      //   state.isLoading = true;
      // })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(el => {
          return el.id === payload.id;
        });
        state.items[index] = payload;
        //     // state.items.splice(index, 1, payload)
        // state.isLoading = false;
        // state.error = null;
      })
      // .addCase(editUser.rejected, (state, { payload }) => {
      //   state.error = payload;
      //   state.isLoading = false;
      // })
      .addMatcher(
        isAnyOf(
          fetchAll.pending,
          fetchUser.pending,
          deleteUser.pending,
          addUsers.pending,
          editUser.pending
        ),
        state => { state.isLoading = true }
      )
      .addMatcher(
        isAnyOf(
          fetchAll.fulfilled,
          fetchUser.fulfilled,
          deleteUser.fulfilled,
          addUsers.fulfilled,
          editUser.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAll.rejected,
          fetchUser.rejected,
          deleteUser.rejected,
          addUsers.rejected,
          editUser.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
});

export const usersReducer = users.reducer;
