import { useState } from 'react';

import Wrapper from '../ui/Wrapper/Wrapper';
import Button from '../ui/Button/Button';

import styles from './UserForm.module.css';

const UserForm = (props) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            props.onValidityCheck(false, 'Please enter a valid name and age (non-empty values).');
            return;
        }
        if (+age <= 0) {
            props.onValidityCheck(false, 'Please enter a valid age (> 0).');
            return;
        }
        props.onSubmit(username, age);
        setUsername('');
        setAge('');
    }

    return (
        <Wrapper>
            <form className={styles.form} onSubmit={formSubmitHandler}>
                <div>
                    <div><label htmlFor="username">Username</label></div>
                    <input id='username' type='text' value={username} onChange={usernameChangeHandler} />
                </div>
                <div>
                    <div><label htmlFor="age">Age (Years)</label></div>
                    <input id='age' type='number' value={age} onChange={ageChangeHandler} />
                </div>
                <div>
                    <Button type='submit' label='Add User' />
                </div>
            </form>
        </Wrapper>
    );
}

export default UserForm;