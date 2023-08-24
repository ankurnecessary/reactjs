import { useEffect, useState } from "react";

const useValidation = (validationChecker, isSubmitted) => {

  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState();
  const isValid = validationChecker(value);
  const hasError = isTouched && isValid;

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  }

  const inputBlurHandler = () => {
    setIsTouched(true);
  }

  const reset = () => {
    setValue('');
  }

  useEffect(() => {
    if (isSubmitted) {
      setIsTouched(true);
    }
  }, [isSubmitted])

  return {
    value
    , isValid
    , hasError
    , inputChangeHandler
    , inputBlurHandler
    , reset
  };

}

export default useValidation;
