import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  /* Item's object { 
    id: ''
    , title: ''
    , description: ''
    , quantity: 1
    , price: 0
    , total: 0
  }*/
  items: []
  , count: 0
  , isVisible: true
};

const cartSlice = createSlice({
  name: 'cart'
  , initialState
  , reducers: {
    addItemToCart(state, item) {
      const itemId = item.payload.id;
      const existingItem = state.items.find(item => item.id === itemId);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += existingItem.price;
      }
      else {
        state.items.push({ ...item.payload, quantity: 1, total: item.payload.price });
        state.count++;
      }
    }
    , decreaseQuantity(state, id) {
      const existingItem = state.items.find(item => item.id === id.payload);
      if (existingItem.quantity === 1) {
        const idx = state.items.indexOf(existingItem);
        state.items.splice(idx, 1);
        state.count--;
      }
      else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }

    }
    , increaseQuantity(state, id) {
      const existingItem = state.items.find(item => item.id === id.payload);
      existingItem.quantity++;
      existingItem.total += existingItem.price;
    }
    , toggle(state) {
      state.isVisible = !state.isVisible
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;