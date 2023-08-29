import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart'
  , initialState: {
    totalQuantity: 0
    , items: []
  }
  , reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id
          , price: newItem.price
          , quantity: 1
          , totalPrice: newItem.price
          , name: newItem.title
        });
        state.totalQuantity++;
      }
      else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    }
    , removeItemFromCart(state, action) { }
  }
})

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;