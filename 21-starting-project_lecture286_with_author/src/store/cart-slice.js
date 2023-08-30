import { createSlice } from "@reduxjs/toolkit";
import { uiSliceActions } from "./ui-slice";

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
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id
          , price: newItem.price
          , quantity: 1
          , totalPrice: newItem.price
          , name: newItem.title
        });
      }
      else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    }
    , removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      }
      else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    }
  }
})

export const sendCartData = (cart) => {

  return async (dispatch) => {

    dispatch(uiSliceActions.showNotification({
      status: 'pending'
      , title: 'Sending...'
      , message: 'Sending cart data'
    }));

    const sendRequest = async () => {

      const response = await fetch('https://react-http-1b987-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT'
        , body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }

    }

    try {
      await sendRequest();

      dispatch(uiSliceActions.showNotification({
        status: 'success'
        , title: 'Success!'
        , message: 'Sent cart data successfully!'
      }));
    }
    catch (error) {

      dispatch(uiSliceActions.showNotification({
        status: 'error'
        , title: 'Error!'
        , message: 'Sending cart data failed!'
      }));

    }

  };

}

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;