import { useReducer } from "react";

const initialInputState = {
  value: ''
  , isTouched: false
};

const inputStateReducer = (state, action) => {

  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }

  if (action.type === 'RESET') {
    return initialInputState;
  }

  return state;
}

const useInputt = (validateValue) => {

  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);
  const isValid = validateValue(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const valueBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  }

  return {
    value: inputState.value,
    isValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset
  };
}

export default useInputt;
