import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(localStorage.getItem('cart')) || [],
  reducers: {
    increment: (state, action) => {
      const cartItem = state.find((x) => x.productId === action.payload.productId);

      cartItem
        ? (cartItem.quantity += action.payload.quantity)
        : (state = [
            ...state,
            { productId: action.payload.productId, quantity: action.payload.quantity },
          ]);

      localStorage.setItem('cart', JSON.stringify(state));

      return state;
    },
    decreament: (state, action) => {
      const cartItem = state.find((x) => x.productId === action.payload.productId);
      if (!cartItem) return;

      if (cartItem.quantity - action.payload.quantity < 1) {
        state = state.filter((x) => x.productId !== action.payload.productId);
      } else {
        cartItem.quantity -= action.payload.quantity;
      }

      localStorage.setItem('cart', JSON.stringify(state));
      return state;
    },
  },
});

export const { increment, decreament } = cartSlice.actions;
export default cartSlice.reducer;
