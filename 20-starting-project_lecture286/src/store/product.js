import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 'p1'
      , title: 'Test'
      , description: 'This is a first product - amazing!'
      , price: 6
    }
    , {
      id: 'p2'
      , title: 'Product'
      , description: 'This is second one'
      , price: 10
    }
  ]
}

const productSlice = createSlice({
  name: 'products'
  , initialState
  , reducers: {}
})

export const poductActions = productSlice.actions;

export default productSlice.reducer;