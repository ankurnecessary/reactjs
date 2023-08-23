import { Fragment, useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import Cartitem from './CartItem';
import classes from './Cart.module.css';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {
        cartCtx.items.map((item) => (
          <Cartitem
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))
      }
    </ul>
  )

  const orderHandler = () => {
    setIsCheckout(true);
  }

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      {hasItems && <button onClick={orderHandler} className={classes.button}>Order</button>}
    </div>
  );

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch('https://react-http-1b987-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST'
      , body: JSON.stringify({
        user: userData
        , orderedItems: cartCtx.items
      })
      , headers: {
        'content-type': 'application/json'
      }
    })
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  }

  const cartModalContent = <Fragment>
    {cartItems}
    <div className={classes.total} >
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div >
    {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
    {!isCheckout && modalActions}
  </Fragment>;

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = <Fragment>
    <p>Order placed successfully</p>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
    </div>
  </Fragment>;

  return (
    <Modal onClose={props.onClose} >
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;