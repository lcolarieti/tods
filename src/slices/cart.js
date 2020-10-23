import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    }
  }
});

export const {
  addToCart
} = cartSlice.actions;

export const selectCart = (state) => state.cart.items;