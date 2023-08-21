import { useState } from "react";

const useInputt = (fieldValidator) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const isValid = fieldValidator(value);
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  }

  return {
    value,
    isTouched,
    isValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset
  };
}

export default useInputt;
