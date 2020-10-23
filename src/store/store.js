import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {loadingSlice} from '../slices/loading';
import {productSlice} from '../slices/product';
import {cartSlice} from '../slices/cart';

const rootReducer = combineReducers({
  loading: loadingSlice.reducer,
  product: productSlice.reducer,
  cart: cartSlice.reducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;