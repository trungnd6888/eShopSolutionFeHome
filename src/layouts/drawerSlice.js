import { createSlice } from '@reduxjs/toolkit';

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState: false,
  reducers: {
    openDrawer: (state, action) => (state = action.payload),
  },
});

export const { openDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
