import { configureStore } from '@reduxjs/toolkit';
import drawerSlice from '../layouts/drawerSlice';
import cartSlice from '../features/Cart/cartSlice';
import snackBarSlice from '../features/Auth/snackBarSlice';
export const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    cart: cartSlice,
    snackBar: snackBarSlice,
  },
});
