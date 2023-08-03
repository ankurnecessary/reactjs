import React, { useState, Fragment } from 'react';

import './App.css';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import ValidationOverlay from './components/ValidationOverlay/ValidationOverlay';

function App() {
    const [validation, setValidation] = useState({ valid: true, message: '' });
    const [users, setUsers] = useState([]);

    const resetValidation = () => {
        setValidation({ valid: true, message: '' });
    }

    const validityCheckHandler = (valid, message) => {
        setValidation({ valid, message });
    }

    const userFormSubmitHandler = (username, age) => {
        setUsers((previousUsers) => ([...previousUsers, { username, age, id: Math.random().toString() }]));
    }

    return (
        <React.Fragment>

            <UserForm onSubmit={userFormSubmitHandler} onValidityCheck={validityCheckHandler} />

            {(users.length > 0) && <UserList users={users} />}

            {!validation.valid && <ValidationOverlay message={validation.message} onValidationReset={resetValidation} />}

        </React.Fragment>
    );

    // Other 2 ways of using fragments
    // Way 1
    /*return (
        <Fragment>

            <UserForm onSubmit={userFormSubmitHandler} onValidityCheck={validityCheckHandler} />

            {(users.length > 0) && <UserList users={users} />}

            {!validation.valid && <ValidationOverlay message={validation.message} onValidationReset={resetValidation} />}

        </Fragment>
    );*/

    // Way 2
    /*return (
        <>

            <UserForm onSubmit={userFormSubmitHandler} onValidityCheck={validityCheckHandler} />

            {(users.length > 0) && <UserList users={users} />}

            {!validation.valid && <ValidationOverlay message={validation.message} onValidationReset={resetValidation} />}

        </>
    );*/
}

export default App;
