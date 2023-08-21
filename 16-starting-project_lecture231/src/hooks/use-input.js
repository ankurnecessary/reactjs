import { useState } from "react";

const useInput = (setValidity) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const isValid = setValidity(value);
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  }

  const valueInputBlurHandler = () => {
    setIsTouched(true);
  }

  const reset = () => {
    setValue('');
    setIsTouched(false);
  }

  return {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    valueInputBlurHandler,
    reset
  };
}

export default useInput;
