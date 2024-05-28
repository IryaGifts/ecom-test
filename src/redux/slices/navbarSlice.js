// src/redux/slices/navbarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: ['Home', 'Products', 'About Us', 'Contact Us'],
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setNavbarItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setNavbarItems } = navbarSlice.actions;
export default navbarSlice.reducer;
