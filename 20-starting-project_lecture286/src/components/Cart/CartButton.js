import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
const CartButton = (props) => {

  const dispatch = useDispatch();

  const productCount = useSelector(state => state.cart.count);

  const cartToggleHandler = () => {
    dispatch(cartActions.toggle());
  }

  return (
    <button onClick={cartToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{productCount}</span>
    </button>
  );
};

export default CartButton;
