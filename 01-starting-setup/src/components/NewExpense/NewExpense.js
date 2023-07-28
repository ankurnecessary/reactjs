import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isFormEditing, setIsFormEditing] = useState(false);

    const expenseSubmitHandler = (expense) => {
        const newExpense = {
            ...expense
            , id: Math.random().toString()
        }
        props.onExpenseSubmit(newExpense);
        cancelExpenseHandler();
    }

    const addExpenseHandler = () => {
        setIsFormEditing(true);
    }

    const cancelExpenseHandler = () => {
        setIsFormEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isFormEditing && <button onClick={addExpenseHandler}>Add Expense</button>}
            {isFormEditing && <ExpenseForm onExpenseSubmit={expenseSubmitHandler} onExpenseCancel={cancelExpenseHandler} />}
        </div>
    )
}

export default NewExpense;
