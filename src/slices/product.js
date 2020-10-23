import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export const fetchProduct = createAsyncThunk(
  'product/getProduct',
  async (args, thunkApi) => {
    const response = await fetch(`${process.env.PUBLIC_URL}/product.json`);
    if (!response.ok) throw Error(response.statusText);
    return (await response.json());

  }
);

const initialState = {
  data: null,
  error: false,
  errorMessage: ''
};

export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.error = true;
      state.errorMessage = action.error.message;
    })
    builder.addCase('cart/addToCart', (state, action) => {
      const stock = {...state.data.stock};
      state.data = {
        ...state.data,
        stock: {
          ...stock,
          stockLevel: stock.stockLevel - action.payload.quantity,
          stockLevelAvailable: stock.stockLevelAvailable - action.payload.quantity,
          stockLevelStatus: (stock.stockLevelAvailable - action.payload.quantity === 0 ? 'OUTOFSTOCK' : 'INSTOCK')
        }
      };
    })
  }
});

export const selectFetchedProduct = (state) => state.product;