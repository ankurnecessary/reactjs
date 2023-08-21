const BasicForm = (props) => {
  return (
    <form>
      <div className='control-group'>

        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' />
          <p className="error-text">Please enter first name</p>
        </div>

        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
          <p className="error-text">Please enter last name</p>
        </div>

      </div>

      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
        <p className="error-text">Please enter a valid email address</p>
      </div>

      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>

  );
};

export default BasicForm;
