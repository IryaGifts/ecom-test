// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './slices/navbarSlice';
import productReducer from './slices/productSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    product: productReducer,
  },
});

export default store;
