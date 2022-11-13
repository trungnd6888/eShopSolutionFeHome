import { configureStore } from '@reduxjs/toolkit';
import drawerSlice from '../layouts/drawerSlice';
import cartSlice from '../features/Cart/cartSlice';
import snackBarSlice from '../features/Auth/snackBarSlice';
import authReducer from '../features/Auth/authSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    drawer: drawerSlice,
    cart: cartSlice,
    snackBar: snackBarSlice,
  },
});
