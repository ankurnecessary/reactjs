import React, { useState } from "react";

import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2020");
    const yearChangeHandler = (year) => {
        setSelectedYear(year);
        console.log("Expenses.js: ", year);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter yearSelected={selectedYear} onYearChange={yearChangeHandler} />
                {
                    props.items.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                }
            </Card>
        </div>
    );
}

export default Expenses;
