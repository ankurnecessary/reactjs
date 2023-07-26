import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const expenseSubmitHandler = (expense) => {
        const newExpense = {
            ...expense
            , id: Math.random().toString()
        }
        props.onExpenseSubmit(newExpense);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onExpenseSubmit={expenseSubmitHandler} />
        </div>
    )
}

export default NewExpense;
