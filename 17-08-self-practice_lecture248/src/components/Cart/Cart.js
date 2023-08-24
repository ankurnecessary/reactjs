import { Fragment, useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import Cartitem from './CartItem';
import classes from './Cart.module.css';
import Checkout from './Checkout';
import useHttp from '../../hooks/use-http';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isOrdered, setIsOrdered] = useState(false);
  const [isCheckoutSucessful, setIsCheckoutSucessful] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  const orderHandler = () => {
    setIsOrdered(true);
  }

  const {
    isLoading
    , sendRequest
    , hasError
  } = useHttp();

  const checkoutSuccessful = () => {
    setIsCheckoutSucessful(true);
    cartCtx.clear();
  }

  const checkoutSubmitHandler = (userDetail) => {
    sendRequest({
      url: 'https://react-http-1b987-default-rtdb.firebaseio.com/orders.json'
      , method: 'POST'
      , body: {
        user: userDetail
        , items: cartCtx.items
        , totalAmount: cartCtx.totalAmount
      }
      , headers: { 'content-type': 'application/json' }
    }, checkoutSuccessful);
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

  const actionButtons = (<div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
  </div>);

  let modalContent = (<Fragment>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>

    {isOrdered && <Checkout onCancel={props.onClose} onCheckoutSubmit={checkoutSubmitHandler} />}
    {!isOrdered && actionButtons}
  </Fragment>);

  if (isLoading) {
    modalContent = <p className={classes.loading}>Submitting details...</p>
  }

  if (hasError) {
    modalContent = (<Fragment>
      <p className={classes.error}>Error...</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>Close</button>
      </div>
    </Fragment>);
  }

  if (isCheckoutSucessful) {
    modalContent = (
      <Fragment>
        <p className={classes.loading}>Checkout successful. Order received sucessfully.</p>
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onClose}>Close</button>
        </div>
      </Fragment>
    )
  }

  return (
    <Modal onClose={props.onClose} >
      {modalContent}
    </Modal>
  );
}

export default Cart;