import { cartSliceActions } from "./cart-slice";
import { uiSliceActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {

    const fetchData = async () => {

      const response = await fetch('https://react-http-1b987-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;

    }


    try {
      const data = await fetchData();
      dispatch(cartSliceActions.replaceCart(data));
    }
    catch (error) {

      dispatch(uiSliceActions.showNotification({
        status: 'error'
        , title: 'Error!'
        , message: 'Fetching cart data failed!'
      }));

    }

  }
}

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

};
