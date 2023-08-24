import { useState } from 'react';
import useValidation from '../../hooks/use-validation';
import classes from './Checkout.module.css';

const isBlank = value => value.trim() === '';
const hasFiveChar = value => value.trim().length !== 5;

const Checkout = (props) => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    value: nameValue
    , isValid: nameIsValid
    , hasError: nameHasError
    , inputChangeHandler: nameInputChangeHandler
    , inputBlurHandler: nameInputBlurHandler
  } = useValidation(isBlank, isSubmitted);

  const {
    value: streetValue
    , isValid: streetIsValid
    , hasError: streetHasError
    , inputChangeHandler: streetInputChangeHandler
    , inputBlurHandler: streetInputBlurHandler
  } = useValidation(isBlank, isSubmitted);

  const {
    value: postalCodeValue
    , isValid: postalCodeIsValid
    , hasError: postalCodeHasError
    , inputChangeHandler: postalCodeInputChangeHandler
    , inputBlurHandler: postalCodeInputBlurHandler
  } = useValidation(hasFiveChar, isSubmitted);

  const {
    value: cityValue
    , isValid: cityIsValid
    , hasError: cityHasError
    , inputChangeHandler: cityInputChangeHandler
    , inputBlurHandler: cityInputBlurHandler
  } = useValidation(isBlank, isSubmitted);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (cityIsValid || postalCodeIsValid || streetIsValid || nameIsValid) return;

    props.onCheckoutSubmit({
      city: cityValue
      , postalCode: postalCodeValue
      , street: streetValue
      , name: nameValue
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler} >
      <div className={`${classes.control} ${nameHasError && classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={nameValue}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameHasError && <p>Please enter a name</p>}
      </div>
      <div className={`${classes.control} ${streetHasError && classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input
          type='text'
          id='street'
          value={streetValue}
          onChange={streetInputChangeHandler}
          onBlur={streetInputBlurHandler}
        />
        {streetHasError && <p>Please enter a street</p>}
      </div>
      <div className={`${classes.control} ${postalCodeHasError && classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input
          type='text'
          id='postal'
          value={postalCodeValue}
          onChange={postalCodeInputChangeHandler}
          onBlur={postalCodeInputBlurHandler}
        />
        {postalCodeHasError && <p>Please enter 5 digits for postal code</p>}
      </div>
      <div className={`${classes.control} ${cityHasError && classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          value={cityValue}
          onChange={cityInputChangeHandler}
          onBlur={cityInputBlurHandler}
        />
        {cityHasError && <p>Please enter a city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;