import { configureStore } from '@reduxjs/toolkit';
import drawerSlice from '../layouts/drawerSlice';

export const store = configureStore({
  reducer: {
    drawer: drawerSlice,
  },
});
