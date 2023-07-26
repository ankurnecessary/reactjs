import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {

    const [userInput, setUserInput] = useState({
        title: ''
        , amount: ''
        , date: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState
                , title: event.target.value
            }
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState
                , amount: event.target.value
            }
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState
                , date: event.target.value
            }
        });
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;