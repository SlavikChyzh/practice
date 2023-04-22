import { usersReducer } from './users/slice';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: usersReducer,
});
