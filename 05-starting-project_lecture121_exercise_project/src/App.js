import { useState } from 'react';

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
        <div>

            <UserForm onSubmit={userFormSubmitHandler} onValidityCheck={validityCheckHandler} />

            {(users.length > 0) && <UserList users={users} />}

            {!validation.valid && <ValidationOverlay message={validation.message} onValidationReset={resetValidation} />}

        </div>
    );
}

export default App;
