import React, { useState } from "react";

import Card from "../ui/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2020");
    const yearChangeHandler = (year) => {
        setSelectedYear(year);
        console.log("Expenses.js: ", year);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear() === Number(selectedYear)
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    yearSelected={selectedYear}
                    onYearChange={yearChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
