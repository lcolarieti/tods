import {createSlice} from '@reduxjs/toolkit';
import {fetchProduct} from './product';

const initialState = {
  status: true
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialState,
  reducers: {
    setLoading(state, action) {
      state.status = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.status = false;
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.status = false;
    })
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.status = true;
    })
  }
});

export const {
  setLoading
} = loadingSlice.actions;

export const selectLoading = (state) => state.loading.status;