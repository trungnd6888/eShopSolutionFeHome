import { createSlice } from '@reduxjs/toolkit';

const snackBarSlice = createSlice({
  name: 'snackBar',
  initialState: {
    status: false,
    message: '',
    type: 'success',
  },
  reducers: {
    open: (state, action) => {
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
  },
});

const { actions, reducer } = snackBarSlice;
export const { open } = actions;
export default reducer;
