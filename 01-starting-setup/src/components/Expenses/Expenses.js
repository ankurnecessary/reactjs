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

    let filterInfoText = "2019, 2021 and 2022";
    if (selectedYear === '2019') {
        filterInfoText = "2020, 2021 and 2022";
    }
    else if (selectedYear === '2021') {
        filterInfoText = "2019, 2020 and 2022";
    }
    else {
        filterInfoText = "2019, 2020 and 2021";
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter yearSelected={selectedYear} onYearChange={yearChangeHandler} />
                {filterInfoText}
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date} />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date} />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date} />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date} />
            </Card>
        </div>
    );
}

export default Expenses;
