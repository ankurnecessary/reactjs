import useInputt from '../hooks/use-inputt';

const isNotEmpty = value => value !== '';

const BasicForm = () => {

  // For firstName field
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useInputt(isNotEmpty);

  // For lastName field
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useInputt(isNotEmpty);

  // For email field
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInputt(value => value.includes('@'));

  let isFormValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {

    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log("firstName: ", firstName);
    console.log("lastName: ", lastName);
    console.log("email: ", email);

    firstNameReset();
    lastNameReset();
    emailReset();

  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>

        <div className={`form-control ${firstNameHasError && ' invalid'}`}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Please enter first name</p>}
        </div>

        <div className={`form-control ${lastNameHasError && ' invalid'}`}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Please enter last name</p>}
        </div>

      </div>

      <div className={`form-control ${emailHasError && ' invalid'}`}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter a valid email address</p>}
      </div>

      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>

  );
};

export default BasicForm;
